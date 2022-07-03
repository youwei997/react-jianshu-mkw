import React from "react";
import { WriterWrapper } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { getWriterList } from "../store/actionCreators";

// 使用 React.PureComponent 会导致setState不更新
class Writer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0,
    };
  }
  getWriter(writerList, writerPage) {
    const newList = writerList.splice((writerPage - 1) * 5, 5);
    return newList.map((item) => {
      return (
        <div className={"info-item"} key={item.id}>
          <img alt={item.author} src={item.imgUrl} />
          <div className={"author"}>
            <div className={"authorName"}>{item.author}</div>
            <div className={"authorWriter"}>
              写了{item.writerNum}k字 · {item.likeNum}k喜欢
            </div>
          </div>
          <div className={"follow"}>
            <i className="iconfont icon-jiahao"></i>
            关注
          </div>
        </div>
      );
    });
  }
  render() {
    const { getWriter } = this;
    const { handleChangePage, writerPage, writerTotalPages, writerList } =
      this.props;
    return (
      <WriterWrapper>
        <div className={"top"}>
          <span>推荐作者</span>
          <span
            className={"switch"}
            onClick={handleChangePage.bind(this, writerPage, writerTotalPages)}
          >
            <i
              style={{ transform: "rotate(" + this.state.rotate + "deg)" }}
              className="iconfont icon-spin"
            ></i>
            换一批
          </span>
        </div>
        <div className={"info"}>{getWriter(writerList, writerPage)}</div>
        <div className={"more"}>
          查看全部 <i className="iconfont icon-youjiantou1"></i>
        </div>
      </WriterWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(["home", "writerList"]).toJS(),
    writerPage: state.getIn(["home", "writerPage"]),
    writerTotalPages: state.getIn(["home", "writerTotalPages"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePage(writerPage, totalPages) {
      const newRotate = (this.state.rotate += 360);
      this.setState({
        rotate: newRotate,
      });
      let currentPage = writerPage === totalPages ? 1 : writerPage + 1;
      dispatch(actionCreators.getChangePageAction(currentPage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Writer);
