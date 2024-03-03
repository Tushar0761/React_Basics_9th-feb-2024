import { useState } from "react";

function FormInput(props) {
  return (
    <div className="d-flex align-items-center  my-1">
      <span className="col-4">{props.name}</span>
      <input
        {...props.formAttr}
        // value={props.value}
        // onChange={props.onChangeHandler}
        // type={props.type}
        // className={props.classes}
        // placeholder={props.placeHolder}
        // required={props.isRequired ? true : false}
      ></input>
    </div>
  );
}

export default FormInput;
