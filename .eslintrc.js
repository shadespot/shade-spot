module.exports = {
  extends: "universe/native", // extend airbnb's JavaScript style guide: https://github.com/airbnb/javascript
  parser: "@typescript-eslint/parser", // allows us to parse the code with babel so that jsx code won"t be considered an error
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ["@babel", "@typescript-eslint"],
  rules: {
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-use-before-define": "off",
    "func-names": 0,
    "global-require": "off",
    semi: 1,
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
  },
};
