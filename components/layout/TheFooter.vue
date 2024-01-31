<template>
  <div class="container mx-8">
    <div class="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
      <div class="mr-auto flex flex-col items-center sm:flex-row">
        <a href="/" class="mr-auto sm:mr-6">
          <img src="/assets/img/logo.svg" alt="logo" />
        </a>
        <p class="font-body pt-5 font-light text-primary sm:pt-0">
          ©2014 - {{ new Date().getFullYear() }} McCormick Lab.
        </p>
      </div>
      <div class="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
        <a href="https://www.linkedin.com/in/peter-mccormick-74556120/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="h-12 w-12 pl-5 text-primary transition-colors hover:text-secondary">
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
