import React, { useReducer } from 'react';
import { GitHubContext } from './gitHubContext';
import { gitHubReducer } from './gitHubReducer';
import { SEARCH_USERS, GET_REPOS, GET_USER, CLEAR_USERS, SET_LOADING } from './../types';

export const GitHubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const searchUsers = async (value) => {
    setLoading();
    //...
    dispatch({
      type: SEARCH_USERS,
      payload: [],
    });
  };

  const getUser = async (name) => {
    setLoading();
    //...
    dispatch({
      type: GET_USER,
      payload: {},
    });
  };

  const getRepos = async (name) => {
    setLoading();
    //...
    dispatch({
      type: GET_REPOS,
      payload: [],
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading } = state;

  return (
    <GitHubContext.Provider
      value={{
        searchUsers,
        getUser,
        getRepos,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
