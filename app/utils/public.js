/*
 * @Author: huixie
 * @Date: 2017-07-04 16:21:45
 * @Last Modified by: huixie
 * @Last Modified time: 2017-07-05 15:39:29
 */

import { message } from 'antd'
import { hashHistory } from 'react-router'
import fetch from 'isomorphic-fetch'

export const API_PREFIX = window.$GLOBALCONFIG.$ctx
export const API_SUFFIX = '.json'

// 发起AjaxAction
export const createAjaxAction = (api, startAction, endAction) => (
  data,
  cb,
  reject
) => dispatch => {
  let respon
  startAction && dispatch(startAction())
  data = isArray(data) ? data : [data]
  api(...data)
    .then(checkStatus)
    .then(response => {
      return response.json()
    })
    .then(resp => {
      respon = resp
      endAction && dispatch(endAction({ req: data, res: resp }))
    })
    .then(() => {
      switch (respon.status) {
      case 1:
        cb && cb(respon)
        break
      case 0:
        if (typeof reject === 'function') {
          reject(respon)
        } else {
          message.error(respon.msg)
        }
        break
      default:
        message.error('返回有误')
        break
      }
    })
    .catch(catchError)
}

// 判断是否为数组
export const isArray = arr =>
  Object.prototype.toString.call(arr) === '[object Array]'

// 检查状态
const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res
  }
  const err = new Error(res.statusText)
  err.response = res
  throw err
}

// 拦截错误
const catchError = error => {
  const { response } = error
  if (!response) {
    message.error(error)
    return
  }
  if (response.status === 401) {
    message.error('请重新登陆')
    // 线上环境，刷新页面以重定向到登陆页面
    process.env.NODE_ENV === 'production' && location.reload()
  } else if (response.status === 403) {
    message.error('你缺少相关权限,部分功能无法使用')
  }
}

export const fetchJSON = (url, params) => {
  const data = {
    'method': 'POST',
    'credentials': 'include',
    headers: {
      'Content-Type': 'application/json'
      // token: params.token
    },
    'body': JSON.stringify(params)
  }
  url = `${API_PREFIX}${url}${API_SUFFIX}`
  return fetch(url, data)
}

export const fetchJSONByPost = url => query => {
  return fetchJSON(url, query)
}

export const hasResponseError = (data, errorHandler) => {
  if (data.status < 0) {
    // 退出登录
    return false
  } else if (data.status === 0) {
    return true
  } else if (typeof data !== 'object') {
    try {
      data = JSON.parse(`${data}`)
    } catch (e) {
      message.error(`非法的响应数据格式，请联系管理员！[${data}]`)
      return true
    }
  } else if (!data.status && errorHandler === undefined) {
    return true
  } else if (!data.status && data.httpError && errorHandler !== undefined) {
    return typeof errorHandler === 'function'
      ? errorHandler(data.httpError)
      : errorHandler
  }
  return false
}
