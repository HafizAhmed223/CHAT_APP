import React from "react";

function Button({
  label = "Button",
  className = "",
  type = "submit",
  disable = false,
}) {
  return (
    <div>
      <button
        type={type}
        disable={disable}
        className={`${className} bg-primary text-white hover:bg-primary hover:ring-2 focus:ring-4 focus:ring-blue-300 focus:outline-none font-medium rounded-[5px] text-center w-full py-[4px]`}
      >
        {" "}
        {label}
      </button>
    </div>
  );
}

export default Button;
