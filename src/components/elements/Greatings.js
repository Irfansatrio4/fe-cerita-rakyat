import React from "react";
import greetingImage from "../../assets/contoh1.png";

export default function Greatings() {
  return (
    <div className="bg-white ">
      <div className="container mx-auto w-11/12 grid grid-cols-2  grid-row-2 items-center pt-10">
        <div className=" justify-self-center">
          <img src={greetingImage} alt="Image" />
        </div>
        <div className="grid grid-rows-2 w-2/3">
          <div className="flex items-center text-xl text-black">
            <p>Selamat Datang Di</p>
          </div>
          <div className="flex items-center text-4xl text-black font-bold">
            <p>Peta Cerita Rakyat</p>
          </div>
          <div className="flex items-center text-xl text-black pt-5 ">
            <p>Untuk Penyampaian Informasi Lebih Mudah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
