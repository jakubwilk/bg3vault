import autoprefixer from 'autoprefixer'

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
<<<<<<< HEAD:postcss.config.mjs
    tailwindcss: {},
=======
    autoprefixer,
>>>>>>> 4f2c7f956f783ace825d71268c1650f6c38f908a:client/postcss.config.mjs
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
}

export default config
