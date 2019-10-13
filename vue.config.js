module.exports = {
    publicPath: './',
    productionSourceMap: true,
    lintOnSave: true,
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '/': {
                target: 'http://blog.test',
                changeOrigin: true,
                ws: false,
            }
        }
    }
}