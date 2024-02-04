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
      ['clippy-xl', { 'clip-path': 'polygon(0 0, 40% 0%, 5% 100%, 0% 100%)'}],
      ['clippy-large', { 'clip-path': 'polygon(0 0, 65% 0%, 50% 100%, 0% 100%)'}],
      ['clippy', { 'clip-path': 'polygon(0 0, 75% 0%, 50% 100%, 0% 100%)'}],
      ['bg-gradient', { background: 'linear-gradient(45deg, #193747, #fcfcfc, #fcfcfc, #fcfcfc, #442149)' }],
      ['bg-gradient-dark', { background: 'linear-gradient(45deg, #193747, black, black, black, #442149)' }]
   ],
   shortcuts: [],
   theme: {
      colors: {
         black: 'rgb(7 7 7)',
         white: 'rgb(220 215 200)',
         currentColor: 'currentColor'
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
            sans: [
               {
                 name: 'Inter',
                 weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
                 italic: true,
               },
               {
                 name: 'sans-serif',
                 provider: 'none',
               },
            ],
            display: [
               {
                  name: 'Noto Serif Display',
                  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
                  italic: false,
               },
               {
                  name: 'serif',
                  provider: 'none',
                },
            ],
            serif: [
               {
                  name: 'Noto Serif',
                  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
                  italic: true,
               },
               {
                  name: 'serif',
                  provider: 'none',
                },
            ]
         },
      }),
   ],
   transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
   ],
})