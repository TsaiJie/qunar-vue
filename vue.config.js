const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set('style', resolve('src/assets/style'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  }
}
