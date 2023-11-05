import styled from "styled-components";

export const FilterLayout = styled.div`
  flex: 1;
  height: 100vh;

  padding: 10px;
`;

export const FilterCategories = styled.div`
  background-color: var(--color-grey-60);
  border-radius: var(--border-radius-sm);
  display: flex;
  justify-content: center;
  max-width: 350px;
  padding: 10px 0 0 0;
  box-shadow: var(--shadow-sm);
  margin: auto 0 0 0;
`;

export const LogoContainer = styled.div`
  width: 350px;
  position: absolute;
  bottom: 0;
`;
