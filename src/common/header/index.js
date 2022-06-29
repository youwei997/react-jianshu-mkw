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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";

import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

// const Header = (props) => {
//   const { focused, handleInputFocus, handleInputBlur } = props;
//   return (

//   );
// };

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getListArea = this.getListArea.bind(this);
  }
  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
            热门搜索
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.list.map((item, index) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { getListArea } = this;
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              {getListArea()}
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
  }
}

const mapStateToProps = (state) => {
  // state 就是reducer的state
  return {
    // getIn 代表从state里 的header 取 focused
    // 和下面的相等
    focused: state.getIn(["header", "focused"]),
    // focused: state.get("header").get("focused"),

    list: state.getIn(["header", "list"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getSearchListAction());
      dispatch(actionCreators.getSearchFocusAction());
    },
    handleInputBlur() {
      const action = actionCreators.getSearchBlurAction();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
