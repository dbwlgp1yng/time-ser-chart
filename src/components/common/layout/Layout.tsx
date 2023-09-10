import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
};
export default Layout;

const StyledLayout = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;