import React, { useContext, useEffect } from "react";
import { GithubContect } from "../context/github/githubContext";
import { Link } from "react-router-dom";
import Repos from "../components/Repos";

const Profile = ({ match }) => {
  const { getUser, getRepos, user, loading, repos } = useContext(GithubContect);
  const urlName = match.params.name;
  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, []);
  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists
  } = user;
  return (
    <>
      <Link className="btn btn-link" to="/">
        На главную
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img style={{ width: 150 }} src={avatar_url} alt={name} />
              <h1>{name}</h1>
              {location && <p>Место положение:{location}</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username:</strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Компания:</strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website:</strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className="badge badge-primary mr-1">
                Подписчики:{followers}
              </div>
              <div className="badge badge-success mr-1">
                Подписан:{following}
              </div>
              <div className="badge badge-info mr-1">
                Репозитории:{public_repos}
              </div>
              <div className="badge badge-dark">Gists:{public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default Profile;
