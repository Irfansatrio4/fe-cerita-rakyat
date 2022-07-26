import React from "react";
import Modal from "../../elements/Modal";
import PropTypes from "prop-types";

export default function ModalDelete(props) {
  const { show, onClose, deleteClick } = props;

  return (
    <Modal show={show} onClose={onClose}>
      <div>
        <p>Hapus Kebudayaan?</p>
        <div>
          <button onClick={deleteClick}>Ya</button>
          <button onClick={onClose}>Tidak</button>
        </div>
      </div>
    </Modal>
  );
}

Modal.defaultProps = {
  show: false,
  onClose: () => {},
  deleteClick: () => {},
};

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  deleteClick: PropTypes.func,
};
