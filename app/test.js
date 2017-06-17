/**
 * Created by huixie on 2017/6/17.
 */

require('./style/index.css');
var text=require('./component/helloworld/hello')
module.exports=function(){
    console.log("hello world");
};
document.body.appendChild(document.createElement('div'))

console.log(text)