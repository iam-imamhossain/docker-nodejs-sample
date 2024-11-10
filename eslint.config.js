module.exports = {
    extends: ["eslint:recommended"],
    env: {
      node: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      // Your custom rules can go here
      "no-console": "warn",
    },
  };
  