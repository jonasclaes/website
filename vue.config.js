module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /data\/[A-z0-9-]*\.html$/i,
          type: "asset/source",
        },
      ],
    },
  },
};
