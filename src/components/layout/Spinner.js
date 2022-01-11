import React from "react";
import spinner from "../layout/assets/spinner.gif";
const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="icon"
        width={180}
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
