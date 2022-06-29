import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: "iconfont"; /* Project id 3489664 */
    src: url('iconfont.eot?t=1656523923962'); /* IE9 */
    src: url('iconfont.eot?t=1656523923962#iefix') format('embedded-opentype'), /* IE6-IE8 */ 
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('iconfont.ttf?t=1656523923962') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
