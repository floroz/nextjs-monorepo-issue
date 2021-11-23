const withTM = require("next-transpile-modules");
const { withPlugins } = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
  [withTM(["@tundra/web-common-ui"]), withBundleAnalyzer],
  {
    reactStrictMode: true,
  }
);
