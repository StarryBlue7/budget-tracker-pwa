const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    mode: "development",
    entry: {},
    output: {
        path: __dirname + "/public/dist",
        publicPath: "/dist",
    },
    plugins: [
        new WebpackPwaManifest({
            fingerprints: false,
            inject: false,
            name: "Budget Tracker App",
            short_name: "Budget Tracker",
            description: "An application for tracking budgets",
            background_color: "#01579b",
            theme_color: "#ffffff",
            start_url: "/",
            icons: [{
                src: path.resolve("public/icons/icon-512x512.png"),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: path.join("assets", "icons")
            }]
        })
    ],
};

module.exports = config;