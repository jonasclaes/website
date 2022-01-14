<template>
  <StatisticsBlock>
    <StatisticItem
      :icon="['fas', 'stopwatch']"
      amount="115"
      text="uur gespendeerd"
    ></StatisticItem>
    <StatisticItem
      :icon="['fas', 'users']"
      amount="1"
      text="persoon"
    ></StatisticItem>
    <StatisticItem
      :icon="['fab', 'vuejs']"
      amount="Vue 3"
      text="powered"
    ></StatisticItem>
  </StatisticsBlock>
  <div class="text-justify">
    <h2>Tech stack</h2>
    <p>
      Deze website is volledig gebouwd met Vue 3 en Tailwind CSS. Daarnaast is
      deze site ook installeerbaar als PWA en wordt alle content lokaal
      gecached.
    </p>
    <p>
      Daarnaast worden alle projecten dynamisch ingeladen, zo wordt de bundle
      size klein gehouden en de laadtijden snel.
    </p>
    <br />
    <h2>Hosting</h2>
    <p>
      De site wordt gehost door Netlify en wordt automatisch gebuild wanneer er
      een nieuwe commit is op de master branch op GitHub.
    </p>
    <br />
    <h2>Contact</h2>
    <p>
      Indien u meer zou willen weten over dit project, aarzel dan niet om
      contact op te nemen met mij op één van onderstaande wijzen.
    </p>
    <div class="grid grid-cols-1 gap-3 items-start">
      <SocialsCardDark></SocialsCardDark>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SocialsCardDark from "@/components/content/SocialsCardDark.vue";
import StatisticsBlock from "@/components/content/StatisticsBlock.vue";
import StatisticItem from "@/components/content/StatisticItem.vue";
import { useHead } from "@vueuse/head";

export default defineComponent({
  components: {
    SocialsCardDark,
    StatisticsBlock,
    StatisticItem,
  },
  setup() {
    useHead({
      meta: [
        {
          name: "author",
          content: "Jonas Claes",
        },
        {
          name: "description",
          content:
            "Het is een platform om documentatie in op te slaan en te beheren. Daarnaast is het ook mogelijk om deze gemakkelijk te delen met de klant. Voor de klant is het makkelijk om wijzigingen door te voeren aan de documentatie mocht er iets veranderen. Op die manier raakt de documentatie nooit verloren en is er meteen een grote besparing qua papierverbruik.",
        },
      ],
    });
  },
});
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-xl font-semibold;
}

h3 {
  @apply text-lg font-semibold;
}

h4 {
  @apply font-semibold;
}

a {
  @apply text-blue-500 font-semibold;
}

blockquote {
  @apply bg-black bg-opacity-20 border-l-8 border-black border-opacity-40 p-4;
}

blockquote span {
  @apply block font-semibold mt-4;
}
</style>
