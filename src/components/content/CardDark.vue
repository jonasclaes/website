<template>
  <div class="bg-black bg-opacity-30 p-4 rounded-md shadow-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardDark",
});
</script>
