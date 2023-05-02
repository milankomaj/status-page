
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: [
        options.defaultLoaders.yaml-loader,
        {
          loader: "yaml-loader/loader",
          options: { asJSON: true },
        },
      ],
    });

    return config;
  },
};