import React from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    const { login, handleLogin, changeUsernameInput, changePasswordInput } =
      this.props;
    const { username, password } = this.state;
    console.log(login);
    if (login) {
      return <Navigate to="/"></Navigate>;
    }
    return (
      <LoginWrapper>
        <LoginBox>
          <Input
            placeholder={"账号"}
            value={username}
            onInput={changeUsernameInput.bind(this)}
          ></Input>
          <Input
            placeholder={"密码"}
            type={"password"}
            value={password}
            onInput={changePasswordInput.bind(this)}
          ></Input>
          <Button
            onClick={() => {
              handleLogin(username, password);
            }}
          >
            登录
          </Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.get("login").get("login"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(username, password) {
      dispatch(actionCreators.login(username, password));
    },
    changeUsernameInput(e) {
      this.setState({
        username: e.target.value,
      });
    },
    changePasswordInput(e) {
      this.setState({
        password: e.target.value,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
