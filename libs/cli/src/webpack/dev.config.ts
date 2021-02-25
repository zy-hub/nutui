import Webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { baseConfig } from './base.config';
import { ROOT_PACKAGE_PATH } from '../util/dic';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { isDev } from '../util';
export const devConfig: Webpack.Configuration = merge(baseConfig, {
  mode: 'development',
  entry: {
    'nutui-mobile': ROOT_PACKAGE_PATH('src/sites/doc/main.ts'),
    'nutui-doc': ROOT_PACKAGE_PATH('src/sites/mobile/main.ts')
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '_',
      cacheGroups: {
        chunks: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'common_chunks'
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev() ? '[name].css' : 'css/[name].[hash].min.css'
    }),
    new HtmlWebpackPlugin({
      title: 'NutUI',
      template: ROOT_PACKAGE_PATH('src/sites/doc/index.html'),
      filename: 'index.html',
      hash: true, //防止缓存
      inject: true,
      chunks: ['chunk-vendors', 'common_chunks', 'nutui-doc'],
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeAttributeQuotes: true //压缩 去掉引号
      }
    }),
    new HtmlWebpackPlugin({
      title: 'NutUI',
      template: ROOT_PACKAGE_PATH('src/sites/mobile/index.html'),
      filename: 'demo.html',
      hash: true, //防止缓存
      inject: true,
      chunks: ['chunk-vendors', 'common_chunks', 'nutui-mobile'],
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeAttributeQuotes: true //压缩 去掉引号
      }
    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
});
