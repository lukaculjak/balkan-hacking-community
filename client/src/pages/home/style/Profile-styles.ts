import styled from "styled-components";

export const ProfileLayout = styled.div`
  flex: 1;
  height: 100vh;
  ///////////////////////////////

  padding: 10px 10px 0 0;
`;

export const ProfileWrapper = styled.div`
  background-color: var(--color-brand-60);
  border-radius: var(--border-radius-sm);
  max-width: 350px;
  height: 530px;
  box-shadow: var(--shadow-sm);
  margin-left: auto;
  padding: 10px;
`;

export const ProfileSettings = styled.div`
  background-color: var(--color-brand-61);
  border-radius: var(--border-radius-sm);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
