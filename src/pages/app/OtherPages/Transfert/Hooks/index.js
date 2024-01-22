import * as Yup from 'yup';
import {fr} from 'yup-locales';
import {setLocale} from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useCallback} from 'react';
import {
  getAmountTransfer,
  onHandleConfirmTransfer,
  onHandleSuccessTransfer,
  walletAccountsBenef,
} from '../../../../../redux/Features/WalletAccount/Slice';
import {Logout} from '../../../../../redux/Features/authentification/Login/Slice';
import {resetTontine} from '../../../../../redux/Features/Tontine/ManageTontine/Slices/tontineSlice';
import {resetCode} from '../../../../../redux/Features/ConfirmAccount/CodeSlice';
import {resetRegister} from '../../../../../redux/Features/authentification/Register/Slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ConfirmTransfer} from '../../../../../redux/Features/Transfer/slice';
import Toast from 'react-native-simple-toast';

setLocale(fr);
export function useTransfers() {

  const dispatch = useDispatch();
  const State0 = {
    from: '',
    email: '',
    phone: '',

    amount: '',
    message: '',

    Country: '',
    bankName: '',
  };

  const State1 = {
    from: '',
    email: '',
    phone: '',

    BankNum: '',
    bankName: '',
  };


  const {accountId, accountIdBenf, amount} = useSelector(state => ({
    ...state.walletAccounts,
  }));

  const onDissmis = useCallback(() => {
    dispatch(onHandleConfirmTransfer(false));
  }, []);

  const onSuccess = () => {};

  const clearAsyncStorage = async () => {
    dispatch(Logout());
    dispatch(resetCode());
    await AsyncStorage.clear();
  };

  const onErrorAction = () => {
    clearAsyncStorage();
  };

  const onErrorActionTransfer = () => {
    dispatch(onHandleConfirmTransfer(false));
    Toast.show('Transfer failed !');
     
  };
  const onSuccessTransfer = () => {
    dispatch(onHandleSuccessTransfer(true));
    Toast.show('Transfer successfully  !');
  };
  const pressNo = () => {};

  const pressYes = () => {
    // console.log('amount', amount)
    // console.log('accountId', accountId)
    // console.log('accountIdBenf', accountIdBenf)

    let info = {
      sender: {
        accountId: accountId,
      },
      receiver: {
        beneficiaryId: accountIdBenf,
      },
      amount: amount,
    };

    let object = {
      onErrorActionTransfer,
      onSuccessTransfer,
      info,
    };
    dispatch(ConfirmTransfer(object));
  };

  const dispatchamount = amoun => {
    dispatch(getAmountTransfer(amoun));
  };

  const Transfers = async data => {
    let object = {
      userId: data.userId,
      amount: data.amount,
      onSuccess,
      onErrorAction,
      dispatchamount,
    };
    dispatch(walletAccountsBenef(object));
  };

  const emailPhoneRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

  let validationSchema = Yup.object().shape({
    from: Yup.string().required('full name is required'),
    // email: Yup.string()
    //   .max(35, " email is too long - must be 35 characters maximum.")
    //   .required(" email is required")
    //   .matches(emailPhoneRegex, "Must be a valid email number!")
    //   .min(10, " email is too short - must be at least 10 characters."),
    phone: Yup.string()
      .max(35, 'phone number  is too long - must be 35 characters maximum.')
      .required('phone number is required')
      .matches(emailPhoneRegex, 'Must be a valid phone number!')
      .min(10, 'Phone number is too short - must be at least 10 characters.'),
      amount: Yup.number()
      .typeError('Amount must be a number')
      .min(10, 'Amount must be at least 10')
      .required("Amount per person  is required"),  
    // message: Yup.string().required("message is required"),
    // Country: Yup.string().required("Country is required"),
    // bankName: Yup.string().required("bank Name is required"),
  });

  let validationSchema1 = Yup.object().shape({
    email: Yup.string()
      .max(35, 'email is too long - must be 35 characters maximum.')
      .required('email is required')
      .matches(emailPhoneRegex, 'Must be a valid  email !')
      .min(10, 'email is too short - must be at least 10 characters.'),
    from: Yup.string().required('ful name is required'),
    phone: Yup.string().required('phone number is required'),

    BankNum: Yup.string().required('Bank Number is required'),
    bankName: Yup.string().required('Bank name is required'),
  });

  const StateCode = {
    code: '',
  };
  let validationSchemaCode = Yup.object().shape({
    code: Yup.string()
      .max(6, 'Le code est trop long - doit être de 6 caractères maximum.')
      .min(6, 'Le code est trop court - doit être de 6 caractères maximum.')
      .required('code est requis'),
  });

  return {
    validationSchema,
    validationSchema1,
    State0,
    State1,
    Transfers,
    StateCode,
    validationSchemaCode,
    onSuccess,
    onDissmis,
    pressNo,
    pressYes,
  };
}
