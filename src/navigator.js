/**
 * @author walid
 * @date 2017/3/4
 * @description 界面跳转工具类
 */

import qs from 'qs'
let navigator = weex.requireModule('navigator')

export default {
  pushByUrl: (url, query) => {
    navigator.push({
      url: query ? `${url}?${qs.stringify(query)}` : url,
      animated: 'true'
    }, event => {
      console.log('callback: ', event)
    })
  },

  push: (page, query = {}) => {
    query.title = page.title
    let url = query ? `http://172.31.244.96/dist/weex/${page.jsPath}.js?${qs.stringify(query)}` : `${page.jsPath}.js`
    navigator.push({
      url,
      animated: 'true'
    }, event => {
      console.log('callback: ', event)
    })
  },

  pop: () => {
    navigator.pop({
      animated: 'true'
    }, event => {
      console.log('callback: ', event)
    })
  }
}
