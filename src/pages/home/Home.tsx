import { useNavigate, useSearchParams } from "react-router-dom";
import Chart from "components/Chart/Chart";
import useChartData from "hooks/useChartData";
import styled from "styled-components";

const Home = () => {
  const { districtName } = useChartData();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get("id");
  const navigate = useNavigate();

  const handleClickFiltering = (clickedId: string) => {
    if (clickedId) setSearchParams({ id: clickedId });
  };

  return (
    <>
      <StyledFilter>
        <button
          onClick={() => navigate("/")}
          className={`${currentParams === "" ? "active" : ""}`}
        >전체</button>
        {districtName.map((name) => (
          <button
            key={name}
            onClick={() => handleClickFiltering(name)}
            className={`${currentParams === name ? "active" : ""}`}
          >{name}</button>
        ))}
      </StyledFilter>
      <Chart district={currentParams} />
    </>
  )
};

export default Home;

const StyledFilter = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    background-color: #d6d6d6;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
  }
  .active {
    background-color: #5c5c5c;
    color: #fff;
  }
`;