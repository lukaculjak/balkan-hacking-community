import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { ButtonGroup } from "../../../ui/Button";
import Form from "../../../ui/Form";
import Paragraph from "./LoginParagraph";

function LoginForm() {
  return (
    <Form>
      <Input type="text" placeholder="e-mail:"></Input>
      <Input type="password" placeholder="password:"></Input>
      <ButtonGroup>
        <Button variant="primary">Log In</Button>
        <Paragraph>or</Paragraph>
        <Button variant="secondary">Register</Button>
      </ButtonGroup>
    </Form>
  );
}

export default LoginForm;
