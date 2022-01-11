<template>
  <StatisticsBlock>
    <StatisticItem
      :icon="['fas', 'stopwatch']"
      amount="16"
      text="uur gespendeerd"
    ></StatisticItem>
    <StatisticItem
      :icon="['fas', 'users']"
      amount="1"
      text="persoon"
    ></StatisticItem>
    <StatisticItem
      :icon="['fas', 'cogs']"
      amount="100%"
      text="geconfigureerd"
    ></StatisticItem>
  </StatisticsBlock>
  <div class="text-justify">
    <h2>Wat is de Digital Innovation Cloud Server?</h2>
    <p>
      De Digital Innovation cloud server is een professionele rack-server die
      onze richting (Digital Innovation), gedoneerd heeft gekregen. Met deze
      server zouden we graag applicaties draaien vanuit onze richting. Daarnaast
      dient deze server ook om test cases op te zetten en virtuele machines te
      draaien.
    </p>
    <br />
    <h2>Over de opdracht</h2>
    <p>
      Deze opdracht was vrij breed. De bedoeling was voornamelijk om een file
      sharing server op te zetten, om die reden hebben we er veel opslag in
      gestoken. Na wat denken en bespreken met Jochen, breidden we de scope uit
      zodat we hier virtuele machines op zouden kunnen draaien, dit heeft enkele
      voordelen. Zo kunnen studenten van Digital Innovation een eigen virtuele
      machine aanvragen om dingen op te testen of te tonen aan klanten.
      Daarnaast kunnen we met meerdere servers een cluster bouwen waarmee we
      high availability kunnen verkrijgen.
    </p>
    <br />
    <h2>Uitwerking</h2>
    <p>
      Ik ben begonnen met de server volledig schoon te maken en nieuwe koelpasta
      op de processoren te plaatsen. Daarna heb ik alle harddrive trays uit de
      server genomen, en nieuwe schijven in gestoken. Tijdens de eerste boot heb
      ik van deze schijven een RAID volume gemaakt. In totaal hebben we 6
      schijven, 4 hiervan zijn een RAID groep voor data, en 2 hiervan zijn een
      RAID 1 groep voor het besturingssysteem en snellere opslag aangezien deze
      2 schijven 10K SAS schijven zijn.
    </p>
    <p>
      Nadat de BIOS en RAID controller instellingen gedaan waren, heb ik Proxmox
      Community Edition geïnstalleerd op deze server met behulp van een
      USB-stick. Hierna heb ik nog wat testjes gedaan met Proxmox en clustering.
      Nadat ik alles werkend gekregen had heb ik Jochen ingelicht om de server
      te gaan plaatsen in het datacentrum.
    </p>
    <p>
      Hiervoor heb ik met Gunther Van Landeghem contact opgenomen en doorgegeven
      welke poorten we geopend zouden moeten hebben naar de server. Dit zou in
      principe enkel SSH moeten zijn, omdat we via een SSH-tunnel alle poorten
      kunnen bereiken. Als studenten een web service willen draaien, kunnen ze
      met Cloudflare een gratis Argon-tunnel opzetten, dit werkt van binnen naar
      buiten toe.
    </p>
    <p>
      Op de dag dat we de server geplaatst hebben in het datacentrum, heb ik nog
      wat configuratie gedaan en hebben we mogelijke IP ranges besproken.
      Daarnaast hebben we meteen Nextcloud geïnstalleerd zodat we onze eigen
      file sharing applicatie hebben.
    </p>
    <br />
    <h2>Contact</h2>
    <p>
      Indien u meer zou willen weten over dit project, aarzel dan niet om
      contact op te nemen met mij of Jochen Mariën op één van onderstaande
      wijzen.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
      <SocialsCardDark></SocialsCardDark>
      <CardDark
        name="Jochen Mariën"
        :links="[
          {
            icon: ['fa', 'envelope'],
            href: 'mailto:jochen.marien@thomasmore.be',
            text: 'jochen.marien@thomasmore.be',
          },
          {
            icon: ['fa', 'phone'],
            href: 'tel:+3214740581',
            text: '+32 14 74 05 81',
          },
        ]"
      >
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
import { useHead } from "@vueuse/head";

export default defineComponent({
  components: {
    CardDark,
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
            "De Digital Innovation cloud server is een professionele rack-server die onze richting (Digital Innovation), gedoneerd heeft gekregen. Met deze server zouden we graag applicaties draaien vanuit onze richting. Daarnaast dient deze server ook om test cases op te zetten en virtuele machines te draaien.",
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
