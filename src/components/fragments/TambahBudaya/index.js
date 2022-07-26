import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formBudayaSchema } from "./validation";
import provinsiAPI from "../../../api/provinsi";
import { useNavigate } from "react-router";
import kebudayaanAPI from "../../../api/kebudayaan";
import { routes } from "../../../configs/routes";
import defaultImg from "../../../assets/contoh1.png";
import checkURL from "../../../helper/checkURL";

function TambahBudaya() {
  const [provinsi, setProvinsi] = useState([]);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: preloadValues,
    resolver: yupResolver(formBudayaSchema),
  });

  const watchImage = watch("gambar");

  const imageURL = useMemo(() => {
    if (typeof watchImage === "string" && checkURL(watchImage)) {
      return watchImage;
    }
    if (watchImage?.length > 0 && watchImage !== "undefined") {
      return URL.createObjectURL(watchImage[0]);
    }
    return "";
  }, [watchImage]);

  const date = new Date();
  const yearToday = date.getFullYear();

  const fetchDataProvinsi = async () => {
    const res = await provinsiAPI.getProvinces();
    setProvinsi(res.data.data);
  };

  useEffect(() => {
    fetchDataProvinsi();
  }, []);

  const submitForm = async (data) => {
    // const addForm = document.getElementById("add_budaya");
    const formData = new FormData();
    formData.append("namaBudaya", data.namaBudaya);
    formData.append("gambar", data.gambar ? data.gambar[0] : undefined);
    formData.append("tahun", data.tahun);
    formData.append("deskripsi", data.deskripsi);
    formData.append("video", data.video || "");
    formData.append("jenisKebudayaanId", parseInt(data.jenisKebudayaanId));
    formData.append("provinsiId", parseInt(data.provinsiId || "1"));

    try {
      setLoading(true);
      console.log(formData);
      const res = await kebudayaanAPI.addData(formData);
      if (res.data.success) {
        setLoading(false);
        navigate(routes.ADMIN());
        setAlert(false);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response.data.message);
      setAlert(true);
    }
    console.log("halo");
  };

  return (
    <div className=" bg-gray-100">
      <div>
        <div>
          <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
            {/* Chart built with Chart.js 3 */}
            <div className="col-span-full xl:col-span-6 bg-white rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">
                  Tambah Data Budaya
                </h2>
              </header>
              <div className="p-3">
                {/* Table */}
                <form id="add_budaya" onSubmit={handleSubmit(submitForm)}>
                  <div className="overflow-x-auto">
                    <div className="App">
                      <div className="grid gap-y-4 p-8">
                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-sm font-bold text-gray-600 block text-left"
                          >
                            Nama Budaya
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border border-gray-200 rounded mt-4"
                            placeholder="Masukkan Nama Budaya"
                            name="title"
                            {...register("namaBudaya")}
                          ></input>
                          {errors && (
                            <p className="text-left text-red-500 text-sm">
                              {errors?.namaBudaya?.message}
                            </p>
                          )}
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-sm font-bold text-gray-600 block text-left"
                          >
                            Tahun
                          </label>
                          <input
                            type="number"
                            className="w-full p-2 border border-gray-200 rounded mt-4"
                            placeholder={yearToday}
                            min={2010}
                            max={yearToday}
                            name="date"
                            {...register("tahun")}
                          ></input>
                          {errors && (
                            <p className="text-left text-red-500 text-sm">
                              {errors?.tahun?.message}
                            </p>
                          )}
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-sm font-bold text-gray-600 block text-left"
                          >
                            Deskripsi
                          </label>
                          <textarea
                            className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4 focus:outline-none"
                            rows="4"
                            placeholder="Masukkan deskripsi budaya"
                            name="description"
                            {...register("deskripsi")}
                          ></textarea>
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-sm font-bold text-gray-600 block text-left"
                          >
                            Jenis Kebudayaan
                          </label>
                          <select
                            type="text"
                            className="w-full p-2 border border-gray-200 rounded mt-4"
                            placeholder="Masukkan Provinsi Asal"
                            {...register("jenisKebudayaanId")}
                          >
                            <option value={""} disabled selected>
                              Pilih Jenis Kebudayaan
                            </option>
                            <option value={1}>Pencatatan</option>
                            <option value={2}>Penetapan</option>
                          </select>
                          {/* {errors && (
                            <p className="text-left text-red-500 text-sm">
                              {errors?.jenisKebudayaan?.message}
                            </p>
                          )} */}
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-sm font-bold text-gray-600 block text-left"
                          >
                            Provinsi
                          </label>
                          <select
                            type="text"
                            className="w-full p-2 border border-gray-200 rounded mt-4"
                            placeholder="Masukkan Provinsi Asal"
                            {...register("provinsiId")}
                          >
                            {provinsi.length > 0 &&
                              provinsi.map((item, idx) => (
                                <option value={item.id} key={idx}>
                                  {item.namaProvinsi}{" "}
                                </option>
                              ))}
                          </select>
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor=""
                            className="text-sm font-bold text-gray-600 block text-left"
                          >
                            Gambar Budaya
                          </label>
                        </div>
                        <article className="relative h-full flex flex-col bg-white border-2 rounded-md">
                          {/* <!-- scroll area --> */}
                          <section className="h-full overflow-auto p-8 w-full flex flex-col">
                            <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                              <input
                                type="file"
                                name="imageCover"
                                {...register("gambar")}
                              />
                            </header>
                            <img
                              alt="upload preview"
                              className="img-preview pt-3  w-72  sticky object-cover rounded-lg bg-fixed"
                              src={imageURL}
                            />
                          </section>
                          {/* <!-- sticky footer --> */}
                        </article>
                      </div>
                    </div>

                    {/* <!-- using two similar templates for simplicity in js code --> */}
                    <template id="file-template">
                      <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                        <article
                          tabindex="0"
                          className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm"
                        >
                          <img
                            alt="upload preview"
                            className="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed"
                            src={imageURL}
                          />
                          <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                            <div className="flex">
                              <span className="p-1 text-blue-800">
                                <i>
                                  <svg
                                    className="fill-current w-4 h-4 ml-auto pt-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                  </svg>
                                </i>
                              </span>
                              <p className="p-1 size text-xs text-gray-700"></p>
                              <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                                <svg
                                  className="pointer-events-none fill-current w-4 h-4 ml-auto"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    className="pointer-events-none"
                                    d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </section>
                        </article>
                      </li>
                    </template>

                    <template id="image-template">
                      <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                        <article
                          tabindex="0"
                          className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm"
                        >
                          <img
                            alt="upload preview"
                            className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
                          />

                          <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                            <div className="flex">
                              <span className="p-1">
                                <i>
                                  <svg
                                    className="fill-current w-4 h-4 ml-auto pt-"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                  </svg>
                                </i>
                              </span>

                              <p className="p-1 size text-xs"></p>
                              <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                <svg
                                  className="pointer-events-none fill-current w-4 h-4 ml-auto"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    className="pointer-events-none"
                                    d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </section>
                        </article>
                      </li>
                    </template>
                    {/* Batasan Upload Galeri Foto */}
                    <div>
                      <button
                        className="w-full py-2 px-4 bg-cyan-600 hover:shadow-md rounded-md text-white text-small"
                        type="submit"
                      >
                        Tambah Data
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TambahBudaya;
