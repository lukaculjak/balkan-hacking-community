import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
  border-top: 0.5rem solid var(--color-brand-50);
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
