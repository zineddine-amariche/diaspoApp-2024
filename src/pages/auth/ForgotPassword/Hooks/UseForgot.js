import * as Yup from 'yup';
import {fr} from 'yup-locales';
import {setLocale} from 'yup';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

setLocale(fr);
export function useForgot() {
 const dispatch =useDispatch()
 const [hidePass, setHidePass] = useState(true);
 const HandlehidePass = () => {
  setHidePass(!hidePass);
};

  const initialState = {
    email_phone: '',
    code: '',
  };
  const StateEmail = {
    email_phone: '',
  };
  const StateCode= {
    code: '',
  };

  const Login = async data => {
    // console.log('data',data);
    // await dispatch({ type: "LOGIN", payload: data });
  };


  const emailPhoneRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/

  let validationSchema = Yup.object().shape({
    email_phone: Yup.string()
      .max(35,'phone number or email is too long - must be 35 characters maximum.',)
      .required('phone number or email is required')
      .matches(emailPhoneRegex, 'Must be a valid phone or email number!')
      .min(10,'phone Number is too short - must be at least 10 characters',),
  });

  let validationSchemaCode = Yup.object().shape({
    code: Yup.string()
      .max(6,'The code is too long - must be 6 characters maximum.',)
      .min(6,'The code is too short - must be 6 characters maximum.',)
      .required('code is required'),
  });

  return {
    validationSchema,
    validationSchemaCode,
    initialState,
    Login,
    HandlehidePass,
    hidePass,
    StateEmail,
    StateCode,
    
  }
}
