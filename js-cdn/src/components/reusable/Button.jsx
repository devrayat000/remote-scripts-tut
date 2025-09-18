/* eslint-disable react/prop-types */
// import React from "https://esm.sh/react@^18.3.1"

function Button({ children, className, onClick }) {
  return (
    <button
      className={` ${className} text-center text-sm transition ease-out hover:shadow-md `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
