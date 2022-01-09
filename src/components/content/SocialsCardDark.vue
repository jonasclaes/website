<template>
  <CardDark>
    <h3 class="text-lg font-semibold">Jonas Claes</h3>
    <p>
      <font-awesome-icon
        :icon="['fa', 'envelope']"
        fixed-width
        class="mr-2"
      ></font-awesome-icon
      ><a href="mailto:jonas@jonasclaes.be" class="text-blue-500 font-semibold"
        >jonas@jonasclaes.be</a
      >
    </p>
    <p>
      <font-awesome-icon
        :icon="['fa', 'phone']"
        fixed-width
        class="mr-2"
      ></font-awesome-icon
      ><a href="tel:+32484238902" class="text-blue-500 font-semibold"
        >+32 484 23 89 02</a
      >
    </p>
    <p>
      <font-awesome-icon
        :icon="['fa', 'globe']"
        fixed-width
        class="mr-2"
      ></font-awesome-icon
      ><a
        href="https://jonasclaes.be"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 font-semibold"
        >jonasclaes.be</a
      >
    </p>
    <p>
      <font-awesome-icon
        :icon="['fab', 'twitter']"
        fixed-width
        class="mr-2"
      ></font-awesome-icon
      ><a
        href="https://twitter.com/jonasclaesbe"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 font-semibold"
        >@jonasclaesbe</a
      >
    </p>
    <p>
      <font-awesome-icon
        :icon="['fab', 'github']"
        fixed-width
        class="mr-2"
      ></font-awesome-icon
      ><a
        href="https://github.com/jonasclaes"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 font-semibold"
        >@jonasclaes</a
      >
    </p>
    <p>
      <font-awesome-icon
        :icon="['fab', 'instagram']"
        fixed-width
        class="mr-2"
      ></font-awesome-icon
      ><a
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
