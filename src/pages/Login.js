import React, { useContext, useState } from "react";
import login from "../../src/assets/contoh1.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import NavbarLogin from "../components/elements/NavbarLogin";
import { Navigate, useNavigate } from "react-router";
import { routes } from "../configs/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validation";
import { UserContext } from "../context/context";
import adminAPI from "../api/admin";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  console.log(user);
  const submitForm = async (data) => {
    try {
      // setLoading(true);
      const res = await adminAPI.login(data);
      if (res.data.success) {
        setUser(res.data.data);
        setAlert(false);
        // setLoading(false);
      }
    } catch (error) {
      // setLoading(false);
      setMessage(error.response.data.message);
      setAlert(true);
    }
  };
  console.log(message);
  return (
    <div>
      <NavbarLogin />
      <div className="py-10 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border-2 drop-shadow-md border-gray-300">
          <div className="text-center font-bold text-xl"> Masuk </div>
          <div className=" flex justify-center mt-5 mb-5">
            <img src={login} alt="Image" className="content-center" />
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
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
                {...register("userName")}
              />
              {errors && (
                <p className="text-left text-red-500 text-sm">
                  {errors?.userName?.message}
                </p>
              )}
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
              {errors && (
                <p className="text-left text-red-500 text-sm">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <p className="text-left text-red-500 text-sm">{message}</p>
            <div>
              <button
                className="w-full py-2 px-4 bg-cyan-600 hover:shadow-md rounded-md text-white text-small"
                type="submit"
              >
                Masuk
              </button>
            </div>
          </form>
          {user && <Navigate to={routes.ADMIN()} />}
        </div>
      </div>
    </div>
  );
}

export default Login;
