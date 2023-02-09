import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import faker from "faker";
// import zoomPlugin from "chartjs-plugin-zoom";
// import dynamic from "next/dynamic";
// const zoomPlugin = dynamic(() => import('chartjs-plugin-zoom'), {
//   ssr: false,
// })

import { GenericLayout } from "@/components/layouts";
import { labels } from "@/data/fruits";

ChartJS.register(
  // zoomPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Chart",
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "Almacén 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Almacén 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const ThirdPage = () => {
  return (
    <GenericLayout title="Otra página más">
      <div className="row d-flex justify-content-center">
        <h1>Otra página más</h1>
        <div className="w-75">
          <Bar options={options} data={data} />
        </div>
        <div className="w-75">
          <Line options={options} data={data} />
        </div>
      </div>
    </GenericLayout>
  );
};

export default ThirdPage;
