module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-syntax-dynamic-import"],
};
