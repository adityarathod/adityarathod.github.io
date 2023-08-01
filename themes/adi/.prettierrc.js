module.exports = {
    singleQuote: true,
    plugins: [require('prettier-plugin-tailwindcss')],
    overrides: [
      {
        files: ["*.html"],
        options: {
          parser: "go-template",
        },
      },
    ],
  };
  