import React, { useRef, useState } from "react";

export default function FilterCard(props) {
  // const [selectedYear, setSelectedYear] = useState("Select one");

  //-----------------Day 8
  const selectedYearRef = useRef("Select one");

  function yearChangeHandler() {
    //   setSelectedYear(event.target.value);
    props.selectedYear(selectedYearRef.current.value);
  }

  return (
    <div className="d-flex">
      <div className="fs-5 ">Total : {props.total}</div>
      <div className=" rounded-3   bg-dark text-light ms-auto mb-2 p-2 d-flex col-6 col-lg-4">
        <select
          className="form-select"
          name="selectYear"
          id="selectYear"
          ref={selectedYearRef}
          onChange={yearChangeHandler}
          // value={selectedYear}
        >
          <option value="">Show All</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}
