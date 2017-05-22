module.exports = context => ({
  options: {
    map: {
      sourcesContent: false,
      inline: false
    },
  },
  plugins: {
    'postcss-import': {
      path: [
        'node_modules',
        'src/main/react', // allows importing modules using absolute path, @see https://goo.gl/luH0Xa
      ],
      map: {
        sourcesContent: false,
        inline: false
      },
    },
    'postcss-mixins': {
      map: {
        sourcesContent: false,
        inline: false
      },
    },
    'postcss-each': {
      map: {
        sourcesContent: false,
        inline: false
      },
    },
    'postcss-cssnext': {
      map: {
        sourcesContent: false,
        inline: false
      },
      features: {
        customProperties: {
        //   variables: {
        //     'color-primary': 'var(--palette-indigo-500)',
        //     'color-primary-dark': 'var(--palette-indigo-700)',
        //     'color-primary-light': 'var(--palette-indigo-500)',
        //     'color-accent': 'var(--palette-pink-a200)',
        //     'color-accent-dark': 'var(--palette-pink-700)',
        //     'color-primary-contrast': 'var(--color-dark-contrast)',
        //     'color-accent-contrast': 'var(--color-dark-contrast)'
        //   }
        }
      },
      browsers: ['last 2 versions', '> 5%'],
    },
  },
});
