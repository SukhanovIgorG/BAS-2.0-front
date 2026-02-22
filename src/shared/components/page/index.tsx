import { styled } from 'styled-components';

import type { ReactNode } from 'react';

export interface PageProps {
  children?: ReactNode;
  title?: string;
  renderTopRight?: ReactNode;
}

export const Page = ({ children, title, renderTopRight }: PageProps) => {
  return (
    <PageWrapper>
      <TopLine>
        <PageTitle>{title}</PageTitle>
        {renderTopRight}
      </TopLine>
      {children}
    </PageWrapper>
  );
};

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageWrapper = styled.div`
  height: 100%;
`;

const PageTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
`;
