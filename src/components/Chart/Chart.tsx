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
  Cell,
} from "recharts";
import useChartData from "../../hooks/useChartData";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import { useState } from "react";
import CustomDot from "components/CustomDot/CustomDot";

interface ChartProps {
  district: string | null;
  handleClickFiltering: (value: string) => void;
}

const Chart = ({ district, handleClickFiltering }: ChartProps) => {
  const { data } = useChartData();
  const [dot, setDot] = useState("");

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          data={data}
          margin={{
            top: 40,
            right: 40,
            bottom: 40,
            left: 40
          }}
        >
          <CartesianGrid stroke="#efefef" />
          <XAxis dataKey="time" />
          <YAxis
            label={{
              value: 'area',
              angle: -90,
              position: 'insideLeft',
              offset: -10
            }}
            yAxisId="left"
          />
          <YAxis
            label={{
              value: 'bar',
              angle: 90,
              position: 'insideRight',
              offset: -10
            }}
            yAxisId="right"
            orientation="right"
          />
          <Tooltip content={<CustomToolTip />} />
          <Legend />
          <Bar
            dataKey="value_bar"
            barSize={20}
            fill="#7ac4c0"
            yAxisId="right"
            onClick={(e) => handleClickFiltering(e.id)}
          >
            {data.map((item, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={`${item.id === district ? `#004943` : `#7ac4c0`}`}
              />
            ))}
          </Bar>
          <Area
            dataKey="value_area"
            fillOpacity={0.4}
            fill="#ff7300"
            stroke="#ff7300"
            yAxisId="left"
            onClick={() => {
              handleClickFiltering(dot);
            }}
            dot={
              <CustomDot
                cx={0}
                cy={0}
                stroke="#ffaf6e"
                district={district}
                payload={{ 
                  id: "", 
                  time: "", 
                  value_area: 0, 
                  value_bar: 0, 
                  date: ""
                }}
              />
            }
          />
        </ComposedChart>
      </ResponsiveContainer >
    </>
  )
};

export default Chart;
