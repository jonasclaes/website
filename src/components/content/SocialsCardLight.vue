<template>
  <CardLight
    name="Jonas Claes"
    :links="[
      {
        icon: ['fa', 'envelope'],
        href: 'mailto:jonas@jonasclaes.be',
        text: 'jonas@jonasclaes.be',
      },
      {
        icon: ['fa', 'phone'],
        href: 'tel:+32484238902',
        text: '+32 484 23 89 02',
      },
      {
        icon: ['fa', 'globe'],
        href: 'https://jonasclaes.be',
        text: 'jonasclaes.be',
      },
      {
        icon: ['fab', 'twitter'],
        href: 'https://twitter.com/jonasclaesbe',
        text: '@jonasclaesbe',
      },
      {
        icon: ['fab', 'github'],
        href: 'https://github.com/jonasclaes',
        text: '@jonasclaes',
      },
      {
        icon: ['fab', 'instagram'],
        href: 'https://instagram.com/jonasclaes.be',
        text: '@jonasclaes.be',
      },
    ]"
  >
  </CardLight>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLight from "./CardLight.vue";

export default defineComponent({
  name: "SocialsCardLight",
  components: {
    CardLight,
  },
});
</script>
