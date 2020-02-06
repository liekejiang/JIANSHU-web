import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';


const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false,
});

export default (state = defaultState, action) => {
 
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            })
            // return state.set('list',action.data).set('totalPage', action.totalPage);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.MOUSE_IN:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_OUT:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}


    // if(action.type === actionTypes.SEARCH_FOCUS){
    //     //实际是复制生成一个新数据
    //     return state.set('focused', true);

    //     //这是不使用immutable的情况
    //     // return {
    //     //     focused: true
    //     // }
    // }

    // if(action.type === actionTypes.SEARCH_BLUR){
    //     return state.set('focused',false);

    //     //这是不使用immutable的情况
    //     // return {
    //     //     focused: false
    //     // }
    // }

    // if(action.type === actionTypes.CHANGE_LIST){
    //     return state.set('list',action.data);
    // }