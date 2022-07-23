import React, { useState } from "react";
import Header from "../components/elements/Header";
import Sidebar from "../components/elements/Sidebar";
import WelcomeBanner from "../components/elements/WelcomeBanner";
import axios from "axios";
import { useForm } from "react-hook-form";
import TambahBudaya from "../components/fragments/TambahBudaya";

function ListData() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Cards */}
            <div>
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl uppercase font-bold pb-7">
                    Data Budaya
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
                  <TambahBudaya />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ListData;
