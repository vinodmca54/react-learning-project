import React from "react";
import PropTypes from "prop-types";

const TextInpuGroup = ({ lable, name, value, placeholder, type, onChange }) => {
  return (
    <div className="form-group">
      <lable htmlFor={name}>{lable}</lable>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
TextInpuGroup.propTypes = {
  lable: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
TextInpuGroup.defaultProps = {
  type: "text"
};
export default TextInpuGroup;
