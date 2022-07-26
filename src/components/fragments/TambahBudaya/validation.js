import * as yup from "yup";

const date = new Date();
const yearToday = date.getFullYear();

export const formBudayaSchema = yup.object().shape({
  // image: yup.mixed()
  //   .required('Foto Kebudayaan wajib diisi')
  //   .test({x
  //     message: "Tidak ada foto yang dipilih",
  //     test: arr => arr.length>0
  //   })
  //   .test(
  //     "fileSize", "Ukuran gambar maksimal 2MB", (value)=>{
  //       return value[0] && value[0]?.size <= 2*1024*1024;
  //     }
  //   ),
  namaBudaya: yup.string().required("Nama Kebudayaan Wajib diisi"),
  tahun: yup
    .number()
    .typeError("Tahun Belum Sesuai")
    .min(2010)
    .max(yearToday, "Tahun melebihi tahun pendaftaran")
    .required("Tahun wajib diisi"),
  // jenisKebudayaan: yup.string().required("Jenis Kebudayaan Wajib diisi"),
  deskripsi: yup.string(),
});
