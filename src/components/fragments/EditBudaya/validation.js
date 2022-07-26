import * as yup from "yup";

const date = new Date();
const yearToday = date.getFullYear();

export const editBudayaSchema = yup.object().shape({
  namaBudaya: yup.string().required("Nama Kebudayaan Wajib diisi"),
  tahun: yup
    .number()
    .typeError("Tahun Belum Sesuai")
    .min(2010)
    .max(yearToday, "Tahun melebihi tahun pendaftaran")
    .required("Tahun wajib diisi"),
});
