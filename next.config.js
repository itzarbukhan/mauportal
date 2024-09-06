/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Add file types to test for
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // Set the name format for font files
              outputPath: 'static/fonts/', // Specify the output directory
              publicPath: '/_next/static/fonts/', // Adjust the public path for Next.js
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  