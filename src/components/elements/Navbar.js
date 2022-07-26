import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //   const loged = Cookies.get("token");
  //   const history = useHistory();

  //   function logOut() {
  //     swal({
  //       title: "Log out berhasil",
  //       icon: "success",
  //     });
  //     Cookies.remove("token");
  //     // window.location.reload();
  //     history.push("/");
  //   }

  return (
    <nav className="w-full top-0 z-40 sticky py-5 bg-white shadow-md" >
      <div className="w-4/5 mx-auto flex justify-start items-center">
        <div className="w-1/12 ">
          {/* <span to="/"> */}
          {/* <img
            src={logo}
            alt="fotomember"
            className="mx-auto border-8 border-white"
          /> */}
          {/* </span> */}
        </div>
        <div className=" w-full flex justify-between">
          <ul className="flex justify-around items-center font-nunito text-base w-5/6 ">
            <li>
              <Link to="/" className="font-medium cursor-pointer">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/maps" className="font-medium cursor-pointer">
                Pemetaan
              </Link>
            </li>
            <li className="bg-cyan-600 text-white rounded-sm py-2 px-3 cursor-pointer">
              <Link to="/Login"> Masuk </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
