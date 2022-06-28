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

export default class Header extends React.Component {
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
              <NavSearch></NavSearch>
              <i className="iconfont icon-sousuo"></i>
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
