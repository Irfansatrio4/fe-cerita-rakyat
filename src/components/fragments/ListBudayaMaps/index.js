import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import kebudayaanAPI from '../../../api/kebudayaan';
import { routes } from '../../../configs/routes';
// import Loader from '../../elements/Loader';

export default function ListBudaya(props) {
  const {
    name,
    handleClickBudaya
  } = props;
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get('id'));
  const navigate = useNavigate();
  const [listBudaya, setListBudaya] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListBudaya = async () => {
      setListBudaya(null);
      setLoading(true);
      const res = await kebudayaanAPI.getListBudaya(id);
      if(res.data.sucess){
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
    <section className="w-1/4 m-4 z-10">
      <div className="justify-between">
        <p><b>Provinsi {name}</b></p>
        <FontAwesomeIcon className="cursor-pointer" icon={faClose} onClick={onClose} />
      </div>
      <div className="h-64 overflow-auto">
        {listBudaya?.length > 0 ? (
          listBudaya.map((i, idx) => (
            <div className="cursor-pointer" key={idx} onClick={() => handleClickBudaya(i.id)}>{i.namaBudaya}</div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </section>
  )
}

ListBudaya.defaultProps = {
  name: '',
  handleClickBudaya: () => { }
}

ListBudaya.propTypes = {
  name: PropTypes.string,
  handleClickBudaya: PropTypes.func
}
