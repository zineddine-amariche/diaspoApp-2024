import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

export function useValidateReoder() {
  const dispatch = useDispatch();

  const [showValidateOrder, setshowValidateOrder] = useState(false);

  const onClose = useCallback(() => {
    setshowValidateOrder(false);
  }, []);
  const onShow = useCallback(() => {
    setshowValidateOrder(true);
  }, []);

  const pressNo = () => {
    onDissmis2();
  };
  const navigation = useNavigation();


  const pressYes = ( projectId) => {
    navigation.navigate('DiaspoBottomTab')
  };

  return {
    pressNo,
    pressYes,
    dispatch,
    onClose,
    onShow,
    showValidateOrder,
  };
}
