import React, { useState } from "react";
import Axios from "axios";
import GitProfile from "./GitProfile";
import { clientId, clientSecret } from "./gitData";
import GitRepos from "./GitHubRepos";
let GitHubSearch = () => {
  let [userName, setUserName] = useState("");
  let [profile, setProfile] = useState({});
  let [repos, setRepos] = useState([]);
  let searchUser = (event) => {
    event.preventDefault();
    profileSearch(userName);
    repoSearch(userName);
  };
  let profileSearch = (userName) => {
    let url = `https://api.github.com/users/${userName}?clientId={clientId}&clientSecret={clientSecret}`;
    Axios.get(url)
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let repoSearch = (userName) => {
    let url = `https://api.github.com/users/${userName}/repos?clientId={clientId}&clientSecret={clientSecret}`;
    Axios.get(url)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h4> GitHub Search</h4>
              </div>
              <div className="card-body">
                <form className="form-inline" onSubmit={searchUser}>
                  <div className="form-group">
                    <input
                      type="search"
                      size="35"
                      className="form-control "
                      placeholder="User Name"
                      name="userName"
                      value={userName}
                      onChange={(event) => {
                        setUserName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group ml-4">
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </form>
                {/*  <pre>{JSON.stringify(repos)}</pre> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <pre>{JSON.stringify(profile)}</pre> */}
          <div className="col">
            {Object.keys(profile).length > 0 ? (
              <>
                <GitProfile profile={profile} />
              </>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GitRepos repos={repos} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GitHubSearch;
