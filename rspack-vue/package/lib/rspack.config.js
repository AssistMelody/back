import path from 'path'
import process from 'process';
import { VueLoaderPlugin } from 'vue-loader';

/** @type {import('@rspack/cli').Configuration} */
export default {
  entry: {
    index: './src/index.js',
  },
  output: {
    library: {
      type: 'module', // UMD 格式
    },
    filename: 'index.js',
    clean: true, // 打包前清空输出目录
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 支持的文件扩展名
    alias: {
      '@': path.resolve(process.cwd(), 'src'), // 设置别名
    },
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue',
    },
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
    ],
  },
};