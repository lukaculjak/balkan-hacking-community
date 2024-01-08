import { useContext, useEffect } from "react";
import { UserContext } from "./../../../contexts/UserContext";

import styles from "../style/LoginForm.module.css";
import SpinnerFullPage from "./../../../components/SpinnerFullPage";

import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { ButtonGroup } from "../../../ui/Button";
import Form from "../../../ui/Form";
import Paragraph from "./LoginParagraph";
import { useNavigate } from "react-router-dom";

interface MyComponentProps {
  isLoggedIn: boolean;
}

const LoginForm: React.FC<MyComponentProps> = ({ isLoggedIn }) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!userContext) {
    return <SpinnerFullPage />;
  }
  const { setEmail, setPassword, setFetch } = userContext;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    setFetch(true);
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
        <Button onClick={handleLogin} variant="primary">
          Log In
        </Button>
        <Paragraph>or</Paragraph>
        <Button variant="secondary">Register</Button>
      </ButtonGroup>
      <a href="#" className={styles.forgotPassword}>
        Forgot your password?
      </a>
    </Form>
  );
};

export default LoginForm;
