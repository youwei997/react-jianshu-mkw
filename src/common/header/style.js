import styled from "styled-components";
import logoPic from "../../statics/img/logo.png";

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

export const WidthLimit = styled.div`
  margin: 0 auto;
  height: 100%;
  min-width: 768px;
  max-width: 1440px;
`;

// attrs 在元素上增加属性
export const Logo = styled.div`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  background-image: url(${logoPic});
  background-size: cover;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  // 如果是一个NavItem并且class带有left或right就显示对应的样式
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    .icon-font-size {
      font-size: 25px;
    }
  }

  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 240px;
  height: 38px;
  margin-top: 10px;
  padding: 0 30px 0 20px;
  outline: none;
  box-sizing: border-box;
  border-radius: 40px;
  border: 1px solid #eee;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 300px;
  }

  &.slide-enter {
    //width: 300px;
    transition: all 0.2s ease-out;
  }

  &.slide-enter-active {
    width: 300px;
    //transition: all 0.2s ease-out;
  }

  &.slide-exit {
    transition: all 0.2s ease-out;
  }

  &.slide-exit-active {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 30px;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 14px;
  color: #ea6f5a;
  background-color: transparent;
  width: 80px;
  height: 38px;
  margin: 9px 5px 0 15px;
  text-align: center;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    width: 100px;
    background-color: #ec6149;
    .icon-write {
      margin-right: 5px;
    }
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  margin-left: 50px;

  .icon-sousuo {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
  }

  .icon-sousuo {
    &.focused {
      background-color: #969696;
    }
  }
`;

export const SearchInfo = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 56px;
  width: 300px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .icon-spin {
    display: block;
    float: left;
    //height: 20px;
    //width: 20px;
    //text-align: center;
    //line-height: 20px;
    font-size: 13px;
    margin-right: 5px;
    transition: all 0.2s ease-in;
    //transform: rotate(90deg);
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;
