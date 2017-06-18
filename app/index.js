/**
 * Created by huixie on 2017/6/17.
 */
import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import {Input,Button} from 'antd'
import 'style/base.less'

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="container">
        <h1>Hello React!</h1>
        <p>dd</p>
        <Input size="large"/>
        <Input size="default"/>
        <Input size="small"/>
        <Button size="large" type="primary">提交1</Button>
        <Button size="default" type="default">提交</Button>
        <Button size="small" type="error">提交</Button>
      </div>
    )
  }
}
ReactDOM.render(<App/> ,document.getElementById('app'))
