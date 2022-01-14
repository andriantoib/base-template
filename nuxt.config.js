export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "landing-template",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com/" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com/",
        crossorigin: "true",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/image",
    "@nuxtjs/style-resources",
    "@nuxtjs/imagemin",
    "@nuxtjs/google-fonts",
    "nuxt-purgecss",
    "@aceforth/nuxt-optimized-images",
  ],
  optimizedImages: {
    optimizedImages: true,
  },
  styleResources: {
    scss: ["./assets/variables/*.scss", "./assets/mixins/_mixins.scss"],
  },
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/robots",
    "@nuxtjs/component-cache",
    "nuxt-precompress",
    "nuxt-speedkit",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap", // PLACE THIS MODULE AT THE END OF THE ARRAY
  ],

  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "id",
        name: "Indonesia",
      },
      {
        code: "cn",
        name: "Mandarin",
      },
    ],
  },

  toast: {
    position: "top-right",
  },

  nuxtPrecompress: {
    enabled: true,
    report: false,
    test: /\.(js|css|html|txt|xml|svg)$/,
    gzip: {
      enabled: true,
      threshold: 10240,
      minRation: (0.8).toExponential,
      compressionOptions: { level: 9 },
    },
    brotli: {
      enabled: true,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRation: 0.8,
    },
  },

  speedkit: {
    detection: {
      performance: true,
      browserSupport: true,
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dc: 1200,
      },
      lighthouseDetectionByUserAgent: false,
    },
    componentAutoImport: false,
    componentPrefix: undefined,
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
