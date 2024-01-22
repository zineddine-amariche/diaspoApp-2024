import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {COLORS, SIZES} from '../../../../../theme';
import RenterConnectCarte from './components/RenterConnectCarte';
import BottomSheetRemove from './BottomSheetRemove';
import {Head} from '../../../../../components/utils';
import HView from '../../../../../components/views/HView/HView';
import {
  BlackButton,
  PrimaryButtonLinear,
} from '../../../../../components/Buttons';
import BlackSuccess from '../../../../../components/views/Layouts/AuthLayout/Model/BlackSuccess';
import Line from '../../../../../components/views/line';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';
import imgz from '../../../../../Assets/mtn.png';
import {useDispatch, useSelector} from 'react-redux';
import {
  cashoutTransaction,
  handlAmount,
} from '../../../../../redux/Features/Payements/cashoutMTN/slice';
import Space from '../../../../../components/Space';
import Toast from 'react-native-simple-toast';
import CreatedSuccess from '../../../../../components/views/Layouts/AuthLayout/Model';
import {
  BodyModel,
  BodyModelErr,
} from '../../../../../components/Models/payements';
import {Modalize} from 'react-native-modalize';
import RenderCheckEWallet from '../../../../../components/payementsCheck/RenderCheckEWallet';
import RenderPayentsMethode from './components/RenderPayentsMethode';
import {listingMethods} from '../../../../../redux/Features/Payements/getPayementMethods/slice';
import { useIsFocused } from '@react-navigation/native';

const EWalletAccounts = ({navigation, route}) => {
  const {obj} = route.params;

  // console.log('-----------------', obj);
  const {values} = obj;

  let dd = {
    accountId: '64108365a33ee56f96fa4ff5',
    data: 'EWalletAccounts',
    originatorId: '641083617ad44604bf1cee97',
    values: {amount: '77'},
  };

  const bottomSheetModalRef2 = useRef(null);
  const handlePresentModalRemove = useCallback(() => {
    bottomSheetModalRef2.current?.present();
  }, []);
  const closeBottomUp2 = useCallback(() => {
    bottomSheetModalRef2.current.close();
  }, []);
  const [connected, setConnected] = useState(false);

  const connect = () => {
    setConnected(true);
  };

  const disConnect = () => {
    setConnected(false);
  };
  const [success, setsuccess] = useState(false);

  const onDissmis = useCallback(() => {
    setsuccess(false);
  }, []);
  const onSuccess = useCallback(() => {
    setsuccess(true);
  }, []);
  const dispatch = useDispatch();

  const submitMtn = () => {
    let objc = {
      amount: values.amount,
      type: 'MTN',
      currency: 'EUR',
      originator: {
        originatorType: 'User',
        originatorId: obj?.originatorId,
      },
      regions: ['5e99a07063389569485205f3'],
    };

    let object = {
      onSuccessActionMTN,
      onErrorAction,
      accountId: obj?.accountId,
      amount: values.amount,
      objc,
    };
    dispatch(cashoutTransaction(object));
  };
  const modalRef = useRef(null);
  const modalRef2 = useRef(null);

  const onOpen = () => {
    dispatch(handlAmount(values.amount));
    modalRef.current?.open();
  };

  const {isLoading} = useSelector(state => state.cashoutSlice);

  const {isLoading: loader} = useSelector(state => state.payementsMethodSlice);

  const [successMtn, setsuccessMtn] = useState(false);
  const [error, setError] = useState(false);

  const onDissmisMtn = useCallback(() => {
    setsuccessMtn(false);
    modalRef.current?.close();
    navigation.navigate('DiaspoBottomTab');
  }, []);

  const onDissmisError = useCallback(() => {
    setError(false);
    navigation.navigate('CashOut', {data: obj});
  }, []);

  const onSuccessActionMTN = value => {
    dispatch(handlAmount(value));
    Toast.show('Payment completed successfully');
    setsuccessMtn(true);
  };
  const onErrorAction = () => {
    Toast.show('Payment failed! ');
    setError(true);
  };
  const OpenPayementMthode = () => {
    modalRef2.current?.open();
  };
  const ClosePayementMthode = () => {
    modalRef2.current?.close();
  };
  const isFocused =useIsFocused()

  const onError = () => {};
  const onSuccessActionpayements = () => {};

  useEffect(() => {
    let object = {
      userId: obj.originatorId,
      onError,
      onSuccessActionpayements,
    };

    dispatch(listingMethods(object));
  }, [isFocused]);

  return (
    <ReturnHeader
      title={'E-Wallets'}
      goBack={() => {
        navigation.goBack();
      }}
      sousTitre={`1 account connected`}
      Loading={loader}>
      <View
        style={{
          flex: 1,
          marginTop: 10,
          backgroundColor: COLORS.finished,
          width: '100%',
          paddingHorizontal: 19,
        }}>
        <ScrollView
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}>
          {/* {!connected ? (
            data.map((item, index) => {
              return (
                <View key={index} style={{width: '99%'}}>
                  <RenterCarts item={item} onPress={handlePresentModalRemove} />
                </View>
              );
            })
            ) : (
            <RenderDisconnectCarts connect={connect} />
          )} */}

          {/* <RenterConnectCarte onPress={onSuccess} source={img} /> */}
          <RenterConnectCarte
            onPress={onOpen}
            source={imgz}
            isLoading={isLoading}
          />

          <ListingPayementMethods imgz={imgz}  />
        </ScrollView>
      </View>
      {/* <View style={styles.walletPos}>
        <Note />
      </View> */}

      <View style={{width: '90%', paddingTop: 20}}>
        <PrimaryButtonLinear
          disabled={true}
          onPress={() => {
            // handleSubmit();
            OpenPayementMthode();
          }}>
          add payment method
        </PrimaryButtonLinear>
      </View>

      <BlackSuccess Visible={success} onDissmis={onDissmis}>
        {BodyModel ? <BodyModell onDissmis={onDissmis} /> : null}
      </BlackSuccess>

      <BottomSheetRemove
        bottomSheetModalRef={bottomSheetModalRef2}
        onPress={handlePresentModalRemove}
        closeBottomUp2={closeBottomUp2}
        navigation={navigation}
        disConnect={disConnect}
      />

      <CreatedSuccess Visible={successMtn} onDissmis={onDissmisMtn} top={90}>
        {BodyModel ? <BodyModel onDissmis={onDissmisMtn} /> : null}
      </CreatedSuccess>

      <CreatedSuccess Visible={error} onDissmis={onDissmisError} top={90}>
        {BodyModel ? <BodyModelErr onDissmis={onDissmisError} /> : null}
      </CreatedSuccess>

      <Modalize
        snapPoint={430}
        ref={modalRef}
        overlayStyle={{
          backgroundColor: COLORS.blueGreenOpacity9,
        }}
        adjustToContentHeight={false}>
        <RenderCheckEWallet submitMtn={submitMtn} />
      </Modalize>

      <Modalize
        snapPoint={550}
        ref={modalRef2}
        overlayStyle={{
          backgroundColor: COLORS.blueGreenOpacity9,
        }}
        adjustToContentHeight={false}>
        <RenderPayentsMethode
          userId={obj.originatorId}
          ClosePayementMthode={ClosePayementMthode}
          submitMtn={OpenPayementMthode}
        />
      </Modalize>
    </ReturnHeader>
  );
};
export default EWalletAccounts;

const BodyModell = ({onDissmis}) => {
  return (
    <View style={styles.ModelContainer}>
      {/* <Image source={illusphone} style={{ width: "100%" }} /> */}

      <Head
        //  fontFamily={"Poppins-Bold"}
        style={{padding: 20, textAlign: 'center'}}
        color={COLORS.white}>
        “Diaspo” wants to open “WeChat Pay”
      </Head>

      <Line height={1} color={COLORS.darkModal} width={'100%'} />

      <HView width={'100'} style={{}}>
        <BlackButton
          color={COLORS.BlueTxt}
          width={'50%'}
          disabled
          onPress={onDissmis}
          line>
          cancel
        </BlackButton>
        <BlackButton
          color={COLORS.BlueTxt}
          width={'50%'}
          disabled
          onPress={onDissmis}>
          Open
        </BlackButton>
      </HView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.paleGrey,
    alignItems: 'center',
    flex: 1,
  },
  ImageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.width,
    height: 130,
  },
  walletPos: {
    position: 'absolute',
    bottom: 20,
  },
  ModelContainer: {
    backgroundColor: 'transparent',
  },
});

const ListingPayementMethods = ({onOpen, imgz, isLoading}) => {
  const {result} = useSelector(state => state.payementsMethodSlice);

  const reversedArray = result?.data?.userPaymentMeans
     ?.slice()
     .reverse();

  return (
    reversedArray && <>
      {reversedArray.map((i, index) => {
        return (
          <View key={index} style={{width:"99%"}}>
            <RenterConnectCarte
              onPress={onOpen}
              source={imgz}
              isLoading={isLoading}
              disabled={true}
              phoneNumber={i.eWalletAccountDetails.mobileNumber}
            />
          </View>
        );
      })}
    </>
  );
};
