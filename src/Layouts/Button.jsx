import React from "react";

const Button = ({ title, submitForm }) => {
  return (
    <div>
      <button className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={submitForm}>
        {title}
      </button>
    </div>
  );
};

export default Button;