import React, { PureComponent } from 'react';
import Topic from './components/topic';
import Recommend from './components/recommend';
import Writer from './components/writer';
import List from './components/list';
// import axios from 'axios';
import {connect} from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';
import {actionCreators} from './store';
import {BackTop} from './style';


class Home extends PureComponent {

    shouldComponentUpdate(){

    }

    handleScrollTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>

                <HomeLeft>
                    <img className='banner-img' src="banner.jpg" alt='' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />                    
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>TOP</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }

    componentDidMount(){
            this.props.changeHomeData();
            this.bindEvents()
        }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);       
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (State) => {
    return {
        showScroll: State.get('home').get('showScroll'),

    }

};

const mapDispatchToProps = (dispatch) => ({

    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true) );
        }else{
            dispatch(actionCreators.toggleTopShow(false) );
        }
        // console.log(document.documentElement.scrollTop);
    }

});



export default connect(mapStateToProps,mapDispatchToProps)(Home);