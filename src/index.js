/**
 * @author walid
 * @date 2017/3/4
 * @description 界面跳转工具类
 */

import navigator from './navigator'

function getPage(map, path) {
  Object.values(map).forEach(item => {
    if (item.path === path) {
      return item
    }
  })
}

const weexVueRouter = {
  install(Vue, {map}){
    let platform = weex.config.env.platform
    if (platform.toLowerCase() === 'web') {
      return
    }
    let bundleUrl = weex.config.bundleUrl
    let route = bundleToPath(bundleUrl, map)

    Object.defineProperty(Vue.prototype, '$router', {
      value: {
        push({path, query}) {
          navigator.push(getPage(map, path), query)
        },
        replace({path, query}) {
          navigator.pop()
          navigator.push(getPage(map, path), query)
        },
        back() {
          if (navigator) {
            navigator.pop()
          }
        }
      },
      configurable: false
    })

    Object.defineProperty(Vue.prototype, '$route', {
      configurable: false,
      value: {
        path: route.path,
        query: route.query
      }
    })
  }
}

function bundleToPath(url, map) {
  let route = {
    params: null,
    query: null,
    hash: null,
    path: null,
    fullPath: null,
    matched: null,
    name: null
  }
}

export default weexVueRouter