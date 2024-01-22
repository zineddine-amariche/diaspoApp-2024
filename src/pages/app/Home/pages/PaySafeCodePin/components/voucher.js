import React, {useEffect, useRef} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Space from '../../../../../../components/Space';
import {Txt} from '../../../../../../components/utils';
import {COLORS} from '../../../../../../theme';
import { useSelector } from 'react-redux';

const VoucherInput = ({
  data,
  errors,
  values,
  ind,
  handleBlur,
  setFieldValue,
  touched,
  inputRefs,
  handleInputChange,
  inputs,
  setFieldError,
  setFieldTouched
}) => {
  const navigation = useNavigation();

  const isFocus = useIsFocused();
  const {isSuccess} = useSelector(state => ({
    ...state.PaySafeCard,
  }));

  useEffect(() => {
    if (inputRefs.current.length == 4) {
      setTimeout(() => {
        const firstInputRef = inputRefs.current[0];
        firstInputRef.focus();
        setFieldError("input4",false)
        setFieldTouched('input4',false)
        setFieldTouched('input1',false)
      }, 1200);
    }
  }, [isFocus,isSuccess]);

 
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {inputs.map((input, index) => (
            <View key={input} style={{flex: 1, width: '100%'}}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor:
                      errors[input] && touched[input] ? COLORS.coral : '#ccc',
                  },
                ]}
                onChangeText={text =>
                  handleInputChange(index, setFieldValue, text)
                }
                onBlur={handleBlur(input)}
                value={values[input]}
                keyboardType="numeric"
                ref={ref => (inputRefs.current[index] = ref)}
              />
            </View>
          ))}
        </View>

        <Space space={Platform.OS == 'android' ? 30 : 60} />
        <Txt color={COLORS.TextBody} fontSize={18} Bold="700">
          Or choose your voucher
        </Txt>
        <Space space={20} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChooseVoucher', {data: data, ind});
          }}>
          <Txt
            style={{
              textDecorationLine: 'underline',
            }}>
            Choose a voucher
          </Txt>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    flex: 1,
    height: 40,
  },
});

export default VoucherInput;

// onChangeText={text => {
//   if (text.length <= 4) {
//     setFieldValue(input, text);
//     if (text.length === 4 && index < inputs.length - 1) {
//       const nextInput = inputs[index + 1];
//       setFieldValue(nextInput, '');
//       this[nextInput].focus();
//     } else if (text.length === 0 && index > 0) {
//       const previousInput = inputs[index - 1];
//       setFieldValue(previousInput, '');
//       this[previousInput].focus();
//     }
//   }
// }}

{
  /* <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: errors.code1 ? COLORS.coral : '#ccc',
              },
            ]}
            ref={codePart1Ref}
            keyboardType="numeric"
            maxLength={4}
            // onChangeText={text => {
            //   handleCodePart1Change(text)
            //   //  setFieldValue('code1', code1);
            // }}
            // onChange={() => {
            //   setFieldValue('code1', codePart1);
            // }}
            // onChangeText={handleChange('code1')}

            onChangeText={text => {
              handleChange('code1')(text);
              if (text.length === 4) {
                setFieldTouched('code1', true);
                setFieldValue('code2', '');
                codePart2Ref.current.focus();

                // Focus on the second input field
              } else if (text.length === 0) {
                codePart1Ref.current.focus();
              }
            }}
            onBlur={handleBlur('code1')}
            value={values.code1}
            autoFocus={true}
            onKeyPress={e => handleCodePartKeyPress(e, 'part1')}
          />
          <TextInput
            ref={codePart2Ref}
            style={[
              styles.input,
              {
                borderColor: errors.code2 ? COLORS.coral : '#ccc',
              },
            ]}
            keyboardType="numeric"
            maxLength={4}
            onKeyPress={e => handleCodePartKeyPress(e, 'part2')}
            value={values.code2}
            onChangeText={text => {
              handleChange('code2')(text);
              if (text.length === 4) {
                setFieldTouched('code2', true);
                setFieldValue('code3', '');
                codePart3Ref.current.focus();

                // Focus on the second input field
              } else if (text.length === 0) {
                codePart2Ref.current.focus();
              }
            }}
            onBlur={handleBlur('code2')}
          />
          <TextInput
            ref={codePart3Ref}
            style={[
              styles.input,
              {
                borderColor: errors.code3 ? COLORS.coral : '#ccc',
              },
            ]}
            keyboardType="numeric"
            maxLength={4}
          
            onKeyPress={e => handleCodePartKeyPress(e, 'part3')}
            value={values.code3}
            onChangeText={text => {
              handleChange('code3')(text);
              if (text.length === 4) {
                setFieldTouched('code3', true);
                setFieldValue('code4', '');
                codePart4Ref.current.focus();

                // Focus on the second input field
              } else if (text.length === 0) {
                codePart3Ref.current.focus();
              }
            }}
            onBlur={handleBlur('code3')}
          />
          <TextInput
            ref={codePart4Ref}
            style={[
              styles.input,
              {
                borderColor: errors.code4 ? COLORS.coral : '#ccc',
              },
            ]}
            keyboardType="numeric"
            maxLength={4}
             
            onKeyPress={e => handleCodePartKeyPress(e, 'part4')}
            value={values.code4}
            onChangeText={text => {
              handleChange('code4')(text);
              if (text.length === 4) {
                setFieldTouched('code4', true);
                // setFieldValue('code4', '');
                codePart4Ref.current.focus();

                // Focus on the second input field
              } else if (text.length === 0) {
                codePart3Ref.current.focus();
              }
            }}
            onBlur={handleBlur('code4')}
          />
        </View> */
}
