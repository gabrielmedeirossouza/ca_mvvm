module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "import",
    "sort-class-members"
  ],
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "import/prefer-default-export": "off",
    "unicorn/prefer-module": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "newline-before-return": "error",
    "indent": ["error", 2],
    "padded-blocks": ["error", "never"],
    "brace-style": ["error", "1tbs"],
    "no-irregular-whitespace": ["error", { "skipComments": true }],
    "react/react-in-jsx-scope": "off",
    "no-trailing-spaces": "error",
    "@typescript-eslint/ban-types": "off",
    "eol-last": "error",
    "unicorn/no-array-for-each": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "object-curly-spacing": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "comma-spacing": "error",
    "@typescript-eslint/no-unused-expressions": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/numeric-separators-style": "off",
    "max-len": ["error", { "code": 120 }],
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/filename-case": [
      "error",
      {
        "case": "kebabCase"
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "off"
        }
      }
    ],
    "sort-class-members/sort-class-members": [
      2,
      {
        "order": [
          "[static-properties]",
          "[properties]",
          "[conventional-private-properties]",
          "constructor",
          "[static-methods]",
          "[methods]",
          "[conventional-private-methods]"
        ],
        "accessorPairPositioning": "getThenSet"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "classMethod",
        "format": ["PascalCase"],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow"
      },
      {
        "selector": ["classMethod"],
        "format": ["PascalCase"],
        "modifiers": ["private"],
        "prefix": ["_"]
      },
      {
        "selector": ["classProperty"],
        "format": ["camelCase"],
        "modifiers": ["private"],
        "prefix": ["_"]
      },
      {
        "selector": ["classProperty"],
        "format": ["camelCase"],
        "modifiers": ["protected"],
        "prefix": ["_"]
      }
    ]
  }
};
