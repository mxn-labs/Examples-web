import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import faker from "faker";

import { labels } from "@/data/fruits";

const series = [
  {
    name: "Almacén 2",
    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  },
];

const options = {
  title: {
    text: "AreaChart",
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
    id: "apexchart-example-area",
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

export const AreaChart = () => {
  return (
    <Chart
      type="area"
      series={series}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
};
