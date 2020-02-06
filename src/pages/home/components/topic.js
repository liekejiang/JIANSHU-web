import React, {PureComponent} from 'react';
import {TopicWrapper, TopicItem} from '../style';
import {connect} from 'react-redux';

class Topic extends PureComponent{
    render(){
        return (
            
            <TopicWrapper>
                {  
                    this.props.topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" src={item.get('imgUrl')} alt='' />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                {/* <TopicItem>
                    <img  className="topic-pic" src="hotpoint.png" width="32" height="32"/>
                    HOT
                </TopicItem> 
                   
                <TopicItem>
                    <img  className="topic-pic" src="hotpoint.png" width="32" height="32"/>
                    HOT
                </TopicItem> 

                <TopicItem>
                    <img  className="topic-pic" src="hotpoint.png" width="32" height="32"/>
                    HOT
                </TopicItem> 
                   
                <TopicItem>
                    <img  className="topic-pic" src="hotpoint.png" width="32" height="32"/>
                    HOT
                </TopicItem>  */}

            </TopicWrapper>  
            // <div>Topic~</div>

        )        
    }
}

const mapStateToProps = (State) => {
    return{
        topicList: State.get('home').get('topicList'),
    }
};

// const mapDispatchToProps = (Dispatch) => {

// };


export default connect(mapStateToProps ,null)(Topic);