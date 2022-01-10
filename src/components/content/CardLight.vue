<template>
  <div class="bg-black bg-opacity-30 p-4 rounded-md">
    <h3>{{ name }}</h3>
    <p v-for="link in links" :key="link.text">
      <font-awesome-icon
        :icon="link.icon"
        fixed-width
        class="mr-2"
      ></font-awesome-icon>
      <a :href="link.href" target="_blank" rel="noopener noreferrer">{{
        link.text
      }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Link = {
  icon: string[];
  href: string;
  text: string;
};

type Links = Link[];

export default defineComponent({
  name: "CardLight",
  props: {
    name: {
      type: String,
      required: true,
    },
    links: {
      type: Array as PropType<Links>,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
h3 {
  @apply text-lg font-semibold;
}

a {
  @apply text-blue-300 font-semibold;
}
</style>
