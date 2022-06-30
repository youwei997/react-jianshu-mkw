import React from "react";
import { connect } from "react-redux";
import { RecommendItem } from "./style";
class Recommend extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item) => {
          return (
            <RecommendItem key={item.id}>
              <img alt={item.title} src={item.imgUrl} />
            </RecommendItem>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get("home").get("recommendList").toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
