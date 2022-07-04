import React from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";

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
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
  };
};
export default connect(mapStateToProps, null)(Detail);
