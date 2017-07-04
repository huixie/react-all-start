/*
 * @Author: huixie
 * @Date: 2017-06-29 20:52:39
 * @Last Modified by: huixie
 * @Last Modified time: 2017-07-04 18:32:03
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserList } from 'reduxdir/actions/user'

@connect((state, props) => ({
  config: state.config,
  userListResult: state.userListResult
}))
class user extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    fetchUserList({})
  }

  render () {
    const { userListResult } = this.props
    console.log(userListResult)
    return (
      <div>
        用户管理
      </div>
    )
  }
}

export default user
