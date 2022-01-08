<template>
  <div class="text-justify">
    <h2>Wat is het smart documentation system?</h2>
    <p>
      Het is een platform om documentatie in op te slaan en te beheren.
      Daarnaast is het ook mogelijk om deze gemakkelijk te delen met de klant.
      Voor de klant is het makkelijk om wijzigingen door te voeren aan de
      documentatie mocht er iets veranderen. Op die manier raakt de documentatie
      nooit verloren en is er meteen een grote besparing qua papierverbruik.
    </p>
    <br />
    <h2>Over de opdracht</h2>
    <p>
      <a
        href="https://deltatechnics.be"
        target="_blank"
        rel="noopener noreferrer"
        >Delta Technics</a
      >, gelegen te Heist-op-den-berg, bood het project smart documentation
      system aan. Ik heb in september dit project gekozen uit de lijst met
      beschikbare projecten en meteen het eerste contact gelegd. Na een korte
      conversatie heb ik een vergadering ingepland met Delta Technics om de
      inhoud van het project te bespreken.
    </p>
    <p>
      Tijdens deze meeting hebben we besproken wat Delta Technics hun visie is
      over het smart documentation system. Hier kwam uit dat ze een web app
      wouden hebben om hun papieren documentatie op te uploaden en te beheren.
      Ze wouden ook graag werken met een QR-code, die de klant dan kan inscannen
      en wijzigingen kan doorgeven.
    </p>
    <p>
      De insteek was dat dit zo gemakkelijk mogelijk moest zijn, aangezien
      techniekers het niet fijn vinden om een uur bezig te zijn met 1 kleine
      wijziging door te geven.
    </p>
    <br />
    <h2>Tech stack</h2>
    <p>
      De mensen van Delta Technics hadden geen voorkeur qua tech stack. Dit gaf
      mij dus vrij veel opties waardoor ik vrijspel had in deze keuze. Kort
      daarna heb ik de keuze gemaakt om met Laravel 8 te werken, in combinatie
      met de Blade template taal en Tailwind CSS voor de styling.
    </p>
    <br />
    <h2>Team</h2>
    <p>
      Toen ik duidelijk wist wat de opdracht was en waarmee we gingen werken,
      kon ik mijn team beginnen samenstellen. Ik heb toen gevraagd aan Thierry
      Eeman, een voormalig leraar die Toegepaste Informatica is gaan studeren,
      of hij mee wou werken aan dit project, waar hij met plezier op instemde.
    </p>
    <br />
    <h2>Uitwerking</h2>
    <p>
      Allereerst hebben we een projectplanning gemaakt en een Trello-board met
      alle doelstellingen op. Dit hebben we op de SCRUM manier gedaan. Daarna
      heb ik het basisproject aangemaakt en deze naar een repo op GitHub
      gepushed.
    </p>
    <p>
      Daarna konden we aan de slag en hebben we per sprint een periode van 2
      weken genomen. Ieder heeft daarna een user story uit de lijst van de
      sprint genomen en is hieraan beginnen werken. Bij vragen konden we elkaar
      iedere keer vlot verder helpen en was de Laravel documentatie een
      uitstekend hulpmiddel. Tussendoor hebben we nog een ERD gemaakt voor de
      database en een use case diagram in verband met het vak "Requirements
      Analysis".
    </p>
    <p>
      Na onze eerste sprint hebben we een meeting met de klant gehouden om de
      vooruitgang te tonen. Zij waren op dat moment al blij met hoe het er uit
      zag en hoe het project verloopte.
    </p>
    <p>
      Onze productiviteit verhoogde naarmate we meer ervaring kregen met
      Laravel, hierdoor konden we vlot een planning doorgeven aan de klant, en
      ons hier aan houden.
    </p>
    <br />
    <h2>Oplevering</h2>
    <p>
      In de laatste 2 weken van onze planning hebben we nauw samengewerkt met de
      klant om de applicatie op hun hosting te installeren en configureren. Na
      de laatste kronkels uit het project uit te werken hebben we een laatste
      demo gegeven aan de klant en een korte uitleg over hoe alles werkt. Al bij
      al een zeer successvolle oplevering!
    </p>
    <br />
    <h2>Open source</h2>
    <p>
      Tijdens het ontwikkelen van het project kregen wij het idee dat dit een
      toepassing is die op meerdere plaatsen toegepast kan worden. Daarom hebben
      we aan de klant gevraagd of we de code mochten open-sourcen, waarop we een
      positief antwoord hebben gekregen.
    </p>
    <p>
      De GitHub repository kan u hier vinden:
      <a
        href="https://github.com/jonasclaes/smart-documentation-system"
        target="_blank"
        rel="noopener noreferrer"
        >https://github.com/jonasclaes/smart-documentation-system</a
      >
    </p>
    <br />
    <h2>Contact</h2>
    <p>
      Indien u meer zou willen weten over dit project, aarzel dan niet om
      contact op te nemen met mij of Thierry Eeman op één van onderstaande
      wijzen.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <CardDark>
        <h3>Jonas Claes</h3>
        <p>
          E-mail: <a href="mailto:jonas@jonasclaes.be">jonas@jonasclaes.be</a>
        </p>
        <p>Telefonisch: <a href="tel:+32484238902">+32 484 23 89 02</a></p>
      </CardDark>
      <CardDark>
        <h3>Thierry Eeman</h3>
        <p>
          E-mail:
          <a href="mailto:thierry.eeman@student.thomasmore.be"
            >thierry.eeman@student.thomasmore.be</a
          >
        </p>
      </CardDark>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardDark from "@/components/content/CardDark.vue";

export default defineComponent({
  components: {
    CardDark,
  },
});
</script>

<style scoped>
h2 {
  @apply text-xl font-semibold;
}

h3 {
  @apply text-lg font-semibold;
}

a {
  @apply text-blue-500 font-semibold;
}
</style>
