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
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
