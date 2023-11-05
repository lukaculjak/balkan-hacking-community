import Logo from "../../ui/Logo";
import RegisterForm from "./components/RegisterForm";
import StyledRegister from "./style";

function Register() {
  return (
    <StyledRegister>
      <Logo />
      <RegisterForm />
    </StyledRegister>
  );
}

export default Register;
