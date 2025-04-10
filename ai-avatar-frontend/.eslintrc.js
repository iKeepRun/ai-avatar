module.exports = {
  extends: ['taro/react', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
} 