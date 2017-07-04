/*
 * @Author: huixie
 * @Date: 2017-06-29 19:39:09
 * @Last Modified by: huixie
 * @Last Modified time: 2017-07-04 20:32:12
 */

export default (() => {
  window.$GLOBALCONFIG = {};
  +(function (global) {
    global.$ctx = 'http://localhost:3000/'
    global.userInfo = {}
  })(window.$GLOBALCONFIG)
})()
