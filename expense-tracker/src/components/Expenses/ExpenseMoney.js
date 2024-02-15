import React from "react";

export default function ExpenseMoney(props) {
  const classes =
    "fs-3 ps-3 pe-3 rounded-3 text-white  border ms-auto col-3  col-lg-2  text-end";

  return <span className={classes}>{props.money} ₹</span>;
}
