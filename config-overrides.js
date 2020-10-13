const path = require('path');
const { override, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = {
  webpack: override(
    addLessLoader({}),
    addWebpackAlias({
      '@': path.join(__dirname, '.', 'src'),
    })
  ),
};
