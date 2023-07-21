import React from "react";

const Input = ({ name, type, placeholder, value, required, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      name={name}
      className="input input-bordered input-sm w-full my-1 focus:outline-0 placeholder:text-gray-500"
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default Input;
