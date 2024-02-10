import React from "react";

export default function ExpenseMoney(props) {
  const classes =
    "fs-3 ps-3 pe-3 rounded-3 border border-secondary-subtle bg-dark-subtle border-3 ms-auto col-5 col-sm-3  text-end";

  return <span className={classes}>{props.money} ₹</span>;
}
