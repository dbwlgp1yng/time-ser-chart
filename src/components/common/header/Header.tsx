import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Time Series Chart</h1>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
`;