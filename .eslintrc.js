module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', // permite uso de log
    'class-methods-use-this': 'off', // permite uso de classes sem "this"
    'import/first': 'off', // permite inserir informações antes/depois dos imports
    'no-param-reassign': 'off', // permite reatribuição de parametros de função
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'max-len': 'off',
    camelcase: 'off',
  },
};
