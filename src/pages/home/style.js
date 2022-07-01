import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  padding-top: 30px;
  width: 625px;
  margin-left: 15px;
  float: left;
  > img {
    width: 625px;
    height: 270px;
    background-size: cover;
    //margin-bottom: 35px;
    border-radius: 6px;
  }
`;

export const HomeRight = styled.div`
  ${"" /* width: 240px; */}
  padding-top: 30px;
  float: right;
`;

export const BackTop = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 40px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #dcdcdc;
  background-color: #fff;
`;
