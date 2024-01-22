import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

import ImgBack from '../../../../../Assets/Img/HomeBack.png';
import {COLORS, SIZES} from '../../../../../theme';
import SecondaryHeader from '../../../../../components/Headers/root/SecondaryHeader';
import MainAccount from '../Components/MainAccount';
import Rectangle from '../../../../../components/views/Rectangle';
import Form0 from '../Components/Forms/Form0';
import Form1 from '../Components/Forms/Form1';
import Space from '../../../../../components/Space';
import Bottom1 from './BottomSheetAccount';
import Bottom4 from './BottomSheetPassword';
import Bottom2 from './BottomSheetReceiversPhoneEmail';
import Bottom3 from './BottomSheetReceiversFullName';
import Toast from 'react-native-simple-toast';

import {
  PaleGreyButton,
  PrimaryButtonLinear,
} from '../../../../../components/Buttons';
import Line from '../../../../../components/views/line';
import CreatedSuccess from '../../../../../components/views/Layouts/AuthLayout/Model';
import {Head, Txt} from '../../../../../components/utils';
import illusphone from '../../../../../Assets/Img/illusphone.png';
import {Formik} from 'formik';
import {useTransfers} from '../Hooks';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheetSelect from './BottomSheetSelect';
import ReturnHeader from '../../../../../components/Headers/root/ReturnHeader';
import {Modalize} from 'react-native-modalize';
import RenderAppUsers from '../Components/RenderContents/RenderAppUsers';
import {connected, resetUserConnected} from '../../../../../redux/Features/Tontine/ManagePayers/ConectedUsers/slice';
import ModelConfirmTransfers from '../models/Model.ConfirmTransfers';
import {onHandleSuccessTransfer} from '../../../../../redux/Features/WalletAccount/Slice';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetNonAppUserConnected } from '../../../../../redux/Features/Tontine/ManagePayers/NonAppUsers/slice';
import { Logout } from '../../../../../redux/Features/authentification/Login/Slice';
import { resetTontine } from '../../../../../redux/Features/Tontine/ManageTontine/Slices/tontineSlice';

const BottomSheetTransfertSelectCountry = ({goBack}) => {
  const bottomSheetModalRef = useRef(null);
  const bottomSheetModalRef2 = useRef(null);
  const bottomSheetModalRef3 = useRef(null);
  const bottomSheetModalRef4 = useRef(null);
  const bottomSheetModalRef5 = useRef(null);

  const [Change, setChange] = useState();
  const [price, setPrice] = useState();

  const [isOpen, setOpen] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);

  const OpenAccount = useCallback(() => {
    setIsOpenAccount(true);
  }, []);
  const closeAccount = useCallback(() => {
    setIsOpenAccount(false);
  }, []);
  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);
  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    openDrawer();
    OpenAccount();
  }, []);

  const handlePresentModalPress2 = useCallback(() => {
    bottomSheetModalRef2.current?.present();
    openDrawer();
  }, []);

  const handlePresentModalPress3 = useCallback(() => {
    bottomSheetModalRef3.current?.present();
    openDrawer();
  }, []);

  const handlePresentModalPress4 = useCallback(() => {
    bottomSheetModalRef4.current?.present();
    openDrawer();
  }, []);

  const handlePresentModalSelect = useCallback(() => {
    bottomSheetModalRef5.current?.present();
    // openDrawer();
  }, []);
  const closeSelect = useCallback(() => {
    bottomSheetModalRef5.current?.close();
    // openDrawer();
  }, []);

  // MAIN ACOUNT
  const [selected, setSelected] = useState(0);
  const onSelect = item => {
    setSelected(item);
  };
  const contacts = useSelector(state => ({...state.contacts}));
  // console.log('contacts', contacts)

  const {validationSchema1, State1, Transfers} = useTransfers();
  const {
    validationSchema,
    State0,
    success,
    onSuccess,
    onDissmis,
    pressNo,
    pressYes,
    confirmReq,
  } = useTransfers();

  let schema = selected === 0 ? validationSchema : validationSchema1;
  let state = selected === 0 ? State0 : State1;
  // console.log('schema',schema)
  const dispatch = useDispatch();

  const ChangeAccount = Item => {
    setChange(Item.name);
    setPrice(Item.balance);
    // closeBottomUp3()

    bottomSheetModalRef.current?.close();
  };
  const modalRef = useRef(null);

  const onOpen = () => {
    modalRef.current?.open();
  };
  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  const {connectedUsers, loading, message} = useSelector(state => ({
    ...state.userApp,
  }));

  const {isLoading, showSuccessTransfer, showConfirm} = useSelector(state => ({
    ...state.walletAccounts,
  }));

  const onSuccessAction = () => {  }


  const clearAsyncStorage = async () => {
    dispatch(resetUserConnected());
    dispatch(resetNonAppUserConnected());
    dispatch(Logout());
    AsyncStorage.clear();
    dispatch(resetTontine());
  };
  const onErrorAction = () => {
    clearAsyncStorage();
  };



  // !getConnectedUsers
  useEffect(() => {
    let arr = [];
    contacts?.contacts?.map(item => {
      arr.push(item?.phoneNumbers[0]?.number);
    });
    // let object = {
    //   mobileNumbers: arr,
    //   token,
    // };

    let obj = {mobileNumbers: arr};
    let object = {
      onErrorAction,
      onSuccessAction,
      obj,
    };

    dispatch(connected(object));
  }, []);

  const {balance} = useSelector(state => state.payementsMethodSlice);

  return (
    <ReturnHeader goBack={goBack} Cancel="Return" title={'Transfer'}>
      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={(values, formikAction) => {
          // console.log('values', values.amount);
          if (balance > values.amount) {
            Transfers(values);
            formikAction.setSubmitting(false);
            formikAction.resetForm();
          } else {
            Toast.show("You do not have anough money to transfer");
          }
        }}>
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          isValid,
          setErrors,
          resetForm,
        }) => {
          useEffect(() => {
            setErrors(null);
            resetForm();
          }, [selected]);

          return (
            <>
              {Platform.OS == 'android' ? <Space space={10} /> : null}

              <ScrollView
                contentContainerStyle={{width: SIZES.width}}
                showsVerticalScrollIndicator={false}>
                {/* <MainAccount
                  onSelect={onSelect}
                  selected={selected}
                  Visible={isOpenAccount}
                  onPress={handlePresentModalPress}
                  Change={Change}
                  price={price}
                /> */}
                {/* <Space space={20} /> */}
                {
                  <View
                    padding={20}
                    style={{
                      backgroundColor: COLORS.white,
                      padding: 20,
                      alignItems: 'center',
                      marginHorizontal: 20,
                      marginTop: 40,
                      borderRadius: 8,
                      shadowColor: '#171717',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.2,
                      shadowRadius: 2,
                      elevation: 2,
                      flex: 1,
                    }}>
                    <Form0
                      handlePresentModalPress3={onOpen}
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      handlePresentModalSelect={handlePresentModalSelect}
                      setFieldValue={setFieldValue}
                      closeSelect={closeSelect}
                    />
                  </View>
                }
                <Space space={85} />
              </ScrollView>

              <PrimaryButtonLinear
                disabled={true}
                onPress={() => {
                  handleSubmit();
                }}
                width="90%"
                loading={isLoading}>
                CONFIRM
              </PrimaryButtonLinear>

              {Platform.OS == 'android' ? <Space space={20} /> : null}
              <Bottom1
                bottomSheetModalRef={bottomSheetModalRef}
                closeDrawer={closeDrawer}
                closeAccount={closeAccount}
                ChangeAccount={ChangeAccount}
              />
              <Bottom2
                bottomSheetModalRef={bottomSheetModalRef2}
                closeDrawer={closeDrawer}
                ContactsPhone={contacts.contacts}
              />
              {/* <Bottom3
                bottomSheetModalRef={bottomSheetModalRef3}
                closeDrawer={closeDrawer}
                ContactsPhone={contacts.contacts}
              /> */}
              <Bottom4
                bottomSheetModalRef={bottomSheetModalRef4}
                closeDrawer={closeDrawer}
                onSuccess={onSuccess}
              />

              <BottomSheetSelect
                bottomSheetModalRef={bottomSheetModalRef5}
                onPress={handlePresentModalSelect}
                closeSelect={closeSelect}
                setFieldValue={val => {
                  setFieldValue('bankName', val);
                }}
              />

              <CreatedSuccess
                Visible={showSuccessTransfer}
                onDissmis={onDissmis}
                top={90}>
                {BodyModel ? <BodyModel onDissmis={onDissmis} /> : null}
              </CreatedSuccess>

              <Modalize
                snapPoint={600}
                ref={modalRef}
                overlayStyle={{
                  backgroundColor: COLORS.blueGreenOpacity9,
                }}
                adjustToContentHeight={false}>
                <View
                  style={{
                    marginTop: 20,
                  }}>
                  <RenderAppUsers
                    type={'transfert'}
                    bottomSheetModalRef={bottomSheetModalRef3}
                    closeDrawer={handleCloseModal}
                    ContactsPhone={connectedUsers}
                    setFieldValue={setFieldValue}
                  />
                </View>
              </Modalize>
            </>
          );
        }}
      </Formik>

      <ModelConfirmTransfers
        success={showConfirm}
        onDissmis={onDissmis}
        pressNo={pressNo}
        pressYes={pressYes}
      />
                <Space space={85} />

    </ReturnHeader>
  );
};

const BodyModel = ({onDissmis}) => {
  const {accountId, accountIdBenf, amount} = useSelector(state => ({
    ...state.walletAccounts,
  }));
  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.ModelContainer}>
        <Image source={illusphone} style={{width: '100%'}} />

        <Head
          //  fontFamily={"Poppins-Bold"}
          style={{padding: 20, textAlign: 'center'}}>
          Transfered successfully
        </Head>
        <Txt
          color={COLORS.slateGrey}
          style={{
            paddingHorizontal: 10,
            textAlign: 'center',
            //fontFamily: "Poppins-SemiBold",
          }}>
          <Txt Bold={'700'} color={COLORS.black} fontSize={17}>
            {amount} euro
          </Txt>{' '}
          has been transfered successfully .
          {/* <Txt Bold={'700'} color={COLORS.black} fontSize={17}>
            {' '}
            Faith Felicity (+44 7538 110953).
          </Txt> */}
          {/* You can check in your account
          <Txt Bold={'400'} color={COLORS.orangeYellow} fontSize={17}>
            {' '}
            transaction history.
          </Txt> */}
        </Txt>
        <Space space={20} />
        <PaleGreyButton
          onPress={() => {
            dispatch(onHandleSuccessTransfer(false));
            navigation.navigate('DiaspoBottomTab');
          }}>
          close
        </PaleGreyButton>
      </View>
    </>
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
    top: -107,
    width: SIZES.width,
    height: 264,
    position: 'absolute',
  },
  buttonsConatiner: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    paddingTop: 15,
    position: 'absolute',
    bottom: 0,
  },
});

export default BottomSheetTransfertSelectCountry;
