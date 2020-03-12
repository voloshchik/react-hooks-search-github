import React, { useReducer } from "react";
import axios from "axios";

import { GithubContect } from "./githubContext";
import { githabReducer } from "./githabReducer";

import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING
} from "../types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

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
    const response = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload:response.data.items });
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
