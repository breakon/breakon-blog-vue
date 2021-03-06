const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
const indexCoreVal="indexCore"
const adminCoreVal="adminCore"

module.exports = {
    publicPath:'./',
    pages: {
      index: {
        // page 的入口
        entry: `src/${indexCoreVal}/main.js`,
        // 模板来源
        template: `public/index.html`,
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '博客',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      admin: {
        // page 的入口
        entry: `src/${adminCoreVal}/main.js`,
        // 模板来源
        template: 'public/admin.html',
        // 在 dist/index.html 的输出
        filename: 'admin.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '博客后台',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        // chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // admin:"src/admin/main.js",
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      // subpage: 'src/subpage/main.js',
      // subpage: 'src/subpage/main.js'
    },
    // lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap:false,
    configureWebpack: config => {
      if (isProduction) {
        config.plugins.push(new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }))
      }
    }
    
  }