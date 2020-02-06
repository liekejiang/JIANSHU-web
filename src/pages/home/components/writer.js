import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, WriterItem} from '../style';

class Writer extends PureComponent{
    render(){
        return (
            <WriterWrapper>

            HomeWork


            </WriterWrapper>
        )        
    }


}

const mapStateToProps = (State) => {
    return {

    }

};


export default connect(mapStateToProps, null)(Writer);