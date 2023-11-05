import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background-color: var(--color-grey-10);
  border-radius: var(--border-radius-md);
  padding: 1.2rem 1.2rem;
  margin-bottom: 2.5rem;
  font-size: 1.8rem;
  font-family: "Source Code Pro", sans-serif;
`;

export const CreatePostInput = styled(Input)`
  margin: 0;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-20);
  width: 50%;
  margin-right: 10px;
  color: var(--color-grey-10);

  &::placeholder {
    color: var(--color-grey-10);
  }
`;
