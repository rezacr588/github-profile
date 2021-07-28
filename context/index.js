import { createContext, useContext } from 'react'

export const GithubContext = createContext()

export const useGithubContext = () => useContext(GithubContext)

export const ACTIONS = {
    SET_REPOSITORIES: "SET_REPOSITORIES",
    SET_USER: "SET_USER"
};

export const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.SET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload
            };
        case ACTIONS.SET_USER:
            return {
                ...state,
                profile: action.payload
            };
        default:
            return state;
    };
};