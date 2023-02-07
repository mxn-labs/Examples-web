export const FullScreenLoading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div
        className="spinner-grow text-primary"
        style={{ width: "100px", height: "100px", borderWidth: "10px" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="ms-2 fs-1">Cargando...</div>
    </div>
  );
};
