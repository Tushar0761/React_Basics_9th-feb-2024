import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import FilterCard from "../ExpenseForm/FilterCard";

export default function ExpenseContainer(props) {
  const [selectedYear, setSelectedYear] = useState("");

  function getSelectedYear(year) {
    setSelectedYear(year);
  }

  let filteredExpense = props.expenseArray.filter((e) => {
    if (selectedYear === "") {
      return e;
    }
    return e.Date.split(" ")[3] === selectedYear;
  });

  let expenseContent;

  if (props.expenseArray.length !== 0) {
    expenseContent = (
      <>
        <FilterCard selectedYear={getSelectedYear} />
        {filteredExpense.length === 0 ? (
          <h2 className="text-center">No Expenses for {selectedYear}</h2>
        ) : (
          filteredExpense.map((e, index) => (
            <ExpenseCard expense={e} key={index}></ExpenseCard>
          ))
        )}
      </>
    );
  } else {
    expenseContent = <h2 className="text-center">No Expenses to show</h2>;
  }

  return <div>{expenseContent}</div>;
}
