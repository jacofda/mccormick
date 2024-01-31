<template>
  <div class="container mx-auto max-w-4xl">
    <div v-if="item" class="py-16 lg:py-20">
      <h1 class="font-body pt-5 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">{{ item?.title }}</h1>

      <div class="pt-8">
        <p class="font-body text-justify text-xl font-light text-primary">{{ item?.body }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { items, type Research } from "@/data/research";

const router = useRouter();
const item = computed(() => {
  const slug = router.currentRoute.value.params.slug as string;
  return items.find((i: Research) => i.slug === slug);
});

useSeoMeta({
  title: item.value?.title + "| Peter McCormick",
  description: "Peter McCormick researches",
});
</script>
