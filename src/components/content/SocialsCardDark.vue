<template>
  <CardDark>
    <h3 class="text-lg font-semibold">Jonas Claes</h3>
    <p>
      <font-awesome-icon :icon="['fa', 'envelope']" class="mr-2" /><a
        href="mailto:jonas@jonasclaes.be"
        class="text-blue-500 font-semibold"
        >jonas@jonasclaes.be</a
      >
    </p>
    <p>
      <font-awesome-icon :icon="['fa', 'phone']" class="mr-2" /><a
        href="tel:+32484238902"
        class="text-blue-500 font-semibold"
        >+32 484 23 89 02</a
      >
    </p>
    <p>
      <font-awesome-icon :icon="['fa', 'globe']" class="mr-2" /><a
        href="https://jonasclaes.be"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 font-semibold"
        >jonasclaes.be</a
      >
    </p>
    <p>
      <font-awesome-icon :icon="['fab', 'twitter']" class="mr-2" /><a
        href="https://twitter.com/jonasclaesbe"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 font-semibold"
        >@jonasclaesbe</a
      >
    </p>
    <p>
      <font-awesome-icon :icon="['fab', 'github']" class="mr-2" /><a
        href="https://github.com/jonasclaes"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 font-semibold"
        >@jonasclaes</a
      >
    </p>
    <p>
      <font-awesome-icon :icon="['fab', 'instagram']" class="mr-2" /><a
        href="https://instagram.com/jonasclaes.be"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 font-semibold"
        >@jonasclaes.be</a
      >
    </p>
  </CardDark>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardDark from "./CardDark.vue";

export default defineComponent({
  name: "SocialsCardDark",
  components: { CardDark },
});
</script>
