<template>
  <StatisticsBlock>
    <StatisticItem
      :icon="['fa', 'users']"
      amount="2"
      text="personen"
    ></StatisticItem>
    <StatisticItem
      :icon="['fa', 'award']"
      amount="1"
      text="prijs gewonnen"
    ></StatisticItem>
    <StatisticItem
      :icon="['fa', 'box']"
      amount="1"
      text="all-in-one oplossing"
    ></StatisticItem>
  </StatisticsBlock>
  <div class="text-justify">
    <h2>Wat is de datalogging voor Watertechniek Teunissen?</h2>
    <p>
      De datalogging is een vervanging van een oud instrument, met nieuwe,
      moderne technologieën. Watertechniek Teunissen specialiseert zich in
      pomptechniek en piping, ook herstellen ze pompen. Nadat een pomp hersteld
      was werd deze getest met behulp van een analoge debietmeter en een analoge
      drukmeter. Dit is vervangen door een nieuw buizensysteem met een digitale
      debietmeter en een digital drukmeter, verbonden met een PLC-sturing en een
      MiniPC.
    </p>
    <br />
    <h2>Over de opdracht</h2>
    <p>
      Watertechniek Teunissen had deze opdracht beschikbaar en ik heb deze
      gekozen als eindwerk voor mijn middelbare school. Het fysieke gedeelte was
      al gebouwd, het software gedeelte ontbrak nog volledig.
    </p>
    <br />
    <h2>Uitwerking</h2>
    <p>
      Allereerst heb ik samen met een leerkracht (Benny Kox), contact opgenomen
      over dit project. Ik heb met hem samengewerkt om dit project tot een
      succesvol einde te brengen. Benny Kox heeft de PLC-sturing geprogrammeerd
      samen met mij. De desbetreffende PLC is een S7-1200 reeks PLC van Siemens.
    </p>
    <p>
      Daarnaast heb ik een lijst met onderdelen gemaakt die we nodig zouden
      hebben. Op die lijst stond onderandere een Intel NUC, dit is een kleine en
      compacte mini-PC. Daarnaast stonden er ook een aantal toebehoren op deze
      lijst zoals een monitor, toetsenbord, muis en Ethernet kabel. De Ethernet
      kabel is gebruikt om de PLC met de mini-PC te verbinden.
    </p>
    <p>
      Ik heb met Node.js, PostgreSQL, ExpressJS, Socket.io en Bootstrap een
      webapp gemaakt die op de mini-PC draait. De technieker kan dan met een
      muisklik de logging starten, die zal wachten tot de PLC de pomp aanstuurt,
      en ondertussen metingen nemen. Wanneer de PLC de pomp uitschakelt en de
      cyclus beëindigd is, zal deze stoppen en de resultaten verwerken. Enkele
      seconden later krijgt de technieker een pagina te zien met informatie over
      de cyclus en de mogelijkheid om een grafiek af te drukken of een CSV-file
      met de ruwe data te exporteren.
    </p>
    <br />
    <h2>
      <font-awesome-icon :icon="['fa', 'award']"></font-awesome-icon> Award
    </h2>
    <p>
      Dit project heeft ook een award gewonnen die Stad Lommel uitreikte. Deze
      award was "Beste eindwerk van 2020". Het was voor mij een hele eer om deze
      award te krijgen. Daarnaast heb ik bij deze award nog een cadeaubon
      gekregen voor de Standaard Boekhandel waarmee ik uiteindelijk het boek
      "The C++ Programming Language" door Bjarne Stroustrup gekocht heb.
    </p>
    <br />
    <h2>Contact</h2>
    <p>
      Indien u meer zou willen weten over dit project, aarzel dan niet om
      contact op te nemen met mij op één van onderstaande wijzen.
    </p>
    <div class="grid grid-cols-1 gap-3 items-start">
      <SocialsCardLight></SocialsCardLight>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsBlock from "@/components/content/StatisticsBlock.vue";
import StatisticItem from "@/components/content/StatisticItem.vue";
import SocialsCardLight from "@/components/content/SocialsCardLight.vue";

export default defineComponent({
  components: {
    StatisticsBlock,
    StatisticItem,
    SocialsCardLight,
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
