import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/install.js',
    output: [
      {
        format: 'esm',
        file: 'dist/olvy-widget.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/olvy-widget.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal()
    ]
  }
]