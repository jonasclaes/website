<template>
  <BaseLayout>
    <template v-slot:landing>
      <img
        src="../assets/selfie.jpeg"
        alt="Selfie of Jonas Claes"
        class="rounded-full max-h-60 lg:max-h-96 shadow-xl object-contain"
      />
      <div class="flex flex-col text-center sm:text-left">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">Jonas Claes</h1>
        <p class="text-xl md:text-2xl lg:text-3xl italic">
          Software, hardware and networking
        </p>
      </div>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "@/components/BaseLayout.vue";

export default defineComponent({
  name: "HomePage",
  title: "Home",
  components: { BaseLayout },
});
</script>
