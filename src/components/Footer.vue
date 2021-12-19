<template>
  <div class="bg-gray-800 text-white">
    <div class="container mx-auto">
      <div class="max-w-6xl mx-auto p-4">
        <div class="grid grid-cols-2 gap-3">
          <div class="text-left">
            <p class="font-semibold">Sitemap</p>
            <div class="flex flex-col">
              <router-link to="/">Home</router-link>
              <router-link to="/projects">Projects</router-link>
            </div>
          </div>
          <div class="flex flex-col items-end justify-start">
            <p class="text-xl font-semibold">jonasclaes.be</p>
            <p>&copy; Copyright {{ "2021" }} - Jonas Claes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
