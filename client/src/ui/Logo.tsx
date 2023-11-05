import styled from "styled-components";
import logo from "../assets/logo.svg";

const StyledLogo = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="BHC-logo" />
    </StyledLogo>
  );
}

export default Logo;
