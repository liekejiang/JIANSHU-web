import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';


const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/5),
});


export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR,
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const action = changeList(res.data.data);
            dispatch(action);
        }).catch(() => {
            console.log('error');
        });
    }
};

export const mouseIn = () => ({
    type: actionTypes.MOUSE_IN,
});

export const mouseOut = () => ({
    type: actionTypes.MOUSE_OUT,
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});

