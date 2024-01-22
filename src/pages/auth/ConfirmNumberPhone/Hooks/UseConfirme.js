import * as Yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";

setLocale(fr);
export function UseConfirme() {
 
  const StateCode = {
    code: "",
  };

  const Confirm = async (data) => {
    // console.log('ddd',data);
    // await dispatch({ type: "LOGIN", payload: data });
  };

  let validationSchemaCode = Yup.object().shape({
    code: Yup.string()
      .max(6, "The code is too long - must be 6 characters maximum.")
      .min(6, "The code is too short - must be 6 characters maximum.")
      .required("code is required"),
  });

  return {
    validationSchemaCode,
   
    StateCode,
  };
}
