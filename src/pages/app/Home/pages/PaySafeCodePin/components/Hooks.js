import {useCallback, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';

import Toast from 'react-native-simple-toast';

export function UseForms() {
  const initialValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
  };
  const numericRegEx = /^\d{4}$/;

//   let validationSchema = Yup.object().shape({
//     code1: Yup.string()
//       .matches(/^\d{4}$/, 'Number must have four characters')
//       .required('code is required')
//       .typeError('code must be a number'),
//     code2: Yup.string()
//       .required('code required')
//       .typeError('code must be a number')
//       .matches(/^\d{4}$/, 'Number must have four characters'),
//     code3: Yup.string()
//       .required('code required')
//       .typeError('code must be a number')
//       .matches(/^\d{4}$/, 'Number must have four characters'),
//     code4: Yup.string()
//       .required('code required')
//       .typeError('code must be a number')
//       .matches(/^\d{4}$/, 'Number must have four characters'),
//   });

  const validationSchema = Yup.object().shape({
    input1: Yup.string().required('Input 1 is required').matches(/^\d{4}$/, 'Input 1 must have four digits'),
    input2: Yup.string().required('Input 2 is required').matches(/^\d{4}$/, 'Input 2 must have four digits'),
    input3: Yup.string().required('Input 3 is required').matches(/^\d{4}$/, 'Input 3 must have four digits'),
    input4: Yup.string().required('Input 4 is required').matches(/^\d{4}$/, 'Input 4 must have four digits'),
  });
  

  return {
    initialValues,
    validationSchema,
  };
}
