module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:9527",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap: true,
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
};
