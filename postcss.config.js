module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("postcss-nested"),
    require("autoprefixer"),
    require("postcss-extend"),
    require("postcss-all-link-colors"),
    require("postcss-css-variables"),
    require("postcss-minimize"),
  ],
};
