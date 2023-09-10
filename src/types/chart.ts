export interface IData {
  id: string;
  value_area: number;
  value_bar: number;
}

export type IResponse = Record<string, IData>;

export interface IChart {
  id: string;
  value_area: number;
  value_bar: number;
  time: string;
}

export interface IChartResponse {
  [key: string]: IData;
}