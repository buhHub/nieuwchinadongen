/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import colors from 'vuetify/lib/util/colors'
import { createVuetify } from 'vuetify'

export const defaultTheme = {
  dark: false,
  colors: {
    primary: '#154273',
    background: '#F7E7CE',
 
    // Status
    error: '#B71C1C',
    warning: '#ed6c02',
    info: '#009EE0',
    success: '#0ac02f',
 
    // Temporary revert grey till transfer
    white: '#FFFFFF',
    lightgrey: '#F5F5F5',
    grey: '#E0E0E0',
    darkgrey: '#9E9E9E',
    black: '#000000',
 
    orange: '#f39900',
    accent: '#009de0',
    'light-blue': '#009de0',
    purple: '#64207e',
    none: colors.grey.lighten1,
    att: colors.grey.darken1,
    basic: colors.orange.darken3,
    spec: colors.green.base,
    rts: '#6697B7',
    gun: colors.red.accent4,
    cas: colors.yellow.darken1,
    mount: colors.brown.base,
    notready: colors.red.lighten1,
    ready: colors.green.base,
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme,
    },
  },
})
