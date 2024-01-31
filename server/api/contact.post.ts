export default defineEventHandler(async (event) => {
  const { recaptchaToken } = await readBody(event);
  // console.log(process.env);
  // const config = useRuntimeConfig(event);
  // console.log(config);
  // console.log(event.context.nitro.runtimeConfig);

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NITRO_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: "POST",
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
});
