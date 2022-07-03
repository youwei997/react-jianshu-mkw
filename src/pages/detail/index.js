import React from "react";
import { DetailWrapper, Header, Content } from "./style";
class Detail extends React.Component {
  render() {
    return (
      <DetailWrapper>
        <Header>111</Header>
        <Content>
          <img
            alt={""}
            src={
              "//upload-images.jianshu.io/upload_images/27828718-db6eaf3a9228afe5.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
            }
          />
          <p>
            4. Vue组件的三个组成部分 每个 .vue 组件都由 3 部分构成，分别是：
            template -> 组件的模板结构 script -> 组件的 JavaScript 行为 style ->
            组件的样式 其中，每个组件中必须包含 template 模板结构，而 script
            行为和 style 样式是可选的组成部分。 作者：生命里那束光
            链接：https://www.jianshu.com/p/e982f7f30b9b 来源：简书
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
          </p>
          <b>
            注意createSBallWindow创建窗口函数的show，设置的初始属性是show:false,也就是默认不显示，只有调用的时候才会显示。可以在主窗口关闭的时候调用win2.show()就可以让小球显示。
          </b>
          <p>
            注意createSBallWindow创建窗口函数的show，设置的初始属性是show:false,也就是默认不显示，只有调用的时候才会显示。可以在主窗口关闭的时候调用win2.show()就可以让小球显示。
            作者：_littleTank_ 链接：https://www.jianshu.com/p/ef80cffc7875
            来源：简书
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
          </p>
        </Content>
      </DetailWrapper>
    );
  }
}

export default Detail;
