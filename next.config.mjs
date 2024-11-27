const config = {
  reactStrictMode: true,
  output: "export",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.inline/,
      type: "asset/source",
    })

    return config;
  }
};

export default config;
