<template>
  <form @submit.prevent="handleSubmit">
    <!-- Your form fields go here -->
    <!-- Submit button with an onclick event to trigger reCAPTCHA validation -->
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts" setup>
import { useReCaptcha } from "vue-recaptcha-v3";
const recaptchaInstance = useReCaptcha();
const recaptchaToken = ref("");

const recaptcha = async () => {
  // optional you can await for the reCaptcha load
  await recaptchaInstance?.recaptchaLoaded();
  // get the token, a custom action could be added as argument to the method
  return await recaptchaInstance?.executeRecaptcha("message");
};

onMounted(async () => {
  const token = await recaptcha();
  if (token) {
    recaptchaToken.value = token;
  }
});

const handleSubmit = async () => {
  const { data } = await useFetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recaptchaToken: recaptchaToken.value,
    }),
  });

  if (data.value) {
    console.log(data.value);
  }
};
</script>
