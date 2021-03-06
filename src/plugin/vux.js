import Vue from 'vue'
// import Actionsheet from 'vux/src/components/actionsheet/index.vue'
// import Agree from 'vux/src/components/agree/index.vue'
// import AjaxPlugin from 'vux/src/plugins/ajax/index.js'
// import Alert from 'vux/src/components/alert/index.vue'
// import AlertModule from 'vux/src/plugins/alert/module'
// import AlertPlugin from 'vux/src/plugins/alert/index.js'
// import AppPlugin from 'vux/src/plugins/app/index.js'
// import Array2stringFilter from 'vux/src/filters/array2String.js'
// import Badge from 'vux/src/components/badge/index.vue'
// import base64 from 'vux/src/tools/base64/index.js'
// import Blur from 'vux/src/components/blur/index.vue'
// import Box from 'vux/src/components/box/index.vue'
// import BusPlugin from 'vux/src/plugins/bus/index.js'
// import ButtonTab from 'vux/src/components/button-tab/button-tab.vue'
// import ButtonTabItem from 'vux/src/components/button-tab/button-tab-item.vue'
// import Calendar from 'vux/src/components/calendar/index.vue'
// import Card from 'vux/src/components/card/index.vue'
// import Cell from 'vux/src/components/cell/index.vue'
// import CellBox from 'vux/src/components/cell-box/index.vue'
// import CellFormPreview from 'vux/src/components/cell-form-preview/index.vue'
// import Checker from 'vux/src/components/checker/checker.vue'
// import CheckerItem from 'vux/src/components/checker/checker-item.vue'
// import CheckIcon from 'vux/src/components/check-icon/index.vue'
// import Checklist from 'vux/src/components/checklist/index.vue'
// import ChinaAddressData from 'vux/src/datas/china_address.json'
// import ChinaAddressV1Data from 'vux/src/datas/china_address_v1.json'
// import ChinaAddressV2Data from 'vux/src/datas/china_address_v2.json'
// import ChinaAddressV3Data from 'vux/src/datas/china_address_v3.json'
// import ChinaAddressV4Data from 'vux/src/datas/china_address_v4.json'
// import ChinamobileTool from 'vux/src/tools/validator/chinaMobile.js'
// import ClickOutsideDirective from 'vux/src/directives/click-outside/index.js'
// import Clocker from 'vux/src/components/clocker/index.vue'
// import CloseDialogsPlugin from 'vux/src/plugins/close-dialogs/index.js'
// import ColorPicker from 'vux/src/components/color-picker/index.vue'
// import ConfigPlugin from 'vux/src/plugins/config/index.js'
// import Confirm from 'vux/src/components/confirm/index.vue'
// import ConfirmPlugin from 'vux/src/plugins/confirm/index.js'
// import cookie from 'vux/src/tools/cookie/index.js'
// import Countdown from 'vux/src/components/countdown/index.vue'
// import Countup from 'vux/src/components/countup/index.vue'
// import dateFormat from 'vux/src/tools/date/format.js'
// import dateRange from 'vux/src/tools/date/range.js'
// import Datetime from 'vux/src/components/datetime/index.vue'
// import DatetimePlugin from 'vux/src/plugins/datetime/index.js'
// import DatetimeRange from 'vux/src/components/datetime-range/index.vue'
// import DatetimeView from 'vux/src/components/datetime-view/index.vue'
// import debounce from 'vux/src/tools/debounce/index.js'
// import Demobasic from 'vux/src/components/fullpage/DemoBasic.vue'
// import Demoindex from 'vux/src/components/popover/DemoIndex.vue'
// import DevicePlugin from 'vux/src/plugins/device/index.js'
// import DevTip from 'vux/src/components/dev-tip/index.vue'
// import Divider from 'vux/src/components/divider/index.vue'
// import Drawer from 'vux/src/components/drawer/index.vue'
// import Flexbox from 'vux/src/components/flexbox/flexbox.vue'
// import FlexboxItem from 'vux/src/components/flexbox/flexbox-item.vue'
// import Flow from 'vux/src/components/flow/flow.vue'
// import FlowLine from 'vux/src/components/flow/flow-line.vue'
// import FlowState from 'vux/src/components/flow/flow-state.vue'
// import FormatTimeFilter from 'vux/src/filters/format-time.js'
// import FormPreview from 'vux/src/components/form-preview/index.vue'
// import FriendlyTimeFilter from 'vux/src/filters/friendly-time.js'
// import Fullpage from 'vux/src/components/fullpage/index.vue'
// import Grid from 'vux/src/components/grid/grid.vue'
// import GridItem from 'vux/src/components/grid/grid-item.vue'
// import Group from 'vux/src/components/group/index.vue'
// import GroupTitle from 'vux/src/components/group-title/index.vue'
// import Icon from 'vux/src/components/icon/index.vue'
// import InlineCalendar from 'vux/src/components/inline-calendar/index.vue'
// import InlineDesc from 'vux/src/components/inline-desc/index.vue'
// import InlineLoading from 'vux/src/components/inline-loading/index.vue'
// import InlineXNumber from 'vux/src/components/inline-x-number/index.vue'
// import InlineXSwitch from 'vux/src/components/inline-x-switch/index.vue'
// import InviewDirective from 'vux/src/directives/inview/index.js'
// import Loading from 'vux/src/components/loading/index.vue'
// import LoadingPlugin from 'vux/src/plugins/loading/index.js'
// import LoadMore from 'vux/src/components/load-more/index.vue'
// import LocalePlugin from 'vux/src/plugins/locale/index.js'
// import Marquee from 'vux/src/components/marquee/marquee.vue'
// import MarqueeItem from 'vux/src/components/marquee/marquee-item.vue'
// import Masker from 'vux/src/components/masker/index.vue'
// import md5 from 'vux/src/tools/md5/index.js'
// import Msg from 'vux/src/components/msg/index.vue'
// import Name2valueFilter from 'vux/src/filters/name2value.js'
// import numberComma from 'vux/src/tools/number/comma.js'
// import numberPad from 'vux/src/tools/number/pad.js'
// import numberRandom from 'vux/src/tools/number/random.js'
// import numberRange from 'vux/src/tools/number/range.js'
// import NumberRoller from 'vux/src/components/number-roller/index.vue'
// import Panel from 'vux/src/components/panel/index.vue'
// import Picker from 'vux/src/components/picker/index.vue'
// import Popover from 'vux/src/components/popover/index.vue'
// import Popup from 'vux/src/components/popup/index.vue'
// import PopupHeader from 'vux/src/components/popup-header/index.vue'
// import PopupPicker from 'vux/src/components/popup-picker/index.vue'
// import PopupRadio from 'vux/src/components/popup-radio/index.vue'
// import Previewer from 'vux/src/components/previewer/index.vue'
// import Qrcode from 'vux/src/components/qrcode/index.vue'
// import querystring from 'vux/src/tools/querystring/index.js'
// import Radio from 'vux/src/components/radio/index.vue'
// import Range from 'vux/src/components/range/index.vue'
// import Rater from 'vux/src/components/rater/index.vue'
// import Scroller from 'vux/src/components/scroller/index.vue'
// import Search from 'vux/src/components/search/index.vue'
// import Selector from 'vux/src/components/selector/index.vue'
// import Shake from 'vux/src/components/shake/index.vue'
// import Spinner from 'vux/src/components/spinner/index.vue'
// import Step from 'vux/src/components/step/step.vue'
// import StepItem from 'vux/src/components/step/step-item.vue'
// import Sticky from 'vux/src/components/sticky/index.vue'
// import stringTrim from 'vux/src/tools/string/trim.js'
// import Swipeout from 'vux/src/components/swipeout/swipeout.vue'
// import SwipeoutButton from 'vux/src/components/swipeout/swipeout-button.vue'
// import SwipeoutItem from 'vux/src/components/swipeout/swipeout-item.vue'
// import Swiper from 'vux/src/components/swiper/swiper.vue'
// import SwiperItem from 'vux/src/components/swiper/swiper-item.vue'
// import Tab from 'vux/src/components/tab/tab.vue'
// import Tabbar from 'vux/src/components/tabbar/tabbar.vue'
// import TabbarItem from 'vux/src/components/tabbar/tabbar-item.vue'
// import TabItem from 'vux/src/components/tab/tab-item.vue'
// import throttle from 'vux/src/tools/throttle/index.js'
// import Timeline from 'vux/src/components/timeline/timeline.vue'
// import TimelineItem from 'vux/src/components/timeline/timeline-item.vue'
// import Tip from 'vux/src/components/tip/index.vue'
// import Toast from 'vux/src/components/toast/index.vue'
// import ToastPlugin from 'vux/src/plugins/toast/index.js'
// import TransferDom from 'vux/src/directives/transfer-dom/index.js'
// import TransferDomDirective from 'vux/src/directives/transfer-dom/index.js'
// import trim from 'vux/src/tools/string/trim'
// import Value2nameFilter from 'vux/src/filters/value2name.js'
// import VArea from 'vux/src/components/v-chart/v-area.vue'
// import VAxis from 'vux/src/components/v-chart/v-axis.vue'
// import VBar from 'vux/src/components/v-chart/v-bar.vue'
// import VChart from 'vux/src/components/v-chart/v-chart.vue'
// import VGuide from 'vux/src/components/v-chart/v-guide.vue'
// import Video from 'vux/src/components/video/index.vue'
// import ViewBox from 'vux/src/components/view-box/index.vue'
// import VLegend from 'vux/src/components/v-chart/v-legend.vue'
// import VLine from 'vux/src/components/v-chart/v-line.vue'
// import VPie from 'vux/src/components/v-chart/v-pie.vue'
// import VPoint from 'vux/src/components/v-chart/v-point.vue'
// import VScale from 'vux/src/components/v-chart/v-scale.vue'
// import VTooltip from 'vux/src/components/v-chart/v-tooltip.vue'
// import VuxComponentListData from 'vux/src/datas/vux_component_list.json'
// import WechatEmotion from 'vux/src/components/wechat-emotion/index.vue'
// import WechatPlugin from 'vux/src/plugins/wechat/index.js'
// import WeekCalendar from 'vux/src/components/week-calendar/index.vue'
// import WepayInput from 'vux/src/components/wepay-input/index.vue'
// import XAddress from 'vux/src/components/x-address/index.vue'
import XButton from 'vux/src/components/x-button/index.vue'
// import XCircle from 'vux/src/components/x-circle/index.vue'
// import XDialog from 'vux/src/components/x-dialog/index.vue'
// import XHeader from 'vux/src/components/x-header/index.vue'
// import XHr from 'vux/src/components/x-hr/index.vue'
// import XImg from 'vux/src/components/x-img/index.vue'
// import XInput from 'vux/src/components/x-input/index.vue'
// import XNumber from 'vux/src/components/x-number/index.vue'
// import XProgress from 'vux/src/components/x-progress/index.vue'
// import XSwitch from 'vux/src/components/x-switch/index.vue'
// import XTable from 'vux/src/components/x-table/index.vue'
// import XTextarea from 'vux/src/components/x-textarea/index.vue'

Vue.component('x-button', XButton)
