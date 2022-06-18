import React from "react";

function FormLabel({ htmlFor, children, ...others }) {
  return (
    <label className="label-material" htmlFor={htmlFor} {...others}>
      {children}
    </label>
  );
}

export default FormLabel;
