import React from "react";

function FormLabel({ htmlFor, children }) {
  return (
    <label className="label-material" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default FormLabel;
