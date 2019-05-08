// 项目基础设置
const baseConfig = {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'vue-mobile-template',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home'
  /**
   * @description 需要加载的插件
   */
  // plugin: {
  //   'error-store': {
  //     showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
  //     developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
  //   }
  // }
}
// 根据不同开发环境，加载不同的配置信息
let config
const TYPE = process.env.VUE_APP_TYPE
switch (TYPE) {
  case 'production': { // 生产环境
    config = require('./config.prod.js').default
    break
  }
  case 'development': { // 本地开发环境
    config = require('./config.dev').default
    break
  }
  case 'testing': { // 测试环境
    config = require('./config.test.js').default
    break
  }
}

export default Object.assign({}, baseConfig, config)
