import Chart from "react-apexcharts";
import faker from "faker";

import { short_labels } from "../../data/fruits";

const series = [
  {
    name: "Almacén 1",
    data: short_labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
];

const options = {
  title: {
    text: 'BarChart',
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
    id: "apexchart-example-bar",
  },
  xaxis: {
    categories: short_labels,
  },
  dataLabels: {
    enabled: false,
  },
};

export const BarChart = () => {
  return (
    <Chart
      type="bar"
      series={series}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};
