import { fromJS } from 'immutable';
import recommend from '../components/recommend';
// import * as actionTypes from './actionTypes';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],

    articleList: [],

    recommendList: [],

    articlePage: 1,

    showScroll: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        topicList: fromJS(action.topicList),
    })
};

const addHomeList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.articleList),
        articlePage: action.page,
    })
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_HOME_LIST:
            return addHomeList(state,action);
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.merge({
                showScroll: action.show,
            })
        default:
            return state;
    }
}