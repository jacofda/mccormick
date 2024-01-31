<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between py-6 lg:py-10">
      <NuxtLink to="/" class="flex items-center">
        <span href="/" class="mr-2">
          <img src="assets/img/logo.svg" alt="logo" />
        </span>
        <p class="font-body hidden text-2xl font-bold text-primary lg:block">John Doe</p>
      </NuxtLink>
      <div class="flex items-center lg:hidden">
        <svg
          width="24"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          @click="isMobileMenuOpen = true"
          class="fill-current text-primary">
          <g fill-rule="evenodd">
            <rect width="24" height="3" rx="1.5" />
            <rect x="8" y="6" width="16" height="3" rx="1.5" />
            <rect x="4" y="12" width="20" height="3" rx="1.5" />
          </g>
        </svg>
      </div>
      <div class="hidden lg:block">
        <ul class="flex items-center">
          <li class="group relative mb-1 mr-6">
            <div
              class="absolute bottom-0 left-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
            <NuxtLink
              to="/"
              class="font-body relative z-30 block px-2 text-lg font-medium text-primary transition-colors group-hover:text-green">
              Home
            </NuxtLink>
          </li>

          <li class="group relative mb-1 mr-6">
            <div
              class="absolute bottom-0 left-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
            <NuxtLink
              to="/researches"
              class="font-body relative z-30 block px-2 text-lg font-medium text-primary transition-colors group-hover:text-green">
              Research
            </NuxtLink>
          </li>

          <li class="group relative mb-1 mr-6">
            <div
              class="absolute bottom-0 left-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
            <NuxtLink
              to="/publications"
              class="font-body relative z-30 block px-2 text-lg font-medium text-primary transition-colors group-hover:text-green">
              Publications
            </NuxtLink>
          </li>

          <li class="group relative mb-1 mr-6">
            <div
              class="absolute bottom-0 left-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
            <NuxtLink
              to="/contact"
              class="font-body relative z-30 block px-2 text-lg font-medium text-primary transition-colors group-hover:text-green">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isMobileMenuOpen = ref(false);
</script>
