import React from "react";

function FormCheckbox(props) {
  return (
    <input className="form-check-input" type="checkbox" required {...props} />
  );
}

export default FormCheckbox;
