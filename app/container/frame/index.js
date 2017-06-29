/*
 * @Author: huixie
 * @Date: 2017-06-29 21:04:03
 * @Last Modified by: huixie
 * @Last Modified time: 2017-06-29 21:10:45
 */

import React, { Component } from 'react'

class Frame extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <div className='header' />
        <div className='main'>
          <div className='nav' />
          <div className='page'>
            {children}
          </div>
        </div>
        <div className='footer' />
      </div>
    )
  }
}

export default Frame
