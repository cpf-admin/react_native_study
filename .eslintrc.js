module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true,
        "react-native/react-native": true
    },
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
        "'graphql'",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "react/prop-types": ["error", { "ignore": ["navigation"] }],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        // "react-native/no-inline-styles": 2,
        // "react-native/no-color-literals": 2,
        "react-native/no-raw-text": 2,
<<<<<<< HEAD
    },
    settings: {
        react: {
            version: require('./package.json').dependencies.react,
        },
    },
=======
        "no-console": "off",
    }
>>>>>>> a9e2393b9f493aabd69be2ca14df999b44ca6f1a
};