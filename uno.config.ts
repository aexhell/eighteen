import {
   defineConfig, presetAttributify, presetIcons,
   presetTypography, presetUno, transformerDirectives,
   transformerVariantGroup
} from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
   rules: [
      ['transform-matrix', { transform: 'matrix3d(0.9, 0.1, 0.5, 0, 0, 1, -0.1, 0, 0, 0, 0.1, 0, 0, 0, 0, 1.2)' }],
      ['bg-gradient', { background: 'linear-gradient(45deg, #193747, #fcfcfc, #fcfcfc, #fcfcfc, #442149)'}],
      ['bg-gradient-dark', { background: 'linear-gradient(45deg, #193747, black, black, black, #442149)'}]
    ],
   shortcuts: [
      // ...
   ],
   theme: {
      colors: {
         black: '#020202'
      }
   },
   presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
         provider: 'fontshare',
         fonts: {
            sans: 'Satoshi',
            mono: ['Fira Code', 'Fira Mono:400,700'],
         },
      }),
   ],
   transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
   ],
})