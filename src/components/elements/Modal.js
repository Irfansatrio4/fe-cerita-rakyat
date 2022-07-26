import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function Modal(props) {
  const { children, className, onClose, show, title } = props;

  //   const classes = [styles.rootModal, className].filter(Boolean).join(' ');

  if (!show) {
    return null;
  }

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          {title && <h4>{title}</h4>}
          <FontAwesomeIcon icon={faTimes} onClick={onClose} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  children: null,
  className: "",
  onClose: () => {},
  show: false,
  title: "",
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
};
