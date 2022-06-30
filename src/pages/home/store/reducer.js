// header reducer 专门对header的数据和操作
// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656694800&t=194e697379c137ccd4794a088fb65c3b",
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656694800&t=194e697379c137ccd4794a088fb65c3b",
    },
  ],
  articleList: [
    {
      id: 1,
      title: "DOM0和DOM2级事件简单理解",
      desc: "关于DOM0 和DOM1级事件可以简单理解为：事件分为DOM 0级事件和Dom 2级事件，DOM2级事件也叫做事件监听。DOM 0级事件的缺点是如果事件相同 后者的事件会覆盖前者的事件，DOM2级事件可以解决这个问题",
      imgUrl:
        "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656694800&t=194e697379c137ccd4794a088fb65c3b",
      author: "作者",
      commentNum: 66,
      likeNum: 67,
    },
    {
      id: 2,
      title: "DOM0和DOM2级事件简单理解",
      desc: "关于DOM0 和DOM1级事件可以简单理解为：事件分为DOM 0级事件和Dom 2级事件，DOM2级事件也叫做事件监听。DOM 0级事件的缺点是如果事件相同 后者的事件会覆盖前者的事件，DOM2级事件可以解决这个问题",
      imgUrl:
        "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656694800&t=194e697379c137ccd4794a088fb65c3b",
      author: "作者",
      commentNum: 66,
      likeNum: 67,
    },
    {
      id: 3,
      title: "DOM0和DOM2级事件简单理解",
      desc: "关于DOM0 和DOM1级事件可以简单理解为：事件分为DOM 0级事件和Dom 2级事件，DOM2级事件也叫做事件监听。DOM 0级事件的缺点是如果事件相同 后者的事件会覆盖前者的事件，DOM2级事件可以解决这个问题",
      imgUrl:
        "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656694800&t=194e697379c137ccd4794a088fb65c3b",
      author: "作者",
      commentNum: 66,
      likeNum: 67,
    },
    {
      id: 4,
      title: "DOM0和DOM2级事件简单理解",
      desc: "关于DOM0 和DOM1级事件可以简单理解为：事件分为DOM 0级事件和Dom 2级事件，DOM2级事件也叫做事件监听。DOM 0级事件的缺点是如果事件相同 后者的事件会覆盖前者的事件，DOM2级事件可以解决这个问题",
      imgUrl:
        "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656694800&t=194e697379c137ccd4794a088fb65c3b",
      author: "作者",
      commentNum: 66,
      likeNum: 67,
    },
  ],
  recommendList: [
    {
      id: 1,
      title: "日更挑战",
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png",
    },
    {
      id: 2,
      title: "简书会员",
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    },
    {
      id: 3,
      title: "优先连载",
      imgUrl:
        "https://cdn3.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    },
    {
      id: 4,
      title: "简书版权",
      imgUrl:
        "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    },
  ],
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
