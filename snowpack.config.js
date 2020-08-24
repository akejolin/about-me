module.exports = {
  mount: {
    public: "/",
    src: "/_dist_"
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      { "cmd": "tsc --noEmit", "watch": "$1 --watch" }
    ],
    ["snowpack-plugin-baseurl-handler", {
      exts: [".html", ".js", ".jsx", ".css"],
      baseUrl: '/about-me',
    }]
  ],
  installOptions: {
    "installTypes": true
  }
}
