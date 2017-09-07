import pkg from './package.json'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import progress from 'rollup-plugin-progress'
import _ from 'lodash'

const RESOLVE_CONFIG = {
  module: true,
  jsnext: true,
  main: true,
}
const FILE_NAME = 'gzb-jssdk'
const UMD_NAME = _.upperFirst(_.camelCase(pkg.name))
const BANNER = `
/**
 * ${pkg.name} - ${pkg.version}
 * ${pkg.homepage}
 * Copyright(c) ${new Date().getFullYear()} ${pkg.author}
 */`

export default [
  // commonJS for development
  {
    input: './lib/index.js',
    external: ['tslib'],
    output: {
      file: `./dist/${FILE_NAME}.js`,
      format: 'cjs',
      banner: BANNER,
    },
    plugins: [
      progress(),
      replace({
        'process.env.MODULE_TYPE': JSON.stringify('commonjs'),
      }),
      resolve(RESOLVE_CONFIG),
      commonJS(),
      filesize(),
    ],
  },
  // ES6 for development
  {
    input: './lib/index.js',
    external: ['tslib'],
    output: {
      file: `./dist/${FILE_NAME}.module.js`,
      format: 'es',
      banner: BANNER,
    },
    plugins: [
      progress(),
      replace({
        'process.env.MODULE_TYPE': JSON.stringify('commonjs'),
      }),
      resolve(RESOLVE_CONFIG),
      commonJS(),
      filesize(),
    ],
  },
  // UMD for production
  {
    input: './lib/index.js',
    output: {
      file: `./dist/${FILE_NAME}.umd.js`,
      format: 'umd',
      name: UMD_NAME,
      banner: BANNER,
    },
    plugins: [
      progress(),
      replace({
        'process.env.MODULE_TYPE': JSON.stringify('umd'),
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'production'
        ),
      }),
      resolve(RESOLVE_CONFIG),
      commonJS(),
      uglify({
        output: {
          // preserve banner
          comments: /Copyright\(c\)/,
        },
      }),
      filesize(),
    ],
  },
]
