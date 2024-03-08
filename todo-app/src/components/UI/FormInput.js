import { useState } from "react";

function FormInput(props) {
  return (
    <div className="d-flex align-items-center  my-1">
      <span className="col-4">{props.name}</span>
      <input {...props.formAttr}>{props.children}</input>
    </div>
  );
}

export default FormInput;
