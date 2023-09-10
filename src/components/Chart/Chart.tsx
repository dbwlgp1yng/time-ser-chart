import {
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useChartData from "../../hooks/useChartData";
import CustomToolTip from "../CustomToolTip/CustomToolTip";

const Chart = ({ district }: {
  district: string;
}) => {
  const { data } = useChartData();
  const filteredData = district ? data.filter((item) => item.id === district) : data;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart
        data={filteredData}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      >
        <CartesianGrid stroke="#efefef" />
        <XAxis dataKey="time" />
        <YAxis
          label={{ value: 'area', angle: -90, position: 'insideLeft', offset: -10 }}
          yAxisId="left"
        />
        <YAxis
          label={{ value: 'bar', angle: 90, position: 'insideRight', offset: -10 }}
          yAxisId="right"
          orientation="right"
        />
        <Tooltip content={<CustomToolTip />} />
        <Legend />
        <Area dataKey="value_area" fill="#ff7300" stroke="#ff7300" yAxisId="left" />
        <Bar dataKey="value_bar" barSize={20} fill="#7ac4c0" yAxisId="right" />
      </ComposedChart>
    </ResponsiveContainer>
  )
};

export default Chart;
