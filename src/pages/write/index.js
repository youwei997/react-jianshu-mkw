import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class Write extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { login } = this.props;
    if (!login) {
      return <Navigate to={"/login"}></Navigate>;
    }
    return <div>写文章</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.get("login").get("login"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Write);
