module.exports = function s(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            components: "./src/components",
            constants: "./src/constants",
            navigation: "./src/navigation",
            screens: "./src/screens",
          },
        },
      ],
    ],
  };
};
