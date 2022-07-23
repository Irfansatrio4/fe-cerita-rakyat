import React from "react";
import login from "../../src/assets/contoh1.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import NavbarLogin from "../components/elements/NavbarLogin";

function Login() {
  const { register, handleSubmit } = useForm();
  // const handleLogin = (data) => {
  //   axios
  //     .post("https://creaveid-api.herokuapp.com/api/user/login", data)
  //     .then((response) => {
  //       swal({
  //         title: "Login Berhasil",
  //         icon: "success",
  //       });
  //       Cookies.set("fullname", response.data.others.fullname);
  //       Cookies.set("phone_number", response.data.others.phone_number);
  //       Cookies.set("email", response.data.others.email);
  //       Cookies.set("token", response.data.accessToken);
  //       localStorage.setItem("token", response.data.accessToken);
  //       Cookies.set("isAdmin", response.data.others.isAdmin);
  //       if (Cookies.get("isAdmin") === "true") {
  //         history.push("/admin/home");
  //       } else {
  //         history.push("/");
  //       }
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       swal({
  //         title: "Username atau Password salah",
  //         text: "Harap input username atau password dengan benar !",
  //         icon: "error",
  //         button: "Ok !",
  //       });
  //       console.log(error);
  //     });
  // };
  return (
    <div>
      <NavbarLogin />
      <div className="py-10 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border-2 drop-shadow-md border-gray-300">
          <div className="text-center font-bold text-xl"> Masuk </div>
          <div className=" flex justify-center mt-5 mb-5">
            <img src={login} alt="Image" className="content-center" />
          </div>
          <form action="" className="space-y-6">
            <div>
              <label
                className="text-sm font-bold text-gray-600 block"
                htmlFor=""
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="username"
                {...register("username")}
              />
            </div>
            <div>
              <label
                className="text-sm font-bold text-gray-600 block"
                htmlFor=""
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="password"
                {...register("password")}
              />
            </div>
            <div>
              <button
                className="w-full py-2 px-4 bg-cyan-600 hover:shadow-md rounded-md text-white text-small"
                type="submit"
                //   onClick={history.push("/admin/home")}
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
