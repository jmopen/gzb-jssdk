import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import progress from 'rollup-plugin-progress'
import pkg from './package.json'
import _ from 'lodash'

const RESOLVE_CONFIG = {
  module: true,
  jsnext: true,
  main: true,
}

const UMD_NAME = _.upperFirst(_.camelCase(pkg.name))

export default [
  // commonJS
  {
    input: './lib/index.js',
    output: {
      file: './dist/index.js',
      format: 'cjs',
    },
    plugins: [progress(), resolve(RESOLVE_CONFIG), commonJS(), filesize()],
  },
  // UMD
  {
    input: './lib/index.js',
    output: {
      file: './dist/index.umd.js',
      format: 'umd',
      name: UMD_NAME,
    },
    plugins: [
      progress(),
      resolve(RESOLVE_CONFIG),
      commonJS(),
      uglify(),
      filesize(),
    ],
  },
  // ES6
  {
    input: './lib/index.js',
    output: {
      file: './dist/index.module.js',
      format: 'es',
    },
    plugins: [progress(), resolve(RESOLVE_CONFIG), commonJS(), filesize()],
  },
]
