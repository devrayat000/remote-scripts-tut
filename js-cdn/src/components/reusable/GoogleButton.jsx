/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "https://esm.sh/react@^18.3.1"
import classnames from "https://esm.sh/classnames@^2.5.1?deps=react@^18.3.1,react-dom@^18.3.1";

import GoogleLogo from "../../assets/Google__G__logo.svg.webp";

function GoogleButton({ children, className, ...rest }) {
  let buttonClass =
    "w-[70%] flex justify-center gap-3 items-center p-4 rounded-md text-center text-black border-[#D0D5DD] border-solid border text-sm";
  const allClasses = classnames(buttonClass, className);
  return (
    <div>
      <button className={allClasses}>
        <img className="w-[20px] " src={GoogleLogo} alt="" />
        {children}
      </button>
    </div>
  );
}

export default GoogleButton;
