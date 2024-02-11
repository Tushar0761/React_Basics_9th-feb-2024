import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseCard from "./components/Expenses/ExpenseCard";
import Container from "./components/UI/Container";

function App() {
  const expensesArray = [
    { Name: "Food", Date: "2nd feb", Money: 100 },
    { Name: "Bottle", Date: "2nd Jan", Money: 50 },
    { Name: "Phone", Date: "5th feb", Money: 10000 },
    { Name: "Cloths", Date: "10th feb", Money: 500 },
    { Name: "Cloths", Date: "10th feb", Money: 5500 },
    { Name: "Cloths", Date: "10th feb", Money: 5500 },
  ];

  function getNewExpense(newExpense) {
    console.log(newExpense);
    console.log(expensesArray);
    expensesArray.unshift(newExpense);
  }

  return (
    <div className="App" id="App">
      <Container>
        <ExpenseForm sendNewExpense={getNewExpense} />
      </Container>
      <Container>
        {expensesArray.map((e) => (
          <ExpenseCard expense={e}></ExpenseCard>
        ))}
      </Container>
    </div>
  );
}

export default App;
