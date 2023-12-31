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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 6rem;
`;