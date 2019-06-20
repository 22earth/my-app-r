const path = require('path');
const { override, addLessLoader, addWebpackAlias,
  fixBabelImports } = require('customize-cra');

module.exports = {
  webpack: override(
    // npm install babel-plugin-import --save-dev
    // https://github.com/ant-design/create-react-app-antd
    // useBabelRc(),  // not work 2019-06-20
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1DA57A' }
    }),
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
