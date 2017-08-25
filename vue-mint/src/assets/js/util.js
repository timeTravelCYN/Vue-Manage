/*
*平台类型判断
*/
let userAgentStr = navigator.userAgent;
export let plat = {
  isIos(){
        if (!!userAgentStr.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            return true;
        } else {
            return false;
        }
    },
  isAndroid(){
      if (userAgentStr.indexOf('Android') > -1 || userAgentStr.indexOf('Linux') > -1) {
          return true;
      } else {
          return false
      }
    }
}

function getParam() {
    let url = window.location.search;
    if (url) {
        url = url.substr(1);
        var arr = url.split("&"),
            param,
            obj = {};

        for (var i = 0; i < arr.length; i++) {
            param = arr[i].split("=");
            obj[param[0]] = decodeURI(param[1]);

        }
        return obj
    } else {
        return false;
    }
}
export const urlParam = getParam()