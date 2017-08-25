import axios from 'axios'
import qs from 'qs'
const base = 'https://erp.bbtree.com/basic/xmh.do'


export const dateData = function(parm,fn){
  axios.post(base,qs.stringify(parm))
  .then((res)=> {
     fn && fn.call(null,res)
  })
  .catch(function (response) {
    console.log(response)
  })
}