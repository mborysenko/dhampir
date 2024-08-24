import * as unusedImports from "eslint-plugin-unused-imports";
import * as tsParser from "@typescript-eslint/parser";
import * as js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
), {
    plugins: {
        "unused-imports": unusedImports,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    settings: {
        react: {
            version: "detect",
        },

        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],

        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "react/display-name": "off",

        "no-console": ["error", {
            allow: ["warn", "error"],
        }],

        "unused-imports/no-unused-imports": "error",

        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "no-debugger": "error",
        "no-alert": "error",
        "no-empty": "error",
        "no-multiple-empty-lines": "error",
        "no-extra-semi": "error",
        "no-promise-executor-return": "error",
        "no-unreachable-loop": "error",
        "no-constructor-return": "error",
        "no-eval": "error",
        "no-iterator": "error",
        "no-proto": "error",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
    },
}];
