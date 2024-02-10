import React from "react";

export default function Container(props) {
  return (
    <div className="container col-12 col-sm-10 col-md-6 ">{props.children}</div>
  );
}
