import React from "react";
import { ListItem, ListInfo, ListMeta, LoadMore } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "../store/index";
class List extends React.Component {
  render() {
    const { list, getMoreList, page } = this.props;
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
        <LoadMore
          onClick={() => {
            getMoreList(page);
          }}
        >
          阅读更多
        </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get("home").get("articleList").toJS(),
    page: state.get("home").get("articleListPage"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      page += 1;
      dispatch(actionCreators.getMoreList(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
