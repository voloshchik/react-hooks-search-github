import React from "react";

const Repos = ({ repos }) => {
  return (
    <>
      {repos.map(repo => (
        <div className="card mb-3" key={repo.id}>
          <div className="card-body">
            <h5>
              <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                {repo.name}
              </a>
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repos;
