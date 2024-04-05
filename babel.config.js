module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "@styles": "./src/styles",
                        "@screens": "./src/screens",
                        "@typings": "./src/typings",
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@utils": "./src/utils",
                        "@routes": "./src/routes",
                    },
                },
            ],
            "babel-plugin-styled-components",
        ],
    };
};
