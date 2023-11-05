import styled from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
}

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.8rem;
  padding: 1.5rem 4rem;
  font-weight: 500;
  margin-top: 2.5rem;
  font-family: "Source Code Pro", sans-serif;
  color: var(--main-color-10);

  background-color: ${(props) =>
    props.variant === "primary"
      ? "var(--color-brand-40)"
      : props.variant === "danger"
      ? "var(--color-red-10)"
      : "var(--color-brand-80)"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "var(--color-brand-50)"
        : props.variant === "danger"
        ? "var(--color-red-20)"
        : "var(--color-brand-90)"};
  }
`;

export const FilterCategoryButton = styled(Button)`
  border-radius: var(--border-radius-md);
  width: 250px;
  color: var(--color-grey-10);
  background-color: var(--color-brand-60);
  box-shadow: var(--shadow-sm);
  margin: 0 0 15px 0;
  font-size: 1.6rem;

  &:hover {
    background-color: var(--color-brand-20);
  }
`;

export const ProfileButton = styled(Button)`
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-10);
  background-color: var(--color-grey-60);
  font-size: 1.4rem;
  padding: 10px 20px;

  &:hover {
    background-color: var(--color-brand-10);
  }
`;

export const ProfileControlButtons = styled(Button)`
  font-size: 1.4rem;
  padding: 10px 20px;
`;

export const CreatePostButton = styled(Button)`
  padding: 15px 50px;
  margin: 0 0 0 auto;
  font-size: 1.6rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
`;
