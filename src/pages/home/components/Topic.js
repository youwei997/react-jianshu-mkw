import React from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "./style";
class Topic extends React.PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map((item) => {
          return (
            <TopicItem key={item.id}>
              <img alt={item.title} src={item.imgUrl} />
              <span>{item.title}</span>
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  let list = state.getIn(["home", "topicList"]);
  list = list.toJS();
  return { list };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
