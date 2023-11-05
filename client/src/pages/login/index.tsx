import Logo from "../../ui/Logo";
import LoginForm from "./components/LoginForm";
import StyledLogin from "./style";

function Login() {
  return (
    <StyledLogin>
      <Logo />
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
