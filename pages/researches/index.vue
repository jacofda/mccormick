<template>
  <div class="container mx-auto max-w-3xl">
    <div class="py-16 lg:py-20">
      <h1 class="font-body pt-5 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">Research</h1>

      <div class="pt-3 sm:w-3/4">
        <p class="font-body text-xl font-light text-primary">Our field of study and research</p>
      </div>

      <div v-for="item in items" class="pt-8 lg:pt-12">
        <div class="border-b border-grey-lighter pb-8">
          <span class="font-body mb-4 inline-block rounded-full bg-green-light px-2 py-1 text-sm text-green">
            {{ item.tag }}
          </span>
          <NuxtLink
            :to="'researches/' + item.slug"
            class="font-body block text-lg font-semibold text-primary transition-colors hover:text-green">
            {{ item.title }}
          </NuxtLink>
          <div class="flex items-center pt-4">
            <p class="font-body pr-2 font-light text-primary">{{ item.body.slice(0, 110) }}...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { items, type Research } from "@/data/research";

useSeoMeta({
  title: "Peter McCormick researches | UOL",
  description: "Peter McCormick researches",
});
</script>
