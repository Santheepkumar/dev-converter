export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "darkv2",
    values: [
      { name: "darkv2", value: "#181818" },
      { name: "lightv2", value: "#fff" },
    ],
  },
};