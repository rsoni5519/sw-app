// config-overrides.js
let currenTimeStamp = new Date().getTime();
module.exports = {
    // New config, e.g. config.plugins.push...
    webpack: (config, env) => {
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
            cacheGroups: {
                default: false,
            }
        }
        config.output.filename = `static/js/[name]-${currenTimeStamp}.js`;
        config.plugins[5].options.filename = `static/css/[name]-${currenTimeStamp}.css`;
        config.plugins[5].options.moduleFilename = `static/css/[name]-${currenTimeStamp}.css`;
        return config;
    }
}