import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

// &.是当前标签同级的class  .代表当前标签包裹的内部标签的class

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0; 
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
// export const Logo = styled.a.attrs({
//     href: '/'
// })`
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100px;
//     height: 56px;
//     background: url(${logoPic});
//     background-size: contain;
// `;

export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizeing: border-box;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    color: #333;

    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }

    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;

`

export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px; 
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 300px;
    }

    &.slide-enter{
        transition: all 1s ease-out;
    }
    &.slide-enter-active{
        width: 300px;
    }
    &.slide-exit{
        transition: all 1s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;

    .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        // background: gray;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused{
            background: #777;
            color: #fff;
        }
    }


`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 15px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    padding: 0 20px;
    font-size: 14px;
    &.reg{
        color: #ec6149
    }

    &.article{
        color: #fff;
        background: #ec6149;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 25px;
    top: 56px;
    width: 255px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
    .spin{
        margin-right: 2px;
        font-size: 12px;
        display: block;
        float: left;
        transition: all .3s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 2px;
    margin-left: 8px;
    margin-bottom: 15px;
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`