import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import moment from "moment";
import gambar from "../../../assets/contoh1.png";

function DetailBudaya() {
  // const [detail, setDetail] = useState([]);
  // const params = useParams();
  // console.log(detail);

  // useEffect(() => {
  //   axios
  //     .get(`https://creaveid-api.herokuapp.com/api/admin/gallery/${params.id}`)
  //     .then((response) => {
  //       setDetail(response.data.gallery);
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <>
          <div>
            <p className="text-center text-4xl font-bold pt-20 pb-5">
              Judul Budaya
            </p>
          </div>
          <div>
            <p className="text-center text-xl pb-10 ">
              {/* {moment(detail.date).format("dddd, D MMMM YYYY")} */} tanggal
              penetapan
            </p>
          </div>
          <div className=" flex justify-center mx-64">
            <img src={gambar} />
          </div>
          <div className="bg-gray-200 mx-64 w-28 rounded text-center mt-2 text-lg font-semibold">
            Penetapan
          </div>
          <div>
            <p className="text-justify mx-64 text-xl py-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <p className="mx-64 text-xl pb-10 ">
              {/* {moment(detail.date).format("dddd, D MMMM YYYY")} */}
              Link Media
            </p>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
}

export default DetailBudaya;
