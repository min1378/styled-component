import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  /* 크기 */
  font-size: 1rem;
  height: 2.5rem;

  /* 색상 */
  ${(props) => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};

      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
// 기본 Props 설정
Button.defaultProps = {
  color: "blue",
};

export default Button;
