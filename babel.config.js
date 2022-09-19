module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react'],

  overrides: [
    {
      include: ['./packages/**'],
      presets: [['@babel/preset-env', { targets: 'defaults, not ie 11' }]],
    },
  ],
}
