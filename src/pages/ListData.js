import React, { useState, useContext, useEffect } from "react";
import Header from "../components/elements/Header";
import Sidebar from "../components/elements/Sidebar";
import WelcomeBanner from "../components/elements/WelcomeBanner";
import ListBudaya from "../components/fragments/ListBudaya";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/context";
import { useSearchParams } from "react-router-dom";
import { routes } from "../configs/routes";
import kebudayaanAPI from "../api/kebudayaan";
import { useNavigate } from "react-router";
import Pagination from "../components/elements/Pagination";
import ModalDelete from "../components/fragments/Modals/ModalDelete";
import EditBudaya from "../components/fragments/EditBudaya";

function ListData() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const edit = searchParams.get("editBudaya");
  const { user } = useContext(UserContext);
  const [openDelete, setOpenDelete] = useState(false);
  const [deletedData, setDeletedData] = useState(null);
  const [pageData, setPageData] = useState({
    isLoading: false,
    rowData: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [navigation, setNavigation] = useState({
    hasNext: false,
    hasPrev: false,
    totalPages: 0,
    totalRows: 0,
  });
  const [editData, setEditData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await kebudayaanAPI.getBudayaPage(10, currentPage);
      if (res.data.sucess) {
        setPageData({
          isLoading: false,
          rowData: res.data.data,
          size: res.data.cursor.size,
        });
        setNavigation({
          hasNext: res.data.cursor.hasNext,
          hasPrev: res.data.cursor.hasPrev,
          totalPages: res.data.cursor.totalPages,
          totalRows: res.data.cursor.totalRows,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setPageData({
      isLoading: true,
      rowData: [],
    });
    fetchData();
  }, [currentPage]);

  const handleClick = (data) => {
    setEditData(data);
    navigate(routes.EDIT_BUDAYA(data.id));
  };

  const handleDelete = (id) => {
    setDeletedData(id);
    setOpenDelete(true);
  };

  const editColumn = (e) => {
    return (
      <div onClick={() => handleClick(e)}>
        <FontAwesomeIcon icon={faEdit} />
      </div>
    );
  };

  const deleteColumn = (e) => {
    return (
      <div onClick={() => handleDelete(e)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    );
  };

  const deleteFunction = async () => {
    try {
      const res = await kebudayaanAPI.deleteBudaya(deletedData);
      if (res.data.success) {
        setOpenDelete(false);
        fetchData();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const rowNumber = (row) => {
    let num = row + 1;
    if (currentPage > 1) {
      num = row + 1 + (currentPage - 1) * 10;
    }

    return <div>{num}</div>;
  };

  const COLUMNS = [
    {
      Header: "No.",
      id: "row",
      Cell: ({ row }) => rowNumber(row.index),
    },
    {
      Header: "Nama Budaya",
      accessor: "namaBudaya",
    },
    {
      Header: "Provinsi",
      accessor: "provinsi.namaProvinsi",
    },
    {
      Header: "Tahun",
      accessor: "tahun",
    },
    {
      Header: "No. Registrasi",
      accessor: "no_regis",
    },
    {
      Header: "Edit",
      accessor: editColumn,
    },
    {
      Header: "Delete",
      accessor: ({ id }) => deleteColumn(id),
    },
  ];

  if (edit) {
    return <EditBudaya data={editData} />;
  }

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
                <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-lg">
                  <ListBudaya
                    columnTable={COLUMNS}
                    dataTable={pageData.rowData}
                    isLoading={loading}
                  />
                  <Pagination
                    currentPage={currentPage}
                    hasNext={navigation.hasNext}
                    hasPrev={navigation.hasPrev}
                    setCurrentPage={setCurrentPage}
                    totalPages={navigation.totalPages}
                    show={true}
                  />
                  <ModalDelete
                    show={openDelete}
                    onClose={() => setOpenDelete(false)}
                    deleteClick={deleteFunction}
                  />
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
