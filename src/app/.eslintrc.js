module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "writable",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  ignorePatterns: ["public/**/*.*", ".eslintrc.js", "next.config.js"],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-hooks", "react", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-console": "warn",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
