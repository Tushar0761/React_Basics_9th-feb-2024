import React from "react";

export default function ExpenseDateContainer(props) {
  const classes = `
     d-flex col-3 col-md-2 col-lg-1
     flex-column 
border border-secondary border-2
     text-center rounded 
  fs-5`;

  //Tue Mar 05 2024

  const dateArray = props.date.split(" ");

  return (
    <div className={classes}>
      <span>
        {dateArray[2]}-{dateArray[1]}
      </span>
      <span>{dateArray[3]}</span>
    </div>
  );
}
