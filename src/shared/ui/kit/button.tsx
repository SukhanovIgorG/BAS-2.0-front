import { styled } from 'styled-components';

import { Button as AntButton, type ButtonProps as AntButtonProps } from 'antd';

export type ButtonProps = AntButtonProps;

function Button(props: ButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled(AntButton)`
  border: 3px solid #252424;
  border-radius: 3px;
  box-shadow: 4px 4px 0 0 #221b19;

  &:hover {
    box-shadow: 5px 5px 0 0 #221b19;
    transform: translate(-1px, -1px);
  }
`;

export { Button };
