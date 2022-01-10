<template>
  <div class="mb-16 bg-black bg-opacity-30 rounded-md text-center pt-8">
    <h2 class="text-xl font-semibold">Resultaten</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 p-8">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatisticsBlock",
});
</script>
