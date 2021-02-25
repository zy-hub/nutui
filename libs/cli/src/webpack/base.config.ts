import Webpack from 'webpack';
import WebpackBar from 'webpackbar';
import { VueLoaderPlugin } from 'vue-loader';
import { ROOT_CLI_PATH, ROOT_PACKAGE_PATH } from '../util/dic';
import { isDev, isTest } from '../util';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const nutui_config = require(ROOT_PACKAGE_PATH('package.json'));
const nutui_cli_config = require(ROOT_CLI_PATH('package.json'));
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
export const baseConfig: Webpack.Configuration = {
  stats: 'errors-only',
  output: {
    publicPath: './' //相对路径
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: '@vue/runtime-dom',
      '@': ROOT_PACKAGE_PATH('src')
  },
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev()
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "~@/styles/variables.scss";@import "~@/sites/assets/styles/variables.scss";`
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        loader: 'url-loader',
        include: [ROOT_PACKAGE_PATH('src')],
        options: {
          limit: 3000,
          name: 'img/[name].[ext]',
          esModule: false // 否则加载时为 [object]
        }
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          esModule: false
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        loader: 'url-loader'
      },
      {
        test: /\.md$/,
        include: [ROOT_PACKAGE_PATH('src')],
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              loaders: {
                sass: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
                ]
              }
            }
          },
          {
            loader: ROOT_CLI_PATH('../md-vue-loader/index.js')
          }
        ]
      },
      {
        test: /\.vue$/,
        include: [ROOT_PACKAGE_PATH('src')],
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              loaders: {
                sass: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(js|ts)$/,
        include: [ROOT_PACKAGE_PATH('src')],
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: ['\\.vue$']
            }
          }
        ],
        exclude: /node_modules\/(?!(@nutui\/cli))/
      }
    ]
  },
  plugins: [
    new ForkTsCheckerPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: '@vue/compiler-sfc'
          }
        }
      },
      logger: {
        issues: {
          // skip info message
          log() {},
          warn(message: string) {
            console.log('wwwww',message);
          },
          error(message: string) {
            console.log('ccccc',message);
          }
        }
      }
    }),
    new Webpack.BannerPlugin({
      banner: `${nutui_config.name} v${
        nutui_config.version
      } - [base], [fullhash], ${new Date()}
(c) 2018-2021 JDC
Released under the MIT License.`
    }),
    new VueLoaderPlugin(),
    new WebpackBar({
      name: `NutUI CLI v${nutui_cli_config.version}`,
      color: '#fa2c19'
    })
  ]
};
