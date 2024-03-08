import Card from "../UI/Card";
function TodoCard(props) {
  return (
    <Card className="border rounded bg-danger-subtle">
      <span className="fs-3 mx-2">{props.todo.title}</span>
      <span>{props.todo.type}</span>
      <span className="float-end mx-3">{props.todo.priority}</span>
    </Card>
  );
}
export default TodoCard;
