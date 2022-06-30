import React from "react";
import { ListItem, ListInfo, ListMeta } from "./style";
import { connect } from "react-redux";
class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item) => {
          return (
            <ListItem key={item.id}>
              <img alt={item.title} src={item.imgUrl} />
              <ListInfo>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </ListInfo>
              <ListMeta>
                <span>{item.author}</span>
                <span>
                  <i className="iconfont icon-pinglun"></i>
                  {item.commentNum}
                </span>
                <span>
                  <i className="iconfont icon-aixin"></i>
                  {item.likeNum}
                </span>
              </ListMeta>
            </ListItem>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get("home").get("articleList").toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
