module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'react/jsx-indent': 'off',
    indent: 'off',
    semi: 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/newline-after-import': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off', // Disable arrow-body-style rule
    'jsx-a11y/click-events-have-key-events': 'off', // Disable click-events-have-key-events rule
    'jsx-a11y/no-static-element-interactions': 'off', // Disable no-static-element-interactions rule
    indent: ['error', 2, { ignoredNodes: ['JSXElement'], SwitchCase: 1 }],
  },
}
