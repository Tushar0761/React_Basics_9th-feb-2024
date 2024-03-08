import Card from "../components/UI/Card";
import FormInput from "../components/UI/FormInput";
import Button from "../components/UI/Button";
import TodoForm from "../components/ToDoForm/ToDoForm";
import TodoCard from "../components/ToDoForm/ToDoCard";

function Dashboard() {
  return (
    <Card
      style={{ overflow: "scroll" }}
      className="h-100 bg-dark-subtle d-flex flex-column align-items-center"
    >
      <TodoForm></TodoForm>
      <Card className="container col-md-8 col-lg-6 d-grid gap-3">
        <TodoCard
          todo={{
            title: "Go to Gym",
            type: "Personal",
            priority: "High Priority",
          }}
        />

        <TodoCard
          todo={{
            title: "Go to Gym",
            type: "Personal",
            priority: "High Priority",
          }}
        />
        <TodoCard
          todo={{
            title: "Go to Gym",
            type: "Personal",
            priority: "High Priority",
          }}
        />
      </Card>
    </Card>
  );
}
export default Dashboard;
