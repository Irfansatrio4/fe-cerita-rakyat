import React, { useState } from "react";
import Header from "../components/elements/Header";
import WelcomeBanner from "../components/elements/WelcomeBanner";
import { useForm } from "react-hook-form";
import TambahBudaya from "../components/fragments/TambahBudaya";
import kebudayaanAPI from "../api/kebudayaan";
import { useNavigate } from "react-router";
import { routes } from "../configs/routes";
import EditBudaya from "../components/fragments/EditBudaya";

function ListData() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
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
                  <EditBudaya />
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
