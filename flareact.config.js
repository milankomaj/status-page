module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      loader: 'yaml-loader',
      options: { asJSON: true }
    })

    return config
  },
}
