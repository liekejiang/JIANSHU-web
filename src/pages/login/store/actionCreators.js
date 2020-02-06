import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({ 
    type: actionTypes.CHANGE_LOGIN,
    login: true,
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('./api/login.json?account=' + account + '&password=' + password ).then(
            (res) => {
                const result = res.data.data;
                if(result){
                    dispatch(changeLogin());
                }else{
                    alert('login failed');
                }

            }
        )
    }
}

export const logOut = () => ({
    type: actionTypes.LOG_OUT,
    login: false,
})