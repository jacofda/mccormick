const nitro = {
  preset: "cloudflare-pages",
  compressPublicAssets: true,
  esbuild: {
    options: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
  },
};

export default nitro;
