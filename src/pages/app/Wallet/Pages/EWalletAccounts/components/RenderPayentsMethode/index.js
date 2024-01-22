import { StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
 

import {
  PrimaryButtonLinear,
} from '../../../../../../../components/Buttons';
import {Txt} from '../../../../../../../components/utils';
import DropDown from '../../../../../../../components/select/DropDown';
import {Formik} from 'formik';
import {usePayemnts} from './Hooks/usePayemnts';
import Space from '../../../../../../../components/Space';
import {COLORS} from '../../../../../../../theme';
import InputPhone from '../../../../../../../components/Input/PhoneInput';
import { useSelector } from 'react-redux';
const RenderPayentsMethode = ({userId,ClosePayementMthode}) => {
  const {AddPayement, validationSchema, State0} = usePayemnts();

  const data2 = [
    {
      color: COLORS.BlueTxt,
      label: 'MTN',
      value: 1,
      icon: 'minus',
    },
    {
      color: COLORS.grayIcon,
      label: 'Orange Money',
      value: 2,
      icon: 'minus',
      disabled: true,
    },
    {
      color: COLORS.grayIcon,
      label: 'Wave',
      value: 3,
      icon: 'minus',
      disabled: true,
    },
    {
      color: COLORS.grayIcon,
      label: 'M-Pesa',
      value: 4,
      icon: 'minus',
      disabled: true,
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const onSelectLanguage = item => {
    setSelectedLanguage(item);
  };

  const phoneInputRef = useRef(null);
  const [formattedValue, setFormattedValue] = useState('');

  const [Update, setUpdate] = useState(false);

  const {isLoading} = useSelector(state => ({
    ...state.CreateEwalletsSlice,
  }));


  console.log('isLoading', isLoading)

  //   useEffect(() => {
  //     if (step == 2 && isReturns ==2) {
  //       AsyncStorage.getItem('step2FormData').then(data => {
  //         if (data) {
  //           // console.log('data',  JSON.parse(data));
  //           let obj = JSON.parse(data);
  //           setValues(JSON.parse(data));
  //           // console.log('obj', obj);
  //           setFieldValue('mobileNumber', obj.mobileNumber);
  //           setFormattedValue(obj.mobileNumber);
  //           setSelectedLanguage({label: obj.language});
  //         }else{
  //           setUpdate(false)
  //         }
  //       });
  //     }
  //   }, [step, dirty]);
  return (
    <View
      style={{
        paddingVertical: 10,
        marginTop: 40,
      }}
      radius={24}>
      {/* <HView spaceBetween>
        <Image source={imaPoint} />
        <PaleGreyButton onPress={connect} width={"40%"} height={40}>connected</PaleGreyButton>
      </HView> */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{padding: 20}}>
          <Txt fontSize={16} Bold="700">
            Adding a payment method
          </Txt>
        </View>
        <Space space={40} />
        <Formik
          initialValues={State0}
          validationSchema={validationSchema}
          onSubmit={(values, formikAction) => {
            let obj = {
              values,
              userId,
              ClosePayementMthode
            };

             AddPayement(obj);
            ClosePayementMthode()
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
          }) => {
            const {mobileNumber, name, language} = values;
            return (
              <View style={{width: '100%', paddingHorizontal: 30}}>
                <DropDown
                  label={'Mobile Money'}
                  data={data2}
                  setFieldValue={setFieldValue}
                  name={'name'}
                  errors={errors.name}
                  touched={touched}
                  placeholder={'Select mobile money'}
                  onBlur={handleBlur('name')}
                  value={selectedLanguage}
                  onSelect={onSelectLanguage}
                />
                <Space space={30} />
                <InputPhone
                  onChangeFormattedText={text => {
                    setFormattedValue(text);
                    setFieldValue('mobileNumber', text);
                  }}
                  name={'mobileNumber'}
                  Label={'Phone number'}
                  // placeholder="Your Phone number"
                  style={styles.Input}
                  errors={errors.mobileNumber}
                  touched={touched.mobileNumber}
                  onBlur={handleBlur('mobileNumber')}
                  keyboardType="numeric"
                  value={mobileNumber}
                  setFormattedValue={setFormattedValue}
                  setFieldValue={setFieldValue}
                  placeholder="Your Phone number"
                  phoneInputRef={phoneInputRef}
                  formattedValue={formattedValue}
                  Update={Update}
                  setUpdate={setUpdate}
                />
                <Space space={60} />
                <PrimaryButtonLinear
                  isLoading={isLoading}
                  disabled={true}
                  onPress={() => {
                    handleSubmit();
                  }}>
                  ADD
                </PrimaryButtonLinear>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default RenderPayentsMethode;

const styles = StyleSheet.create({});
