import {
   defineConfig, presetAttributify, presetIcons,
   presetTypography, presetUno, transformerDirectives,
   transformerVariantGroup
} from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
   rules: [
      ['shadow-light', { filter: 'drop-shadow(0 0 3px #ffffff99)' }],
      ['transform-matrix', { transform: 'matrix3d(0.9, 0.1, 0.5, 0, 0, 1, -0.1, 0, 0, 0, 0.1, 0, 0, 0, 0, 1.2)' }],
      ['clippy-xl', { 'clip-path': 'polygon(0 0, 70% 0%, 30% 100%, 0% 100%)'}],
      ['animate-dot', { 'animation': 'dotmove 5s ease-in-out normal infinite'}],
      ['clippy-large', { 'clip-path': 'polygon(0 0, 65% 0%, 50% 100%, 0% 100%)'}],
      ['clippy', { 'clip-path': 'polygon(0 0, 75% 0%, 50% 100%, 0% 100%)'}],
      ['bg-dot', { 'background-image': 'linear-gradient(45deg, #00000045 .1em, transparent .1em)' }],
      ['bg-dot-dark', { 'background-image': 'linear-gradient(45deg, #ffffff29 .1em, transparent .1em)' }],
      ['bg-gradient', { background: 'linear-gradient(45deg, #193747, #fcfcfc, #fcfcfc, #fcfcfc, #442149)' }],
      ['bg-gradient-dark', { background: 'linear-gradient(45deg, #193747, black, black, black, #442149)' }]
   ],
   shortcuts: [
      // ...
   ],
   theme: {
      colors: {
         black: '#020202',
         white: '#fcfcfc'
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