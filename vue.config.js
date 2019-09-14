module.exports = {
    publicPath: './',
    productionSourceMap: true,
    lintOnSave: true,
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '/': {
                target: 'http://guolh-php.guolh.com',
                changeOrigin: true,
                ws: false,
            }
        }
    }
}