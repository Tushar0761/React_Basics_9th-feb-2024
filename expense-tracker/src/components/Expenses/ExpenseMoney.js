import React from "react";

export default function ExpenseMoney(props) {
  const classes =
    "fs-3 ps-3 pe-3 rounded-3 text-primary border ms-auto col-4  col-lg-3  text-end";

  return <span className={classes}>{props.money} ₹</span>;
}
