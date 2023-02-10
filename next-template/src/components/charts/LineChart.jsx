import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import faker from "faker";

import { labels } from "@/data/fruits";

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
    text: "LineChart",
    align: "left",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      fontFamily: undefined,
      color: "#fafafa",
    },
  },
  theme: {
    mode: "dark",
    palette: "palette1",
    monochrome: {
      enabled: false,
      color: "#255aee",
      shadeTo: "light",
      shadeIntensity: 0.65,
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
