let Message = () => {
  let message = "Hello";
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Message:{message}</div>
              <div className="card-body">
                <button type="submit" className="btn btn-success mr-4">
                  GM
                </button>
                <button type="submit" className="btn btn-dark">
                  GN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default Message;
