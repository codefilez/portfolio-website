config.devServer = {
    "inline": true,
    "lazy": false,
    "noInfo": true,
    "open": true,
    "overlay": false,
    "contentBase": [
        "/Users/paul/personal/IdeaProjects/portfolio-website/build/processedResources/js/main"
    ],
    "historyApiFallback": true,
    "port": 8081,
};

config.output = {
    path: "/Users/paul/personal/IdeaProjects/portfolio-website/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "portfolio-website.js"
            : "portfolio-website-[name].js";
    },
    library: "portfolio-website",
    libraryTarget: "umd",
    globalObject: "this",
    publicPath: "/"
};