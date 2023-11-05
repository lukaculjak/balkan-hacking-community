import styled from "styled-components";

interface ParagraphProps {
  variant: "text" | "date";
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${(props) => (props.variant === "text" ? "1.6rem" : "1.5rem")};

  color: #fff;
  line-height: 1.1;
  margin-bottom: 3px;
`;

export default Paragraph;
