import React from "react";

function FormCheckboxLabel({ children, htmlFor }) {
  return (
    <label className="form-check-label form-label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default FormCheckboxLabel;
