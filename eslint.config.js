import { fileURLToPath } from "node:url";
import path from "node:path";

import "dotenv/config";
import tseslint from "typescript-eslint";
import reactX from "eslint-plugin-react-x";
import reactDOM from "eslint-plugin-react-dom";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const useStrictTyping = true;
const useStrictTyping = process.env.STRICT_TYPING === "true";

const baseRules = {
  ...(reactX.configs.recommended?.rules ?? {}),
};

if (useStrictTyping) {
  Object.assign(baseRules, reactDOM.configs.recommended?.rules ?? {});
  baseRules["react-dom/no-missing-button-type"] = "warn";
} else {
  baseRules["react-dom/no-missing-button-type"] = "off";
}

const baseConfig = {
  files: ["**/*.{ts,tsx}"],
  plugins: {
    "react-x": reactX,
    "react-dom": reactDOM,
  },
  rules: baseRules,
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      ...(useStrictTyping && {
        project: path.resolve(__dirname, "tsconfig.app.json"),
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
      }),
    },
  },
  extends: [],
};

export default tseslint.config([baseConfig]);
