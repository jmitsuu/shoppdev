import eslintPluginPrettier from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import prettierPlugin from "eslint-plugin-prettier";
import parser from "@typescript-eslint/parser"; // Importando o parser corretamente

export default [
  {
    ignores: ["node_modules/", "dist/"], // Arquivos ignorados
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Apenas arquivos dentro de src
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: parser, // Usando o parser correto
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Regras do Prettier como erro
      "react/react-in-jsx-scope": "off", // React 18 não precisa do React em escopo
      "react/prop-types": "off", // Desabilitar prop-types
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      tailwindcss: {
        groupByResponsive: true,
        officialSorting: true,
      },
    },
  },
];
