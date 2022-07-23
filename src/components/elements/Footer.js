import React from "react";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-cyan-600 ">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left pt-6">
            <div className="w-1/12">
              <img src={Logo} alt="fotomember" className="mx-auto " />
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <h5 className="text-white">Peta Kebudayaan</h5>
              <div className="mt-4">
                <p className="text-white">
                  Peta Kebudayaan tak benda ini bertujuan untuk mempermudah
                  penyampaian informasi kepada masyarakat umum, pada contohnya
                  adalah penyebaran Cerita Rakyat yang ada di Indonesia.
                </p>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-medium py-1">
                Copyright © {new Date().getFullYear()} Irfan Satrio Nugroho{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
