import React from "react";

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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  render() {
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
              <CSSTransition
                in={this.state.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={this.state.focused ? "focused" : ""}
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i
                className={
                  this.state.focused
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
  }

  // 两个方法控制
  handleInputFocus() {
    this.setState({
      focused: true,
    });
  }
  handleInputBlur() {
    this.setState({
      focused: false,
    });
  }
}
