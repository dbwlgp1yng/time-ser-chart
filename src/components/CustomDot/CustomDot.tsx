import type { IChart } from "../../types/chart";

interface Props {
  cx: number;
  cy: number;
  stroke: string;
  payload: IChart;
  district: string | null;
}

const CustomDot = ({ cx, cy, stroke, payload, district }: Props) => {
  if (payload.id === district) {
    return (
      <svg x={cx - 3} y={cy - 3} fill="white">
        <g transform="translate(4 4)">
          <circle r="4" fill={stroke} />
          <circle r="2" fill={stroke} />
        </g>
      </svg>
    );
  }

  return null;
};

export default CustomDot;