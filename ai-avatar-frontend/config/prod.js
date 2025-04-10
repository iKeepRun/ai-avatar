module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    API_BASE_URL: '"https://api.aiavatar.com"'
  },
  mini: {
    optimizeMainPackage: {
      enable: true
    }
  },
  h5: {
    /**
     * WebpackChain 插件配置
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    webpackChain(chain) {
      /**
       * 如果 h5 端编译后体积过大，可以使用 webpack-bundle-analyzer 查看体积源
       */
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'report.html'
          }
        ])
    }
  }
} 