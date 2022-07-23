import axios from "axios";
import React, { useState, useEffect } from "react";

function ListBudaya() {
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");

  // const handleDataWebinar = () => {
  //   axios
  //     .get("https://creaveid-api.herokuapp.com/api/admin/webinar")
  //     .then((response) => {
  //       setUser(response.data.response);
  //       setStatus("webinar");
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const handleDataPernikahan = () => {
  //   axios
  //     .get("https://creaveid-api.herokuapp.com/api/admin/wedding")
  //     .then((response) => {
  //       setUser(response.data.response);
  //       setStatus("wedding");
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const handleDataUltah = () => {
  //   axios
  //     .get("https://creaveid-api.herokuapp.com/api/admin/birthday")
  //     .then((response) => {
  //       setUser(response.data.response);
  //       setStatus("birthday");
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // function handleDelete(id) {
  //   if (status === "webinar") {
  //     axios
  //       .post(
  //         `https://creaveid-api.herokuapp.com/api/admin/deleteWebinar/${id}`
  //       )
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (status === "birthday") {
  //     axios
  //       .post(
  //         `https://creaveid-api.herokuapp.com/api/admin/deleteBirthday/${id}`
  //       )
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (status === "wedding") {
  //     axios
  //       .post(
  //         `https://creaveid-api.herokuapp.com/api/admin/deleteWedding/${id}`
  //       )
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }
  // function handleView(id) {
  //   if (status === "webinar") {
  //     history.push(`/admin/webinar/detail/${id}`);
  //   } else if (status === "birthday") {
  //     history.push(`/admin/ultah/detail/${id}`);
  //   } else if (status === "wedding") {
  //     history.push(`/admin/pernikahan/detail/${id}`);
  //   }
  // }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
      {/* Chart built with Chart.js 3 */}
      <div className="col-span-full xl:col-span-6 bg-white rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800 uppercase">Data Budaya</h2>
        </header>

        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 item">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Nama Budaya</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">
                      Nomor Penetapan
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Asal Daerah</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Deskripsi</div>
                  </th>
                  {/* <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Gambar</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Video</div>
                  </th> */}
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-gray-100">
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="items-center">
                      <div className="font-medium text-gray-800 text-center">
                        cerita Malin Kundang
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">1234123123</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium text-gray-800">
                      Provinsi Sumatra Barat
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">
                      merupakan cerita dari padang sumbar dimana ....
                    </div>
                  </td>
                  {/* <td className="p-2 whitespace-nowrap">
                    <div className="text-center">google.com/malinkundang</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">Youtube.com/malinkundang</div>
                  </td> */}
                  <td className="p-2 whitespace-nowrap text-center">
                    <button
                      class="border-3 border-light-blue-500 border-opacity-100 py-2 px-2 mx-2 rounded text-blue-500"
                      // onClick={() => handleView(req._id)}
                    >
                      View
                    </button>
                    <button
                      class="border-3 border-red-500 border-opacity-100 py-2 px-2 rounded text-red-500"
                      // onClick={() => handleDelete(req._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBudaya;
