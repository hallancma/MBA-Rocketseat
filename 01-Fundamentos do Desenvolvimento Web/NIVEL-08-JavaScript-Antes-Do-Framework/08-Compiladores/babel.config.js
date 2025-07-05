// babel.config.js
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "64",
        safari: "11",
      },
    },
  ],
];
module.exports = { presets };
