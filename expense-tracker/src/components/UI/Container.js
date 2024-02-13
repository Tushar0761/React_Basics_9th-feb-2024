import React from "react";

export default function Container(props) {
  return (
    <div className="container mt-2 mb-2  col-11 col-sm-10 col-md-6  bg-dark-subtle rounded p-3 shadow">
      {props.children}
    </div>
  );
}
