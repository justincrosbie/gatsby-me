const webpack = require(`webpack`)

exports.onCreateWebpackConfig = async ({ actions}) => {
        actions.setWebpackConfig({
            plugins: [
                new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
                    resource.request = resource.request.replace(/^node:/, "");
                })
            ],
            resolve: {
                fallback: {
                    crypto: false,
                },
            },
        })
    }
