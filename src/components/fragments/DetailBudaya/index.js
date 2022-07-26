import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import gambar from "../../../assets/contoh1.png";
import kebudayaanAPI from "../../../api/kebudayaan";
import { Declaration } from "postcss";

function DetailBudaya() {
  const [detail, setDetail] = useState([]);
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get('idBudaya'));
  const navigate = useNavigate();
 

  useEffect(() => {
    const fetchDetailBudaya = async () => {
      const res = await kebudayaanAPI.getDetailBudaya(id);
      setDetail(res.data.data);
    };

    fetchDetailBudaya()
  }, [id]);


  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <>
          <div>
            <p className="text-center text-4xl font-bold pt-20 pb-5">
              {detail.namaBudaya}
            </p>
          </div>
          <div>
            <p className="text-center text-xl font-semibold ">
             Tahun {detail.tahun}
            </p>
            <p className="text-center text-xl pb-10 font-semibold">
              No.Regis {detail.no_regis}
            </p>
          </div>
          <div className=" flex justify-center mx-64">
            <img src={gambar} />
          </div>
          <div className="flex justify-start gap-3 ml-64">
          <div className="bg-gray-200 w-auto rounded p-2 text-center mt-2 text-lg font-semibold">
            {detail.jenisKebudayaan?.tipeKebudayaan}
          </div>
          <div className="bg-gray-200 w-auto rounded p-2 text-center mt-2 text-lg font-semibold">
            {detail.provinsi?.namaProvinsi}
          </div>
          </div>
          <div>
            <p className="text-justify mx-64 text-xl py-10 ">
             {detail.deskripsi === null || "" ? "tidak ada deskripsi" : detail.deskripsi}
            </p>
          </div>
       
        </>
      </div>
      <Footer />
    </>
  );
}

export default DetailBudaya;
