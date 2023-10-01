import {
   defineConfig, presetAttributify, presetIcons,
   presetTypography, presetUno, transformerDirectives,
   transformerVariantGroup
} from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
   rules: [
      ['animate-slide', { animation: 'slide-right 1.25s ease-in-out infinite normal' }],
      ['shadow-light', { filter: 'drop-shadow(0 0 3px #ffffff99)' }],
      ['clippy-xl', { 'clip-path': 'polygon(0 0, 85% 0%, 85% 100%, 0% 100%)'}],
      ['clippy-large', { 'clip-path': 'polygon(0 0, 65% 0%, 50% 100%, 0% 100%)'}],
      ['clippy', { 'clip-path': 'polygon(0 0, 75% 0%, 50% 100%, 0% 100%)'}],
      ['bg-gradient', { background: 'linear-gradient(45deg, #193747, #fcfcfc, #fcfcfc, #fcfcfc, #442149)' }],
      ['bg-gradient-dark', { background: 'linear-gradient(45deg, #193747, black, black, black, #442149)' }]
   ],
   shortcuts: [],
   theme: {
      colors: {
         black: '#090909',
         white: '#E0E0E0'
      }
   },
   presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
         provider: 'bunny',
         fonts: {
            sans: 'Inter',
            mono: ['Fira Code', 'Fira Mono:400,700'],
         },
      }),
   ],
   transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
   ],
})