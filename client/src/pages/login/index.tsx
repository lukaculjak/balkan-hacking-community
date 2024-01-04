import Logo from "../../ui/Logo";
import LoginForm from "./components/LoginForm";
import StyledLogin from "./style";

interface LoginProps {
  isLoggedIn: boolean;
}

function Login({ isLoggedIn }: LoginProps) {
  return (
    <StyledLogin>
      <Logo />
      <LoginForm isLoggedIn={isLoggedIn} />
    </StyledLogin>
  );
}

export default Login;
