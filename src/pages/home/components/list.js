import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';
class List extends PureComponent {
    render() {
        return (
            <div>
            {this.props.articleList.map((item,index) => {
                return (
                    <Link key={index} to={"./detail/" + item.get('id')}>  {/*动态路由*/}
                    {/* <Link key={index} to={"./detail?id=" + item.get('id')}> */}
                    <ListItem key={index}>
                        <img className="list-pic" src={item.get('imgUrl')} alt=''></img>
                        <ListInfo>
                            <h3 className='title'>{item.get('title')}</h3>
                            <p className='desc'>{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                    </Link>
                );
            })}
            <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>Load More</LoadMore>

           </div> 
        )
    }
}

const mapStateToProps = (State) => {
    return {
        articleList: State.get('home').get('articleList'),
        page: State.get('home').get('articlePage'),
    }
};


const mapDispatchToProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(List);

