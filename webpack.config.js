module.exports = (_env, argv) => {
  const mode = {
    development: 'dev',
    production: 'prod',
  }

  return require(`./webpack/webpack.config.${mode[argv.mode]}.js`)
}
