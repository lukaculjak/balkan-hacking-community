import Spinner from "./Spinner";
import styled from "styled-components";

const FullPageSpinner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: var(--color-grey-40); */
  background: linear-gradient(120deg, #14213d 0%, #1abc9c 100%);
`;

function SpinnerFullPage() {
  return (
    <FullPageSpinner>
      <Spinner />
    </FullPageSpinner>
  );
}

export default SpinnerFullPage;
