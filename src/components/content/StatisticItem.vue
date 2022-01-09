<template>
  <div>
    <font-awesome-icon :icon="icon" size="6x"></font-awesome-icon>
    <span class="block mt-2 text-xl font-bold">{{ amount }}</span>
    <p class="font-semibold">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatisticItem",
  props: {
    icon: {
      type: Array,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
