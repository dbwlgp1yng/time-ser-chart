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
  width: 100%;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 3rem 0;
  }
`;