import React from "react";
import Navbar from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import Greatings from "../components/elements/Greatings";
import About from "../components/elements/About";
import { Outlet } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
