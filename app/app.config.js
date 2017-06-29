/*
 * @Author: huixie
 * @Date: 2017-06-29 19:39:09
 * @Last Modified by: huixie
 * @Last Modified time: 2017-06-29 20:32:02
 */

export default (() => {
  window.$GLOBALCONFIG = {};
  +(function (global) {
    global.$ctx = 'http://localhost:8080/mockapi'
    global.userInfo = {}
  })(window.$GLOBALCONFIG)
})()
