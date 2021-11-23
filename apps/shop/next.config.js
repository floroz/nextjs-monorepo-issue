const withTM = require("next-transpile-modules");
const { withPlugins } = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const modules = [
  "@tundra/web-common-ui-shared",
  "@tundra/web-common-ui-alert",
  "@tundra/web-common-ui-badge",
];

module.exports = withPlugins([withTM([...modules]), withBundleAnalyzer], {
  reactStrictMode: true,
});
