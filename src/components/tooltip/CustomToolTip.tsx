import React from 'react';
import type { TooltipProps } from "recharts";
import styled from 'styled-components';

interface CustomToolTipProps extends TooltipProps<number, string> { }

const CustomToolTip: React.FC<CustomToolTipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) // active: true, payload에 데이터가 있는 경우에만 툴팁 제공
    return (
      <StyledToolTip>
        <h4 className='tooltip-id'>🚩 {payload[0].payload.id}</h4>
        <div className='tooltip-value'>
          <p><span className='tooltip-value-area'>value_area : </span>{payload[0].payload.value_area}</p>
          <p><span className='tooltip-value-bar'>value_bar : </span>{payload[0].payload.value_bar}</p>
        </div>
      </StyledToolTip>
    );

  return null;
};
export default CustomToolTip;

const StyledToolTip = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0.25rem;
  padding: 0.5rem;
  .tooltip-id {
    margin-bottom: 0.5rem;
  }
  .tooltip-value-area {
    color: #ff7300;
  }
  .tooltip-value-bar {
    color: #7ac4c0;
  }
`;
