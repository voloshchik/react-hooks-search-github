import React, { useReducer } from "react";
import { GithubContect } from "./githubContext";
import { githabReducer } from "./githabReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING
} from "../types";

const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  };
  const [state, dispatch] = useReducer(githabReducer, initialState);
  console.log("githabReducer", state);

  const search = async value => {
    setLoading();
    dispatch({ type: SEARCH_USERS, payload: [] });
  };
  const getUser = async name => {
    setLoading();

    dispatch({ type: GET_USER, payload: {} });
  };
  const getRepos = async name => {
    setLoading();

    dispatch({ type: GET_REPOS, payload: [] });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });
  const { user, users, repos, loading } = state;
  return (
    <GithubContect.Provider
      value={{
        search,
        getUser,
        getRepos,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading
      }}
    >
      {children}
    </GithubContect.Provider>
  );
};

export default GithubState;
