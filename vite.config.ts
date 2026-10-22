import { defineConfig, lazyPlugins, transformWithOxc } from "vite-plus";

export default defineConfig({
  check: { fmt: false },
  lint: {
    plugins: ["oxc", "typescript", "unicorn", "react"],
    categories: {
      correctness: "warn",
    },
    env: {
      builtin: true,
    },
    ignorePatterns: ["dist/**", "node_modules/**", "build/**", ".review-pr168/**"],
    rules: {
      "constructor-super": "error",
      "for-direction": "error",
      "getter-return": "error",
      "no-async-promise-executor": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-new-native-nonconstructor": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      "no-setter-return": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-unassigned-vars": "error",
      "no-undef": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": "error",
      "no-useless-assignment": "error",
      "no-useless-backreference": "error",
      "no-useless-catch": "error",
      "no-useless-escape": "error",
      "no-with": "error",
      "preserve-caught-error": "error",
      "require-yield": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    overrides: [
      {
        files: ["src/**/*.{js,jsx}", "tests/**/*.test.jsx"],
        rules: {
          "no-unused-vars": [
            "error",
            {
              argsIgnorePattern: "^_",
              varsIgnorePattern: "^_",
            },
          ],
          "no-console": [
            "warn",
            {
              allow: ["warn", "error"],
            },
          ],
          "no-var": "error",
          "prefer-const": "error",
          "react/rules-of-hooks": "error",
          "react/exhaustive-deps": "warn",
        },
        env: {
          browser: true,
          es2024: true,
        },
      },
    ],
    options: {
      denyWarnings: true,
      typeAware: false,
      typeCheck: false,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  plugins: lazyPlugins(() => [
    {
      name: "jsx-in-js",
      enforce: "pre",
      transform(code, id) {
        if (/[/]src[/].*\.js$/.test(id))
          return transformWithOxc(code, id, { lang: "jsx", jsx: { runtime: "automatic" } });
      },
    },
  ]),
  test: { environment: "jsdom", include: ["tests/**/*.test.jsx"] },
  pack: {
    entry: { index: "src/lib/index.js" },
    format: ["esm"],
    platform: "neutral",
    outDir: "dist",
    target: "es2020",
    dts: false,
    sourcemap: true,
    minify: false,
    copy: [{ from: "src/lib/assets", to: "dist" }],
    inputOptions: { moduleTypes: { ".js": "jsx" } },
    plugins:
      process.env.VISUALIZER_OPEN === "true"
        ? [
            (await import("rollup-plugin-visualizer")).visualizer({
              open: true,
              filename: "stats.html",
              gzipSize: true,
              brotliSize: true,
            }),
          ]
        : [],
  },
});
