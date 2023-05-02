
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: [
        {
          loader: "yaml-loader",
          options: { asJSON: true, isWorker: true },
        },
      ],
    });

    return config;
  },
};