import React from 'react';
import type { TooltipProps } from "recharts";

interface CustomToolTipProps extends TooltipProps<number, string> { }

const CustomToolTip: React.FC<CustomToolTipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) // active: true, payload에 데이터가 있는 경우에만 툴팁 제공
    return (
      <div>
        <h4>🚩 {payload[0].payload.id}</h4>
        <div>
          <p>value_area : {payload[0].payload.value_area}</p>
          <p>value_bar : {payload[0].payload.value_bar}</p>
        </div>
      </div>
    );

  return null;
};
export default CustomToolTip;
