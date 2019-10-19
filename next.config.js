// next.config.js
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";

module.exports = withCSS({
  /* config options here */
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? "" : "",
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: isProd ? "" : ""
  }
});
