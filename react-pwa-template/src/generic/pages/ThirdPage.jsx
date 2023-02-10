import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
} from "../../charts/components";

export const ThirdPage = () => {
  return (
    <div className="row d-flex justify-content-center">
      <h1>Otra página más</h1>
      <div className="col-12 border shadow" style={{ height: "400px" }}>
        <LineChart />
      </div>
      <div
        className="col-12 col-xl-6 border shadow"
        style={{ height: "400px" }}
      >
        <BarChart />
      </div>
      <div
        className="col-12 col-xl-6 border shadow"
        style={{ height: "400px" }}
      >
        <PieChart />
      </div>
      <div className="col-12 border shadow" style={{ height: "400px" }}>
        <AreaChart />
      </div>
    </div>
  );
};
