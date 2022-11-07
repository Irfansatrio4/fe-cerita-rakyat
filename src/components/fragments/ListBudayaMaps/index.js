import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import kebudayaanAPI from "../../../api/kebudayaan";
import { routes } from "../../../configs/routes";

export default function ListBudaya(props) {
  const { name, handleClickBudaya } = props;
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const navigate = useNavigate();
  const [listBudaya, setListBudaya] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListBudaya = async () => {
      setListBudaya(null);
      setLoading(true);
      const res = await kebudayaanAPI.getListBudaya(id);
      if (res.data.sucess) {
        setListBudaya(res.data.data);
        setLoading(false);
      }
    };
    fetchListBudaya();
  }, [id]);

  const onClose = () => {
    navigate(routes.MAPS_PAGE());
  };

  return (
    <section className="absolute bg-white w-[28rem] my-10 ml-4 z-30 p-6 rounded-md">
      <div className="flex justify-between pb-3 border-b-2">
        <p className="font-bold text-xl">Provinsi {name}</p>
        <div>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faClose}
            onClick={onClose}
          />
        </div>
      </div>
      <div className="h-[32rem] overflow-auto pt-2">
        {listBudaya?.length > 0 ? (
          listBudaya.map((i, idx) => (
            <div
              className="cursor-pointer  hover:bg-gray-100"
              key={idx}
              onClick={() => handleClickBudaya(i.id)}
            >
              {i.namaBudaya}
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </section>
  );
}

ListBudaya.defaultProps = {
  name: "",
  handleClickBudaya: () => {},
};

ListBudaya.propTypes = {
  name: PropTypes.string,
  handleClickBudaya: PropTypes.func,
};
