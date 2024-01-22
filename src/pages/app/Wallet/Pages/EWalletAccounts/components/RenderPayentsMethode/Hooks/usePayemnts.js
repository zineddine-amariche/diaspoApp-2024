import * as Yup from 'yup';
import {fr} from 'yup-locales';
import {setLocale} from 'yup';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { CreateEwallets } from '../../../../../../../../redux/Features/CreateWallets/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetCode } from '../../../../../../../../redux/Features/ConfirmAccount/CodeSlice';
import { resetTontine } from '../../../../../../../../redux/Features/Tontine/ManageTontine/Slices/tontineSlice';
import { Logout } from '../../../../../../../../redux/Features/authentification/Login/Slice';
import Toast from 'react-native-simple-toast';
import { listingMethods } from '../../../../../../../../redux/Features/Payements/getPayementMethods/slice';

setLocale(fr);
export function usePayemnts() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const State0 = {
    mobileNumber: '',
    type: 'E_WALLET',
    name: '',
  };

  const clearAsyncStorage = async () => {
    dispatch(Logout());
    dispatch(resetTontine());
    dispatch(resetCode());
    await AsyncStorage.clear();
  };

  const onErrorAction = () => {
    clearAsyncStorage();
  };



  const onError = () => { 
    // Toast.show('get payements failed');

   }

   const onSuccessActionpayements = () => { 
    // Toast.show('get payements failed');

   }
   

  const onSuccessAction = (userId) => {

    // navigation.navigate('DiaspoBottomTab')
     Toast.show('success');
    let object = {
      userId,
      onError,
      onSuccessActionpayements,
    };

    dispatch(listingMethods(object));

  };


  const onErrorS = () => {
    navigation.navigate('DiaspoBottomTab')
    Toast.show('failed on create wallet ');
  };


  
  const AddPayement = async obj => {
    console.log('obj', obj);

    let object = {
      info:obj,
      onSuccessAction,
      onErrorAction,
      onErrorS,
    };
    dispatch(CreateEwallets(object));
  };

  let validationSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .matches(
        /^(?:(?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(?:(?:\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{4}|\d{2}[\- ]?\d{3}[\- ]?\d{3})$/,
        'Must be a valid phone number!',
      )
      .required('Phone number is required')
      .max(15, 'Must be a valid phone number'),
    name: Yup.string()
    .required('Phone number is required'),
    type: Yup.string()
    .required('type is required'),
  });

  return {
    validationSchema,
    State0,
    AddPayement,
  };
}
