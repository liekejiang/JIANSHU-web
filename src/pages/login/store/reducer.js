import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    login: false,
});

const changeLogin= (state, action) => {
    return state.merge({
        login: action.login,
    })
};
 
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN :
            return changeLogin(state, action);
        case actionTypes.LOG_OUT:
            return changeLogin(state, action);
        default:
            return state;
    }
}