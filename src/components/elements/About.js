import React from "react";
import order from "../../assets/contoh1.png";
import { useNavigate } from "react-router";

export default function About() {

  const navigate = useNavigate();

  return (
    <div>
      <div className=" container mx-auto grid grid-cols-2 grid-row-2 items-center pt-10 w-11/12">
        <div className="grid grid-rows-3 items-center">
          <div className="flex  text-4xl text-black font-bold">
            <p> Cerita Rakyat </p>
          </div>
          <div className="flex text-justify text-black pr-36">
            <p>
              Cerita Rakyat merupakan salah satu kebudayaan tak benda yang
              dimiliki Indonesia, website ini akan mem visualisasikan data
              persebaran Cerita Rakyat yang ada di Indonesia. Peta akan dibagi
              menjadi 34 provinsi, masing masing provinsi dapat dilihat jumlah
              cerita rakyat yang berasal dari sana, yang dapat dilihat pada pin
              poin map.
            </p>
          </div>
          {/* <Link to="/event"> */}
          <button className="bg-cyan-600 w-1/5 py-2 rounded-md font-bold uppercase text-white" onClick={() => navigate("/maps")}>
            Lihat Peta
          </button>
          {/* </Link> */}
        </div>
        <div className=" justify-self-center">
          <img src={order} alt="Image" />
        </div>
      </div>
    </div>
  );
}
