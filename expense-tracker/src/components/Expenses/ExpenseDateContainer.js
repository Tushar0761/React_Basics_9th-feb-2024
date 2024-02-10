import React from "react";

export default function ExpenseDateContainer(props) {
  const classes = `
     d-flex col-2
     flex-column
     border border-dark
text-center rounded bg-info-subtle
  fs-5  me-2 text-dark`;

  const date = props.date.split(" ");

  return (
    <div className={classes}>
      <span>{date[0].trim()}</span>
      <span>{date[1].trim()}</span>
    </div>
  );
}
