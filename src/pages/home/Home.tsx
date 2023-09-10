import {
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  Legend,
} from "recharts";
import useChartData from "../../hooks/useChartData";

const Home = () => {
  const { data } = useChartData();

  return (
    <ComposedChart
      width={1200}
      height={500}
      data={data}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      barGap={10}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="time" />
      <YAxis
        label={{ value: 'area', angle: -90, position: 'insideLeft' }}
        yAxisId="left"
      />
      <YAxis
        label={{ value: 'bar', angle: 90, position: 'insideRight' }}
        yAxisId="right"
        orientation="right"
      />
      <Tooltip />
      <Legend />
      <Area dataKey="value_area" fill="#ff7300" stroke="#ff7300" yAxisId="left" />
      <Bar dataKey="value_bar" barSize={20} fill="#7ac4c0" yAxisId="right" />
    </ComposedChart>
  )
};

export default Home;
