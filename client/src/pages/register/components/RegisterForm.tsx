import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import Form from "../../../ui/Form";

function RegisterForm() {
  return (
    <Form>
      <Input type="text" placeholder="e-mail:"></Input>
      <Input type="password" placeholder="password:"></Input>
      <Input type="password" placeholder="repeat password:"></Input>
      <Input type="password" placeholder="username:"></Input>

      <Button variant="primary">Create Account</Button>
    </Form>
  );
}

export default RegisterForm;
