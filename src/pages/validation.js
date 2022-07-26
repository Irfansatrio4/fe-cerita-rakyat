import * as yup from "yup";

export const loginSchema = yup.object().shape({
  userName: yup.string().required("Username wajib diisi"),
  password: yup.string().required("Password wajib diisi"),
});
