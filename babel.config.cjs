module.exports = {
  presets: [
    "@babel/preset-env", // Transpile modern JavaScript
    [
      "@babel/preset-react", // Transpile JSX
      {
        runtime: "automatic", // Use React 17's new JSX transform
      },
    ],
    "@babel/preset-typescript", // Transpile TypeScript
  ],
};
