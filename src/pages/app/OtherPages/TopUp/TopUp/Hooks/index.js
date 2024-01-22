import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function useAmount() {
  const dispatch = useDispatch();
  const [hidePass, setHidePass] = useState(true);
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

  const state = {
    amount: "",
  };

  const onSubmit = async (data) => {
    // console.log("data", data);
  };

  const numericRegEx = /(?=.*[0-9])/;

  let schema = Yup.object().shape({
    amount: Yup.number()
    .typeError('Amount must be a number')
    .min(10, 'Amount must be at least 10')
    .required("Amount per person  is required"),  
  });

  return {
    onSubmit,
    state,
    schema,
  };
}
