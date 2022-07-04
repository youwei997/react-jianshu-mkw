import React from "react";
import { ListItem, ListInfo, ListMeta, LoadMore } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "../store/index";
import { Link } from "react-router-dom";
class List extends React.PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item) => {
          return (
            <Link key={item.id} to={"/detail/" + item.id}>
              <ListItem>
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
            </Link>
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
