import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background-color: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 80px auto;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding-top: 30px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  margin: 20px auto;
  border-radius: 15px;
  background-color: #3194d0;
  text-align: center;
  color: #fff;
`;
