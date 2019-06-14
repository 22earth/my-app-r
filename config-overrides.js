const path = require('path');
const { override, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = {
  webpack: override(
    addLessLoader({}),
    addWebpackAlias({
      '@': path.join(__dirname, '.', 'src')
    })
  ),
  // https://github.com/timarney/react-app-rewired#extended-configuration-options
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      console.log('default: proxy', proxy);
      const config = configFunction(
        {
          'xxx-app': {
            changeOrigin: true,
            target: 'http://localhost:7080'
          }
        },
        allowedHost
      );
      return config;
    };
  }
};
