// import * as yup from "yup";

// const passwordRules =
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;

// export const signIn = {
//   fullName: yup.string().required("Required Field"),
//   email: yup
//     .string()
//     .email("Please eneter Valid Email")
//     .required("Required Field"),
//   password: yup
//     .string()
//     .min(5)
//     .matches(passwordRules, { message: "Please enter your password" })
//     .required("Required"),
//   //   consfirmPassword: yup
//   //     .string()
//   //     .oneOf([yup.ref("password"), null])
//   //     .required("Required"),
// };

import * as yup from "yup";
const passwordRules = /^(?=.*\d) (?=.*[a-z] ) (?=.*[A-Z] ) . {5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
export const signIn = yup.object().shape({
  fullName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  //   age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  //   confirmPassword: yup.string().oneOf([]),
});
