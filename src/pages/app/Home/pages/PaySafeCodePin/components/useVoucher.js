import {useCallback, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearCodeVoucher,
  getPayCode1,
  getPayCode2,
  getPayCode3,
  getPayCode4,
  showIsSuccess,
} from '../../../../../../redux/Features/Global/PaysafeCard';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';

export function UseVoucher() {
  const [codePart1, setCodePart1] = useState('');
  const [codePart2, setCodePart2] = useState('');
  const [codePart3, setCodePart3] = useState('');
  const [codePart4, setCodePart4] = useState('');

  const codePart1Ref = useRef();
  const codePart2Ref = useRef();
  const codePart3Ref = useRef();
  const codePart4Ref = useRef();

  const {code1, code2, code3, code4} = useSelector(state => ({
    ...state.PaySafeCard,
  }));

  const dispatch = useDispatch();

  const handleCodePart1Change = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    setCodePart1(cleanedText);
    dispatch(getPayCode1(cleanedText));
    if (cleanedText.length === 0) {
      codePart1Ref.current.focus();
    } else if (cleanedText.length === 4) {
      codePart2Ref.current.focus();
    }
  };

  const handleCodePart2Change = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    setCodePart2(cleanedText);
    dispatch(getPayCode2(cleanedText));

    if (cleanedText.length === 0) {
      codePart1Ref.current.focus();
    } else if (cleanedText.length === 4) {
      codePart3Ref.current.focus();
    }
  };

  const handleCodePart3Change = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    setCodePart3(cleanedText);
    dispatch(getPayCode3(cleanedText));

    if (cleanedText.length === 0) {
      codePart2Ref.current.focus();
    } else if (cleanedText.length === 4) {
      codePart4Ref.current.focus();
    }
  };

  const handleCodePart4Change = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    setCodePart4(cleanedText);
    dispatch(getPayCode4(cleanedText));

    if (
      cleanedText.length === 0 &&
      code3 === '' &&
      code2 === '' &&
      code1 === ''
    ) {
      codePart1Ref.current.focus();
    }

    // if (cleanedText.length === 0) {
    //   codePart3Ref.current.focus();
    // }
  };

  const handleVoucherCodeSubmit = values => {
    dispatch(showIsSuccess(true));
  };


  const navigation= useNavigation()
  const handleCodePartKeyPress = (e, part) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      part === 'part2' &&
      codePart2.length === 0
    ) {
      codePart1Ref.current.focus();
    } else if (
      e.nativeEvent.key === 'Backspace' &&
      part === 'part3' &&
      codePart3.length === 0
    ) {
      codePart2Ref.current.focus();
    } else if (
      e.nativeEvent.key === 'Backspace' &&
      part === 'part4' &&
      codePart4.length === 0
    ) {
      codePart3Ref.current.focus();
    }
  };

  // const onChange = useCallback(() => {

  // }, []);

  const onChange = () => {
    dispatch(showIsSuccess(false));
    navigation.navigate('DiaspoBottomTab')
  };

  const first = () => { 
    codePart1Ref.current.focus();

   }

  return {
    codePart1,
    codePart2,
    codePart3,
    codePart4,
    handleVoucherCodeSubmit,
    handleCodePart4Change,
    handleCodePart3Change,
    handleCodePart2Change,
    handleCodePart1Change,
    codePart1Ref,
    codePart2Ref,
    codePart3Ref,
    codePart4Ref,
    handleCodePartKeyPress,
    onChange,
    first
  };
}
