module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
     test: /\.ya?ml$/,
     loader: 'yaml-loader',
     type: 'json',
     options: { asJSON: true }
    })

    return config
  },
}
