import { HashLoader } from "react-spinners";

export const FullScreenLoading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="row w-100 d-flex justify-content-center">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: "200px", height: "200px", borderWidth: "10px" }}
        >
          <HashLoader
            color={"#0d6efd"}
            loading={true}
            size={130}
            speedMultiplier={1}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <span className="fs-1 text-center">Cargando...</span>
      </div>
    </div>
  );
};
