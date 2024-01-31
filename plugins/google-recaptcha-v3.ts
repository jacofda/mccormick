import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  const siteKey = nuxtApp.$config.public.recaptcha?.siteKey || "";
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey,
    loaderOptions: {
      useRecaptchaNet: false,
      autoHideBadge: true,
    },
  });
});
