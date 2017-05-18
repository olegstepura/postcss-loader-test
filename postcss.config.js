module.exports = context => ({
  map: true,
  plugins: {
    'postcss-import': {
      path: [
        'node_modules',
        'src/main/react', // allows importing modules using absolute path, @see https://goo.gl/luH0Xa
      ],
      map: true,
    },
    'postcss-mixins': {
      map: true,
    },
    'postcss-each': {
      map: true,
    },
    'postcss-cssnext': {
      map: true,
      features: {
        customProperties: {
          variables: {
            'color-primary': 'var(--palette-indigo-500)',
            'color-primary-dark': 'var(--palette-indigo-700)',
            'color-primary-light': 'var(--palette-indigo-500)',
            'color-accent': 'var(--palette-pink-a200)',
            'color-accent-dark': 'var(--palette-pink-700)',
            'color-primary-contrast': 'var(--color-dark-contrast)',
            'color-accent-contrast': 'var(--color-dark-contrast)'
          }
        }
      },
      browsers: ['last 2 versions', '> 5%'],
    },
  },
});
