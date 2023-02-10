import Chart from "react-apexcharts";
import faker from "faker";

import { short_labels } from "../../data/fruits";

const series = short_labels.map(() =>
  faker.datatype.number({ min: 0, max: 1000 })
);

const options = {
  title: {
    text: "PieChart",
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
  theme: {
    mode: "light",
    palette: "palette1",
    monochrome: {
      enabled: false,
      color: "#255aee",
      shadeTo: "light",
      shadeIntensity: 0.65,
    },
  },
  chart: {
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ",",
          headerCategory: "category",
          headerValue: "value",
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString();
          },
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        },
      },
    },
  },
  labels: short_labels,
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

export const PieChart = () => {
  return (
    <Chart
      type="pie"
      series={series}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};
