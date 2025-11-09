import { styled } from 'styled-components';

import type { ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
  title: string;
}

export const Page = ({ children, title }: PageProps) => {
  return (
    <PageWrapper>
      <PageTitle>{title}</PageTitle>
      {children}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100%;
`;

const PageTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
`;
