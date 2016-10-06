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
        "indent": [
            "error",
            2
        ],
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
