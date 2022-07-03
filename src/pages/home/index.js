import React from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Topic from "./components/Topic";
import { actionCreators } from "./store/index";
import { connect } from "react-redux";

// PureComponent比Component性能高
class Home extends React.PureComponent {
  handleBackTop() {
    window.scrollTo(0, 0);
  }
  render() {
    const { showBackTop, writerList } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src={
              "https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            }
            alt={"img"}
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          {writerList.size ? <Writer></Writer> : null}
        </HomeRight>
        {showBackTop ? <BackTop onClick={this.handleBackTop}>^</BackTop> : ""}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.props.getWriterList();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeBackTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeBackTopShow);
  }
}

const mapStateToProps = (state) => {
  return {
    writerList: state.getIn(["home", "writerList"]),
    showBackTop: state.get("home").get("showBackTop"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWriterList() {
      dispatch(actionCreators.getWriterList());
    },
    changeHomeData() {
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    },
    changeBackTopShow() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 200) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
