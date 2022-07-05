// 引入path模块
const path = require('path');
// 获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    // extensions: ['.js', '.jsx', '.json', '.ts', '.vue', '.tsx'],
    resolve: {
      alias: {
        '@': resolve('src'),
        'components': resolve('src/components'),
        'utils': resolve('src/utils'),
        'iews': resolve('src/views'),
        'assets': resolve('src/assets')
      }
    }
  }
}