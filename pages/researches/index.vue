<template>

<div v-for="item in items">
    {{ item }}
</div> 

</template>
<script setup lang="ts">
import { items,  Research } from '@/data/research';
</script>
