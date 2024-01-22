import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Formik} from 'formik';
import {Txt} from '../../../../../../components/utils';
import {UseForms} from './Hooks';
import Space from '../../../../../../components/Space';
import {PrimaryButtonLinear} from '../../../../../../components/Buttons';
import VoucherInput from './voucher';
import {COLORS} from '../../../../../../theme';
import {useIsFocused} from '@react-navigation/native';

const Forms = ({handleVoucherCodeSubmit, data, ind}) => {
  const {validationSchema} = UseForms();
  const inputs = ['input1', 'input2', 'input3', 'input4'];

  const firstInputRef = useRef(null);
  const inputRefs = useRef([]);
  const [i, seti] = useState(0);

  const handleSubmit = values => {
   
    handleVoucherCodeSubmit(values);
 
    if (firstInputRef.current) {
      firstInputRef.current.blur(); // Blur the first input
    }
  };

  const handleInputChange = (index, setFieldValue, text) => {
    console.log('index', index)
    if (text.length <= 4) {
      setFieldValue(inputs[index], text);

      if (text.length === 0 && index > 0) {
        const previousInputRef = inputRefs.current[index - 1];
        // console.log('previousInputRef', previousInputRef);
        previousInputRef.focus();
      } else if (text.length === 4 && index < inputs.length - 1) {
        const nextInputRef = inputRefs.current[index + 1];
        // console.log('nextInputRef', nextInputRef)099
        nextInputRef.focus();
      }
    }
  };




  return (
    <Formik
      //   initialValues={initialValues}
      initialValues={{input1: '', input2: '', input3: '', input4: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, formikAction) => {
        // formikAction.setSubmitting(false);
        formikAction.resetForm();
        formikAction.setErrors({});
        formikAction.setFieldTouched('input4', false);
        // handleVoucherCodeSubmit(values);
        handleSubmit(values);
      }}>
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        touched,
        isValid,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        setFieldError,
        
      }) => {
   

        return (
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flex: 1,
            }}>
            <View style={{flex: 1}}>
              <Space space={Platform.OS == 'android' ? 60 : 40} />
              <Txt color={COLORS.TextBody}>
                Enter your 16 digit voucher codes
              </Txt>
              <Space space={20} />
              <VoucherInput
                inputRefs={inputRefs}
                inputs={inputs}
                handleInputChange={handleInputChange}
                setFieldTouched={setFieldTouched}
                data={data}
                ind={ind}
                touched={touched}
                errors={errors}
                setFieldValue={setFieldValue}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldError={setFieldError}
              />
            </View>

            <PrimaryButtonLinear disabled={true} onPress={handleSubmit}>
              VALIDATE DIGIT CODE
            </PrimaryButtonLinear>

            <Space space={20} />
          </View>
        );
      }}
    </Formik>
  );
};

export default Forms;

const styles = StyleSheet.create({});
