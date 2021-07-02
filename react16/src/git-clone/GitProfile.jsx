import GitHubProfileCard from "./GitHubProfileCard";
import GitHubProfileDetails from "./GitHubProfileDetails";
let GitProfile = (props) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h4> Your Profile</h4>
          </div>
        </div>
        {Object.keys(props).length > 0 ? (
          <>
            <div className="row">
              <div className="col-md-3">
                <GitHubProfileCard profile={props.profile} />
              </div>
              <div className="col-md-9">
                <GitHubProfileDetails profile={props.profile} />
              </div>
            </div>
          </>
        ) : null}
      </div>
      ;
    </>
  );
};
export default GitProfile;
