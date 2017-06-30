/*
 * @Author: huixie
 * @Date: 2017-06-29 21:04:03
 * @Last Modified by: huixie
 * @Last Modified time: 2017-06-30 14:26:11
 */

import React, { Component } from 'react'
import 'style/frame.less'

export default class Frame extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { children } = this.props
    console.log(this.props)
    return (
      <div className='app-container'>
        <div className='header'><h2>项目管理系统</h2></div>
        <div className='main'>
          <div className='nav' />
          <div className='page'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
