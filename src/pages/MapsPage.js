import React, { useContext, useEffect, useState } from "react";
import Maps from "../components/fragments/Maps";
import data from "../data/data.json";
import getProvinsi from "../api/provinsi";
import calculationAPI from "../api/calculation";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { routes } from "../configs/routes";
import ListBudaya from "../components/fragments/ListBudayaMaps";
import DetailBudaya from "../components/fragments/DetailBudaya";
import Legend from "../components/fragments/Legend";
import ModalN from "../components/elements/ModalN";

export default function MapsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const idBudaya = parseInt(searchParams.get("idBudaya"));
  const [locationName, setlocationName] = useState("");
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataCalc, setDataCalc] = useState({});
  const [setNilaiN] = useState();
  const [openModal, setOpenModal] = useState(false);

  const fetchData = async () => {
    const res = await getProvinsi.getAllDataProvinces();
    setDataProvinsi(res.data.data);
    const resCalc = await calculationAPI.getAllCalculate(0.8);
    setDataCalc(resCalc.data.data);
  };

  console.log(setNilaiN);
  const modalClose = () => {
    setOpenModal(false);
  };

  const submitNilaiN = (e) => {
    setNilaiN(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickLocation = (id, name) => {
    navigate(routes.MAPS_PAGE(id));
    setlocationName(name);
  };

  const handleClickResult = (id) => {
    navigate(routes.DETAIL_BUDAYA(id));
  };

  const renderContent = () => {
    if (id) {
      return (
        <ListBudaya handleClickBudaya={handleClickResult} name={locationName} />
      );
    }
    if (idBudaya) {
      return <DetailBudaya />;
    }
  };

  return (
    <div>
      <div>
        {renderContent()}

        <Legend
          openModal={() => setOpenModal(true)}
          high={dataCalc.high}
          low={dataCalc.low}
        />
      </div>
      {openModal && (
        <ModalN
          isOpen={openModal}
          closeModal={modalClose}
          handleSubmit={submitNilaiN}
        />
      )}
      <Maps
        data={dataProvinsi}
        geoJson={data}
        handleClick={handleClickLocation}
        high={dataCalc.high}
        low={dataCalc.low}
      />
    </div>
  );
}
