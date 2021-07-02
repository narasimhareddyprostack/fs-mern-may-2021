import React from "react";

let GitHubProfileDetails = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <span className="badge badge-success mx-2">
            Followers: {props.profile.followers}
          </span>
          <span className="badge badge-primary mx-2">
            Public Repos: {props.profile.public_repos}
          </span>
          <span className="badge badge-success mx-1">
            Following: {props.profile.following}
          </span>
          <span className="badge badge-warning mx-1">
            Gits: {props.profile.public_gists}
          </span>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Name: {props.profile.name}</li>
            <li className="list-group-item">
              Location: {props.profile.location}
            </li>
            <li className="list-group-item">
              Company Name: {props.profile.company}
            </li>
            <li className="list-group-item">
              Member Since: {new Date(props.profile.created_at).getFullYear()}
            </li>
            <li className="list-group-item">
              Profile URL: {props.profile.name}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GitHubProfileDetails;
