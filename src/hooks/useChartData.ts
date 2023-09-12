import { useEffect, useState } from "react";
import { getChartData } from "../apis";
import type { IChart, IResponse } from "../types/chart";

const useChartData = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);

  useEffect(() => {
    const getChart = async () => {
      const data: IResponse = await getChartData();

      const chartArray: IChart[] = Object.keys(data).map((key) => {
        return {
          ...data[key],
          time: new Date(key).toLocaleTimeString(),
          date: new Date(key).toLocaleDateString()
        };
      });
      setChartData(chartArray);
    };
    getChart();
  }, []);
  
  const districtName = [...new Set(chartData.map((data) => (data.id)))].sort();
  const uniqueDate = [...new Set(chartData.map((item) => (item.date)))];

  return { data: chartData, districtName, uniqueDate };
};

export default useChartData;