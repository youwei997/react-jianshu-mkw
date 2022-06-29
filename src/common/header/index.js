import React from "react";

import { connect } from "react-redux";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  WidthLimit,
  SearchWrapper,
} from "./style";

import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <WidthLimit>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont icon-font-size"></i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={
                focused
                  ? "focused iconfont icon-sousuo"
                  : "iconfont icon-sousuo"
              }
            ></i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont icon-write"></i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </WidthLimit>
    </HeaderWrapper>
  );
};

// class Header extends React.Component {
//   render() {
//     const { focused, handleInputFocus, handleInputBlur } = this.props;
//     return (
//
//     );
//   }
// }

const mapStateToProps = (state) => {
  // state 就是reducer的state
  return {
    focused: state.header.get("focused"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.getSearchFocusAction();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.getSearchBlurAction();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
