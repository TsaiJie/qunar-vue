const path = require('path')
const express = require('express')
var homeData = require('./public/mock/index') //请求数据的位置
var cityData = require('./public/mock/city')
var detailData = require('./public/mock/detail')
var router = express.Router()
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('style', resolve('src/assets/style'))
      .set('common', resolve('src/common'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  devServer: {
    before(app) {
      router.get('/api/homeData', function(req, res) {
        res.json(homeData)
      })
      router.get('/api/cityData', function(req, res) {
        res.json(cityData)
      })
      router.get('/api/detailData', function(req, res) {
        res.json(detailData)
      })
      app.use(router)
    }
  }
}
