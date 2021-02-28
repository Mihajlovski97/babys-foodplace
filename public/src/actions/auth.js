import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.services";

export const register = (first_name, last_name, email, password, dob) => (dispatch) => {
    return AuthService.register(first_name, last_name, email, password, dob).then(
            (res) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: res.data.messeage,
                });

                return Promise.resolve();
            },
            (error) => {
                const message = 
                (error.res &&
                    error.res.data && 
                    error.res.data.message) ||
                error.message ||
                error.toString();

                dispatch({
                    type: REGISTER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        );
    };    

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
              (error.res &&
                error.res.data &&
                error.res.data.message) ||
              error.message ||
              error.toString();
      
            dispatch({
              type: LOGIN_FAIL,
            });
      
            dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
      
            return Promise.reject();
          }
        );
    };

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};