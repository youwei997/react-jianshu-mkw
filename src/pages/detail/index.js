import React from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store/index";

class Detail extends React.Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail();
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail() {
      dispatch(actionCreators.getDetail());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
