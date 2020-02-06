import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {

        if(!this.props.showLogin){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="account" innerRef={(input) => {this.account = input}}/>
                        <Input placeholder="password" tpye='password' innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>Log in</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }


    }
}

const mapState = (state) => ({
    showLogin: state.get('login').get('login'),

});

const mapDispatch = (dispatch) => ({
    login(account, password){
        dispatch(actionCreators.login(account.value, password.value))
    }
});

export default connect(mapState, mapDispatch)(Login);