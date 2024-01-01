import { useState } from "react";
import axios from "axios";

import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { ButtonGroup } from "../../../ui/Button";
import Form from "../../../ui/Form";
import Paragraph from "./LoginParagraph";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post("127.0.0.1:5000/api/v1/signin", {
  //       email,
  //       password,
  //     });
  //     console.log("papa franjo");

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = () => {
    alert(`This is the ${email} and this is the ${password}`);
  };

  return (
    <Form>
      <Input
        type="text"
        onChange={handleEmailChange}
        placeholder="e-mail:"
      ></Input>
      <Input
        type="password"
        onChange={handlePasswordChange}
        placeholder="password:"
      ></Input>
      <ButtonGroup>
        <Button onClick={handleSubmit} variant="primary">
          Log In
        </Button>
        <Paragraph>or</Paragraph>
        <Button variant="secondary">Register</Button>
      </ButtonGroup>
      <a href="#">Forgot your password?</a>
    </Form>
  );
};

export default LoginForm;
