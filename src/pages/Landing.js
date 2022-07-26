import React from "react";
import Navbar from "../components/elements/Navbar";
import { Outlet } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}
