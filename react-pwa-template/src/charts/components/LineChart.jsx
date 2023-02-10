import Chart from "react-apexcharts";
import faker from "faker";

import { labels } from "../../data/fruits";

const series = [
  {
    name: "Almacén 1",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
  {
    name: "Almacén 2",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
  {
    name: "Almacén 3",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
  {
    name: "Almacén 4",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
];

const options = {
  title: {
    text: 'LineChart',
    align: "left",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: undefined,
      color: "#263238",
    },
  },
  chart: {
    id: "apexchart-example-line",
    zoom: {
      enabled: true,
      type: "x",
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: "#90CAF9",
          opacity: 0.4,
        },
        stroke: {
          color: "#0D47A1",
          opacity: 0.4,
          width: 1,
        },
      },
    },
  },
  xaxis: {
    categories: labels,
  },
};

export const LineChart = () => {
  return (
    <Chart
      type="line"
      series={series}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};
