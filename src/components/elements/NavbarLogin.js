import React from "react";
import { Link } from "react-router-dom";

function NavbarLogin() {
  return (
    <nav className="w-full sticky top-0 z-20  py-4 bg-white shadow-md ">
      <div className="w-4/5 mx-auto flex justify-center items-center">
        <div className="font-nunito font-bold text-2xl cursor-pointer">
          <Link to="/">PETA CERITA RAKYAT</Link>
        </div>
      </div>
    </nav>
  );
}
export default NavbarLogin;
