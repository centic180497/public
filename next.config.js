// import css from 'file.css';
module.exports = {
    webpack: (config,{ buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
    //   config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
  
      // Important: return the modified config
      config.module.rules.push(
          {
            test: /\.(png|jpg|gif|jpeg)$/i,
            use: [
              {
                loader: 'url-loader',
              },
            ],
          },
   
          
      )
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      return config
    },
 
  }