<template>
  <StatisticsBlock>
    <StatisticItem
      :icon="['fas', 'code-branch']"
      amount="100%"
      text="open-source"
    ></StatisticItem>
    <StatisticItem
      :icon="['fas', 'users']"
      amount="1"
      text="persoon"
    ></StatisticItem>
    <StatisticItem
      :icon="['fab', 'discord']"
      amount="1"
      text="Discord bot"
    ></StatisticItem>
  </StatisticsBlock>
  <div class="text-justify">
    <h2>Wat is de Friendship Bubble Discord Bot?</h2>
    <p>
      De Friendship Bubble is een community op Discord die zich richt tot het
      verbinden van mensen in moeilijke tijden. Deze community is zo inclusief
      mogelijk, dus iedereen is er welkom en wordt er geaccepteerd.
    </p>
    <p>
      Om al deze mensen te beheren (en te entertainen), heb ik een Discord bot
      gebouwd die alle taken aan kan. De bot is vernoemd naar het huisdier van
      de eigenaar, namelijk: <strong>Mira de kat</strong>.
    </p>
    <p>
      Deze bot doet alles. Het verwelkomen van nieuwe mensen, het beheren van de
      rollen die mensen uitkiezen, leuke spelletjes spelen. De bot heeft een
      aantal commando's waarmee mensen aan hun zorg denken, mensen opfleurt....
      Dit is allemaal makkelijk in te stellen via een op maat gemaakt admin
      paneel, zie
      <router-link to="/projects/friendship-bubble-discord-bot-website"
        >Friendship Bubble - Discord Bot Website</router-link
      >.
    </p>
    <br />
    <h2>Waarom een Discord bot?</h2>
    <p>
      Om een community te beheren heb je bepaalde tools nodig. Lauri Giepmans,
      de oprichter van de Friendship Bubble, deed heel veel dingen met de hand,
      wat uiteindelijk een enorme taak werd. Ze was dan ook niet meer bezig met
      mensen maar met het beheer ervan, wat uiteindelijk niet haar bedoeling
      was.
    </p>
    <br />
    <h2>Samenwerking</h2>
    <p>
      Hieronder kan u een fragment lezen dat Lauri heeft geschreven over onze
      samenwerking.
    </p>
    <blockquote>
      <p>
        Ik ben zelf enorm slecht met technologie en wanneer je een Discord
        server met meer dan honderd leden beheert, is dat erg onhandig. Ik was
        alles nog handmatig aan het doen en daardoor was het enorm veel werk.
        Toen Jonas een kijkje kwam nemen bleek dat zo'n 95% van de tijd die ik
        in de server stopte geautomatiseerd kon worden waardoor ik mijn handen
        vrij had voor de leuke dingen. Daarbij had ik totaal geen idee wat er
        mogelijk is met bots dus dat heeft hij enorm rustig en leek-vriendelijk
        uitgelegd. Mijn server is een community van mensen die veel aan hun
        mentale en lichamelijke gezondheid werkt en hij heeft een bot gemaakt
        die allerlei tips geeft en opbeurende dingen zegt.
      </p>
      <p>
        Soms heb ik een idee voor een nieuw commando voor de bot en dan denk ik
        “nou dat zou wel niet kunnen, dat is zo specifiek” en elke keer zegt hij
        terug: Geef me een paar dagen, dan is het geregeld! Verder heeft hij ook
        een speciale website gemaakt waarin ik zelf de bot kan besturen op een
        manier die voor mij overzichtelijk is. Alle code enzo snap ik niks van,
        dus hij heeft er veel tijd in gestopt om de website zo te maken dat ik
        begrijp wat ik doe en wat de gevolgen daarvan zijn.
      </p>
      <p>
        Kortom; als je geen verstand hebt van IT en denkt dat samenwerken met
        een IT'er stressvol is omdat je er niks van snapt, bij Jonas is dat niet
        het geval.
      </p>
      <span>- Lauri Giepmans</span>
    </blockquote>
    <br />
    <h2>Contact</h2>
    <p>
      Indien u meer zou willen weten over dit project, aarzel dan niet om
      contact op te nemen met mij of Lauri Giepmans op één van onderstaande
      wijzen.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
      <SocialsCardDark></SocialsCardDark>
      <CardDark>
        <h3>Lauri Giepmans</h3>
        <h4>Persoonlijk</h4>
        <p>
          <font-awesome-icon
            :icon="['fa', 'envelope']"
            fixed-width
            class="mr-2"
          ></font-awesome-icon>
          <a href="mailto:contact@laurigiepmans.nl">contact@laurigiepmans.nl</a>
        </p>
        <p>
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            fixed-width
            class="mr-2"
          ></font-awesome-icon>
          <a
            href="https://instagram.com/laurigiepmans"
            target="_blank"
            rel="noopener noreferrer"
            >@laurigiepmans</a
          >
        </p>
        <p>
          <font-awesome-icon
            :icon="['fa', 'globe']"
            fixed-width
            class="mr-2"
          ></font-awesome-icon>
          <a
            href="https://www.laurigiepmans.nl"
            target="_blank"
            rel="noopener noreferrer"
            >laurigiepmans.nl</a
          >
        </p>
        <h4>Friendship Bubble</h4>
        <p>
          <font-awesome-icon
            :icon="['fa', 'globe']"
            fixed-width
            class="mr-2"
          ></font-awesome-icon>
          <a
            href="https://www.laurigiepmans.nl/diensten/friendship-bubble/"
            target="_blank"
            rel="noopener noreferrer"
            >laurigiepmans.nl/diensten/friendship-bubble</a
          >
        </p>
        <p>
          <font-awesome-icon
            :icon="['fa', 'globe']"
            fixed-width
            class="mr-2"
          ></font-awesome-icon>
          <a
            href="https://friendshipbubble.nl"
            target="_blank"
            rel="noopener noreferrer"
            >friendshipbubble.nl</a
          >
        </p>
        <p>
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            fixed-width
            class="mr-2"
          ></font-awesome-icon>
          <a
            href="https://www.instagram.com/friendshipbubble"
            target="_blank"
            rel="noopener noreferrer"
            >@friendshipbubble</a
          >
        </p>
      </CardDark>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardDark from "@/components/content/CardDark.vue";
import SocialsCardDark from "@/components/content/SocialsCardDark.vue";
import StatisticsBlock from "@/components/content/StatisticsBlock.vue";
import StatisticItem from "@/components/content/StatisticItem.vue";

export default defineComponent({
  components: {
    CardDark,
    SocialsCardDark,
    StatisticsBlock,
    StatisticItem,
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
