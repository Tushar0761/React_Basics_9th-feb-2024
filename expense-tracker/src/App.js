import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Container from "./components/UI/Container";
import ExpenseContainer from "./components/Expenses/ExpenseContainer";

const appClasses = `d-flex flex-column bg-warning-subtle `;

function App() {
  const [expenseState, setExpenseState] = useState([]);

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
        <ExpenseContainer expenseArray={expenseState} />
      </Container>
    </div>
  );
}

export default App;
