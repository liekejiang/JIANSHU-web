import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
// import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';


class Write extends PureComponent {
    render() {

        if(this.props.showLogin){
            return (
                <div></div>
            )
        }else{
            return <Redirect to='/login'/>
        }


    }
}

const mapState = (state) => ({
    showLogin: state.get('login').get('login'),

});

export default connect(mapState, null)(Write);