import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logout} from '../../../../redux/Features/authentification/Login/Slice';
import {resetTontine} from '../../../../redux/Features/Tontine/ManageTontine/Slices/tontineSlice';
import {resetCode} from '../../../../redux/Features/ConfirmAccount/CodeSlice';
import {resetRegister} from '../../../../redux/Features/authentification/Register/Slice';

export function UseHome() {
  const dispatch = useDispatch();

  const onSubmit = async data => {
    // console.log("data", data);
  };

  const {user} = useSelector(state => ({
    ...state.auth,
  }));

  let token = user?.AccessToken;
  let userId = user?.userId;

  const onSuccessAction = () => {};

  const clearAsyncStorage = async () => {
    dispatch(Logout());
    dispatch(resetTontine());
    dispatch(resetCode());
    dispatch(resetRegister());
    await AsyncStorage.clear();
  };

  const onErrorAction = () => {
     clearAsyncStorage();
  };

  let object = {
    token,
    userId,
    onSuccessAction,
    onErrorAction,
  };

  const {devicetoken, deviceOS} = useSelector(state => ({
    ...state.register,
  }));

  let objectWallet = {
    userId,
    token,
    onErrorAction,
    onSuccessAction,

  };

  let objectUpdate = {
    token,
    userId,
    data: {
      deviceOs: deviceOS,
      notify: false,
      deviceToken: devicetoken,
    },
  };


   
  const {walletAccount} = useSelector(state => state.walletAccounts);

  let heightBottomSheet = walletAccount ? 800 : 400;

  return {
    onSubmit,
    object,
    objectUpdate,
    objectWallet,
    heightBottomSheet
  };
}
