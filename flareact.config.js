module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.yaml/,
      type: 'json',
      use: 'yaml-loader',
    })

    return config
  },
}
