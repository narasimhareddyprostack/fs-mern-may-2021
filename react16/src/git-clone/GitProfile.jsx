let GitProfile = (props) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body">
                <img src={props.profile.avatar_url} />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default GitProfile;
