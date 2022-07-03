import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: "iconfont"; /* Project id 3489664 */
    src: url('iconfont.eot?t=1656855829330'); /* IE9 */
    src: url('iconfont.eot?t=1656855829330#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('iconfont.ttf?t=1656855829330') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-youjiantou1:before {
    content: "\\e628";
  }

  .icon-jiahao:before {
    content: "\\eaf3";
  }

  .icon-aixin:before {
    content: "\\e640";
  }

  .icon-pinglun:before {
    content: "\\e63a";
  }

  .icon-spin:before {
    content: "\\e851";
  }

  .icon-compass:before {
    content: "\\e67d";
  }

  .icon-xiazai:before {
    content: "\\e668";
  }

  .icon-sousuo:before {
    content: "\\e651";
  }

  .icon-write:before {
    content: "\\e647";
  }

  .icon-font-size:before {
    content: "\\e774";
  }




`;
