import React, { useContext, useEffect, useState } from "react";
import Maps from "../components/fragments/Maps";
import data from "../data/data.json";
import getProvinsi from "../api/provinsi";
import calculationAPI from "../api/calculation";
import kebudayaanAPI from "../api/kebudayaan";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { routes } from "../configs/routes";
import ListBudaya from "../components/fragments/ListBudayaMaps";
import DetailBudaya from "../components/fragments/DetailBudaya";
import Legend from "../components/fragments/Legend";

export default function MapsPage() {
  //   const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const idBudaya = parseInt(searchParams.get("idBudaya"));
  const [locationName, setlocationName] = useState("");
  //   const [openResult, setOpenResult] = useState(false);
  //   const [keyword, setKeyword] = useState('');
  //   const [filteredResult, setFilteredResult] = useState([]);
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataBudaya, setDataBudaya] = useState([]);
  const [dataCalc, setDataCalc] = useState({});

  const fetchData = async () => {
    const res = await getProvinsi.getAllDataProvinces();
    setDataProvinsi(res.data.data);
    const resCalc = await calculationAPI.getAllCalculate(0.8);
    setDataCalc(resCalc.data.data);
    const resBudaya = await kebudayaanAPI.getAllBudaya();
    setDataBudaya(resBudaya.data.data);
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

  //   const handleInput = (e) => {
  //     setKeyword(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     if (keyword !== '') {
  //       setFilteredResult(() => {
  //         let result = [];
  //         result = dataBudaya.filter((budaya) => {
  //           return budaya.nama_budaya?.toLowerCase().includes(keyword.toLowerCase())
  //         })
  //         return result
  //       });
  //       setOpenResult(true);
  //     }
  //   };

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

        <Legend high={dataCalc.high} low={dataCalc.low} />
      </div>

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
