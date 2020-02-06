import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HeaderWrapper, NavSearch, Logo, Nav, NavItem,
    Addition, Button, SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {Link} from 'react-router-dom';
import { actionCreators as loginActionCreators} from '../../pages/login/store';
// import {IconFont} from '../../statics/iconfont/iconfont.js';

class Header extends Component {
    
    render() {
        const {focused, handleInputBlur, handleInputFocus,list,login, logout} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />                
                </Link>
                <Nav>
                    <NavItem className='left active' >Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    {
                    login ? 
                        <NavItem className='right' onClick={logout}>exit</NavItem> :
                         <Link to='/login'><NavItem className='right'>log in</NavItem></Link>
                    }
                    
                    <SearchWrapper>
                        <CSSTransition
                            timeout={1000}
                            in={focused}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                    <Button className='article'>
                        <span className="iconfont">&#xe602;</span>
                        Write</Button>
                    </Link>
                    <Button className='reg'>sign up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }; 

    getListArea() {
        const {focused, list, page, totalPage, handleMouseEnter, mouseIn, handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
        for(let i = (page-1) * 5; i < page * 5 ; i++){
            pageList.push( 
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }}

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                    <SearchInfoTitle>HOT
                            <SearchInfoSwitch 
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                            change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        logout(){
            dispatch(loginActionCreators.logOut());
        },
        handleInputFocus(list) {
            if(list.size === 0){
            dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseIn());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseOut());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 10;
            }
            
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';

            dispatch(actionCreators.changePage(page%totalPage + 1));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        totalPage: state.get('header').get('totalPage'),
        login: state.get('login').get('login'),
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
// const getListArea = (show) => {
//     if (show) {
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>HOT
//                             <SearchInfoSwitch>change</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>Edu</SearchInfoItem>
//                     <SearchInfoItem>Life</SearchInfoItem>
//                     <SearchInfoItem>Car</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     } else {
//         return null;
//     }
// }






// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo />
//             <Nav>
//                 <NavItem className='left active' >Home</NavItem>
//                 <NavItem className='left'>Download App</NavItem>
//                 <NavItem className='right'>
//                     <span className="iconfont">&#xe636;</span>
//                 </NavItem>
//                 <NavItem className='right'>log in</NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         timeout={1000}
//                         in={props.focused}
//                         classNames="slide"
//                     >
//                         <NavSearch className={props.focused ? 'focused' : ''}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}>
//                         </NavSearch>
//                     </CSSTransition>
//                     <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className='article'>
//                     <span className="iconfont">&#xe602;</span>
//                     Write</Button>
//                 <Button className='reg'>sign up</Button>
//             </Addition>
//         </HeaderWrapper>
//     );
// }