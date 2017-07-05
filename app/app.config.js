/*
 * @Author: huixie
 * @Date: 2017-06-29 19:39:09
 * @Last Modified by: huixie
 * @Last Modified time: 2017-07-05 11:55:17
 */

export default (() => {
  window.$GLOBALCONFIG = {};
  ; (function (global) {
    global.$ctx = 'http://localhost:8080'
    global.userInfo = {}
  })(window.$GLOBALCONFIG);
})()
