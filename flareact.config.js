module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: [
        options.defaultLoaders.yaml-loader,
        {
          loader: "yaml-loader",
          options: { asJSON: true }
        },
        { loader: 'yaml-loader' }
      ],
    });

    return config
  },
}
