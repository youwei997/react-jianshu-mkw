import styled from "styled-components";
// Topic 样式
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #ececec;
`;
export const TopicItem = styled.div`
  float: left;
  background-color: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  overflow: hidden;
  margin-right: 15px;
  margin-bottom: 10px;
  > img {
    display: block;
    height: 32px;
    width: 32px;
    float: left;
    margin-right: 10px;
  }
`;

// List样式
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ececec;
  overflow: hidden;

  > img {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  h3 {
    line-height: 27px;
    font-size: 18px;
    color: #333;
    font-weight: 700;
    margin-bottom: 7px;
  }
  > p {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin-bottom: 7px;

    display: -webkit-box;
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*隐藏后添加省略号*/
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /*想显示多少行*/
  }
`;

export const ListMeta = styled.div`
  span {
    color: #b4b4b4;
    font-size: 12px;
    margin-right: 15px;
    i {
      font-size: 10px;
      margin-right: 4px;
    }
  }
`;

// recommend 样式
export const RecommendItem = styled.div`
  margin-bottom: 8px;
  img {
    width: 280px;
    height: 50px;
    background-size: contain;
    ${"" /* 下面这种也可以，必须在标签把url传递进去 */}
    ${"" /* background:url(${(props)=>props.ingUlr}) */}
  }
`;

// writer 样式
export const WriterWrapper = styled.div`
  margin-top: 50px;
  width: 278px;
  border: 1px solid #ccc;
  text-align: center;
  height: 300px;
  line-height: 300px;
  border-radius: 4px;
`;
