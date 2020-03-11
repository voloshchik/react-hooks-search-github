import React, { useReducer } from "react";
import { GithubContect } from "./githubContext";
import { githabReducer } from './githabReducer';

const GithubState = ({ children }) => {
    const initialState={
        user:{},
        users:[],
        loading:false,
        repos:[]
    }
const [state, dispatch] = useReducer(githabReducer, initialState)
console.log('githabReducer', state)

  return <GithubContect.Provider>{children}</GithubContect.Provider>;
};

export default GithubState;
