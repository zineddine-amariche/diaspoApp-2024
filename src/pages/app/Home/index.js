import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import PrimaryHead from '../../../components/Headers/root/PrimaryHead';
import Main from './Components/main';
import WalletsList from '../../../components/views/Rectangle-Price';
import Recent from './Components/Recent';
import HomeLayout from '../../../components/views/Layouts/AppLayout/HomeLayout';
import Space from '../../../components/Space';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {walletAccounts} from '../../../redux/Features/WalletAccount/Slice';
import {updateNotify} from '../../../redux/Features/Tontine/Participants/updateUserNotify/slice';
import {getUserInformations} from '../../../redux/Features/authentification/User_informations/slice';
import Spiner from '../../../components/spiner';
import {useIsFocused} from '@react-navigation/native';
import {UseHome} from './Hooks/useHooks';
import {Modalize} from 'react-native-modalize';
import {COLORS} from '../../../theme';
import ContentRenders from './Components/renderItems/ContentRenders';
import {getAllTransactions} from '../../../redux/Features/Transactions/Slice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const modalRef = useRef(null);


  const {object, objectUpdate, objectWallet, heightBottomSheet} = UseHome();

  const {informationsUser, isLoading: loader} = useSelector(
    state => state.userInformations,
  );
  const {isLoading, accountId} = useSelector(state => state.walletAccounts);

  const {user} = useSelector(state => ({
    ...state.auth,
  }));

  let token = user?.AccessToken;
  let userId = user?.userId;


  const handleCloseModal = () => {
    setTimeout(() => {
      
      modalRef.current?.close();
    }, 400);
  };

  const nav = (to, data) => {
    handleCloseModal()
    navigation.navigate(to, data);
  };

  let obje = {
    accountId,
    userId,
  };



  const onOpen = () => {
    modalRef.current?.open();
  };

  const onErrorAction = () => {
    console.log('error');
  };

  const navHistoryTransaction = () => {
    navigation.navigate('HistoryTransaction', {info: obje});
  };

  let title = `Welcome ${informationsUser?.data?.walletAccountUser?.firstName} ${informationsUser?.data?.walletAccountUser?.lastName}`;

  useEffect(() => {
    dispatch(updateNotify(objectUpdate));
  }, [objectUpdate.data.deviceToken, objectUpdate.data.deviceOs]);

  useEffect(() => {
    if (userId && token) {
      dispatch(walletAccounts(objectWallet));
    }
  }, [token, userId, isFocused]);

  useEffect(() => {
    let object = {
      accountId,
      userId,
      onErrorAction,
    };
    if (accountId) {
      dispatch(getAllTransactions(object));
    }
  }, [accountId, isFocused]);

  useEffect(() => {
    let objec = {
      userId: object.userId,
      onErrorAction: object.onErrorAction,
    };
    dispatch(getUserInformations(objec));
  }, [isFocused, token]);

  return (
    <>
      {isLoading || loader ? (
        <Spiner />
      ) : (
        <HomeLayout>
          <PrimaryHead
            title={title}
            openDrawer={() => navigation.toggleDrawer()}
            navigation={() => navigation.navigate('Notifications')}
          />
          <ScrollView>
            <Main navigation={navigation} onPress={onOpen} />
            <WalletsList onPress={nav}/>
            <Space space={17} />
            <Recent onPress={navHistoryTransaction} />
            <Space space={140} />
          </ScrollView>

          <Modalize
            snapPoint={heightBottomSheet}
            ref={modalRef}
            overlayStyle={{
              backgroundColor: COLORS.blueGreenOpacity9,
            }}
            adjustToContentHeight={false}>
            <ContentRenders
              nav={nav}
              type={'cashin'}
              closeAll={handleCloseModal}
              name={'cashin'}
            />
          </Modalize>
        </HomeLayout>
      )}
    </>
  );
};

export default Home;


