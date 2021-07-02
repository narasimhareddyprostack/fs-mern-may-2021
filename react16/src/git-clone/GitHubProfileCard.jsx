import React from "react";

let GitHubProfileCard = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.profile.avatar_url} className="img-fluid" />
        <div className="card-body">
          <p className="h4">{props.profile.name}</p>
          <p className="h6">{props.profile.bio}</p>
          <a
            href={props.profile.html_url}
            className="btn btn-success"
            target="_blank"
          >
            Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default GitHubProfileCard;
