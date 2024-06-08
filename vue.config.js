module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Card-Rick-and-Morty/'
    : '/',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimize(true);
    }
  }
};
