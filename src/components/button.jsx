import React from "react";

const Button = ({ onClick = () => {}, children }) => {
  return (
    <div
      onClick={onClick}
      className="p-5 font-mono font-bold text-sky-500 text-center bg-lime-300 rounded-xl hover:cursor-pointer w-max select-none text-xl"
    >
      {children}
    </div>
  );
};

export default Button;