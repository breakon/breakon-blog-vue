module.exports = {
  presets: [
    '@vue/app'
  ]
  ,
  plugins: [
    ['import', {
      'libraryName': 'ant-design-vue',
      'libraryDirectory': 'es',
      'style': false // `style: true` 会加载 less 文件
    }]
  ]
}
