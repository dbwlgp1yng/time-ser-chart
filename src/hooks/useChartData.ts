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
          time: new Date(key).toLocaleTimeString().replace("오후 ", ""),
        };
      });

      setChartData(chartArray);
    };
    getChart();
  }, []);
  
  const districtName = [...new Set(chartData.map((data) => data.id))].sort();

  return { data: chartData, districtName };
};

export default useChartData;