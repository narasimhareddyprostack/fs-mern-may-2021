let GitRepos = (props) => {
  return (
    <>
      {/*  <pre>{JSON.stringify(props.repos)}</pre> */}
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4> Your Repo's</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {props.repos.map((repo) => {
                    return (
                      <li className="list-group-item  d-flex justify-content-around">
                        <p>{repo.name}</p>
                        <span className="badge-success">
                          {repo.watchers_count} Waches
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GitRepos;
