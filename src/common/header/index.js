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
    this.state = {
      rotate: 0,
    };
    this.getListArea = this.getListArea.bind(this);
  }
  getListArea() {
    const {
      focused,
      list,
      page,
      mouseIn,
      totalPages,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    if (focused || mouseIn) {
      const newList = list.toJS(list);
      const pageList = [];
      if (newList.length === 0) {
        return;
      }
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }

      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            <SearchInfoSwitch
              // 必须使用箭头函数调用，不写箭头函数直接传参 onClick={handleChangePage(page, totalPages)} 这样就默认会调用
              onClick={handleChangePage.bind(this, page, totalPages)}
            >
              <i
                style={{ transform: "rotate(" + this.state.rotate + "deg)" }}
                className="iconfont icon-spin"
              ></i>
              换一批
            </SearchInfoSwitch>
            热门搜索
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { getListArea } = this;
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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
                  onFocus={() => {
                    handleInputFocus(list);
                  }}
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
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPages: state.get("header").get("totalPages"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getSearchListAction());
      dispatch(actionCreators.getSearchFocusAction());
    },
    handleInputBlur() {
      const action = actionCreators.getSearchBlurAction();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreators.getMouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(actionCreators.getMouseLeaveAction());
    },
    handleChangePage(page, totalPages) {
      // 这里没用课程的ref加原生设置样式的写法
      // 有问题看 7-15换页旋转动画效果的实现
      const newRotate = (this.state.rotate += 360);
      this.setState({
        rotate: newRotate,
      });
      let currentPage = page === totalPages ? 1 : page + 1;
      dispatch(actionCreators.getChangePageAction(currentPage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
