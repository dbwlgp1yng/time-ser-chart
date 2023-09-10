import { useState } from "react";
import Chart from "components/Chart/Chart";
import useChartData from "hooks/useChartData";

const Home = () => {
  const { districtName } = useChartData();
  const [district, setDistrict] = useState('');

  const handleClickFiltering = (name: string) => setDistrict(name);

  return (
    <>
      <div>
        <button onClick={() => handleClickFiltering('')}>전체</button>
        {districtName.map((name) => (
          <button
            key={name}
            onClick={() => handleClickFiltering(name)}
          >{name}</button>
        ))}
      </div>
      <Chart district={district} />
    </>
  )
};

export default Home;
