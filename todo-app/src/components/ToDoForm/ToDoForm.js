import Card from "../UI/Card";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";

function TodoForm() {
  return (
    <>
      <Card className="col-12 col-lg-6 container py-3 fs-3 ">
        <FormInput
          name="Task"
          formAttr={{
            type: "text",
            placeholder: "To Do Task",
            className: "form-control",
          }}
        />
      </Card>
      <Card className="d-flex d-grid gap-3 justify-content-center col-11 col-md-6">
        <Card className="col-6 ">
          <select className="form-select">
            <option value={1}>option 1</option>
          </select>
        </Card>
        <Card className="col-6">
          <select className="form-select">
            <option value={1}>option 1</option>
          </select>
        </Card>
      </Card>
      <Button
        attributes={{
          className: "btn btn-primary col-6 col-md-4 col-lg-2 my-2 ",
        }}
      >
        Add Task
      </Button>
    </>
  );
}
export default TodoForm;
