import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
  font-family: "iconfont"; /* Project id 3489664 */
  src: url('iconfont.eot?t=1656604252064'); /* IE9 */
  src: url('iconfont.eot?t=1656604252064#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
       url('iconfont.ttf?t=1656604252064') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
