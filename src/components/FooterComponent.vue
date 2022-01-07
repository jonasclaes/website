<template>
  <div class="bg-gray-800 text-white">
    <div class="container mx-auto">
      <div class="mx-auto p-4">
        <div
          class="flex justify-between items-center font-semibold text-sm md:text-base"
        >
          <div>
            <p class="text-left">jonasclaes.be</p>
          </div>
          <div>
            <p class="text-right">&copy; Copyright {{ year }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  setup() {
    const date = new Date();
    const year = date.getFullYear();

    return {
      year,
    };
  },
});
</script>
