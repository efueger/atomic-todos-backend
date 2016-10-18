module.exports = {
  "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "globals": {
      "path": true,
      "chalk": true,
      "sinon": true,
      "expect": true,
      "assert": true,
      "supertest": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "eqeqeq": [2],
        "arrow-parens": [2, "as-needed"],
        "no-unused-vars": [2, { "argsIgnorePattern": "next" }],
        "comma-dangle": [2, "never"],
        "indent": ["error", 2],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
