import React from "react";
import PropTypes from "prop-types";

export default function Text(props) {
  const { label, inputProps, disabled, className, register, name, error } =
    props;

  //   const classes = [styles.root, className].filter(Boolean).join(" ");

  return (
    <div>
      {label && <label htmlFor={label}>{label}</label>}
      <input {...inputProps} disabled={disabled} {...register(name)} />
      {error && <p>{error}</p>}
    </div>
  );
}

Text.defaultProps = {
  label: "",
  inputProps: {},
  disabled: false,
  className: "",
};

Text.propTypes = {
  label: PropTypes.string,
  inputProps: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
