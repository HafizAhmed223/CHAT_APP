import React from "react";

function Input({
  label = "",
  type = "text",
  placeholder = "",
  className = "",
  inputClassName = "",
  isRequired = true,
  value = "",
  onChange = () => {},
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-md text-gray-600 font-semibold">{label}</label>
      <input
        className={`${className} ${inputClassName} text-sm bg-gray-100 p-[5px] border-gray-300 border-[1px] text-gray-400 focus:ring-blue-800  focus:outline-blue-400 `}
        placeholder={placeholder}
        type={type}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
