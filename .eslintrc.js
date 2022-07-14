/*
   - Rules in ESLint.
    1. "off" or 0 -> tắt quy tắc.
    2. 'warn" or 1 -> bật quy tắc nhưng cảnh báo (Không ảnh hưởng đến e code).
    3. "error" or 2 -> Bật quy  như 1 lỗi.
   Lưu ý:
    1. import thêm: npm install --save-dev eslint-plugin-simple-import-sort
*/

module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:storybook/recommended",
      "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint",
      "simple-import-sort",
      "import",
      "react-hooks"
  ],
  "rules": {
    "no-undef": "off",
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "@typescript-eslint/no-empty-interface": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": ["error"],
    "import/no-duplicates": ["error", {
      "considerQueryString": true
    }],
    "@typescript-eslint/no-empty-function": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};