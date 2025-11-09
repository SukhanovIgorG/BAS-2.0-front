import { styled } from 'styled-components';

import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23f5e6b7ff'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linejoin='round' stroke-linecap='round' stroke-width='0.5' stroke='%232d229141' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-4,0)' fill='url(%23a)'/></svg>");
  /* dark theme */
  /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%231a1a1aff'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linejoin='round' stroke-linecap='round' stroke-width='0.5' stroke='%232e2291ff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-4,0)' fill='url(%23a)'/></svg>"); */
`;
