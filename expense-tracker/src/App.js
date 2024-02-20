import { useRef, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Container from "./components/UI/Container";
import ExpenseContainer from "./components/Expenses/ExpenseContainer";

const appClasses = `d-flex flex-column bg-warning-subtle `;

function App() {
  let expenseArray = JSON.parse(localStorage.getItem("Expense_Array")) || [];

  const [expenseState, setExpenseState] = useState(expenseArray);

  function deleteExpense(id) {
    let confirmation = window.confirm("Are you sure to delete this item?");
    if (!confirmation) {
      return;
    }
    expenseState.forEach((expense, index) => {
      if (expense.id === id) {
        setExpenseState((prevState) => {
          const updatedExpenses = prevState.filter(
            (expense) => expense.id !== id
          );
          localStorage.setItem(
            "Expense_Array",
            JSON.stringify(updatedExpenses)
          );
          return updatedExpenses;
        });
      }
    });
  }

  function getNewExpense(newExpense) {
    setExpenseState((prevState) => {
      return [newExpense, ...expenseState];
    });
  }

  return (
    <div className={appClasses} style={{ minHeight: 100 + "vh" }}>
      <Container>
        <ExpenseForm sendNewExpense={getNewExpense} />
      </Container>
      <Container>
        <ExpenseContainer
          expenseArray={expenseState}
          deleteFunction={deleteExpense}
        />
      </Container>
    </div>
  );
}

export default App;
