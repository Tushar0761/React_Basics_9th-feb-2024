import React, { useRef, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import FilterCard from "../ExpenseForm/FilterCard";

export default function ExpenseContainer(props) {
  const [selectedYear, setSelectedYear] = useState("");

  // const selectedYearRef = useRef("");

  function getSelectedYear(year) {
    // setSelectedYear(year);
    // selectedYearRef.current.value = year;
  }

  let filteredExpense = props.expenseArray.filter((e) => {
    if (selectedYear === "") {
      return e;
    }
    return e.Date.split(" ")[3] === selectedYear;
  });

  let expenseContent;

  let total = 0;
  if (filteredExpense.length !== 0) {
    filteredExpense.forEach((expense) => {
      total += Number(expense.Money);
    });
  }

  if (props.expenseArray.length !== 0) {
    expenseContent = (
      <React.Fragment>
        <FilterCard selectedYear={getSelectedYear} total={total} />
        {filteredExpense.length === 0 ? (
          <h2 className="text-center">No Expenses for {selectedYear}</h2>
        ) : (
          filteredExpense.map((e, index) => (
            <ExpenseCard
              expense={e}
              key={index}
              deleteFunction={props.deleteFunction}
            ></ExpenseCard>
          ))
        )}
      </React.Fragment>
    );
  } else {
    expenseContent = <h2 className="text-center">No Expenses to show</h2>;
  }

  return <div>{expenseContent}</div>;
}
