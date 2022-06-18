---
title: "Datalogging Pompenstand"
client: "Watertechniek Teunissen"
date: "2020-06-30"
image: "/images/projects/watertechniek-teunissen.jpg"
finished: true
---

## Wat is de datalogging voor Watertechniek Teunissen?

De datalogging is een vervanging van een oud instrument, met nieuwe, moderne technologieën. Watertechniek Teunissen specialiseert zich in pomptechniek en piping, ook herstellen ze pompen. Nadat een pomp hersteld was werd deze getest met behulp van een analoge debietmeter en een analoge drukmeter. Dit is vervangen door een nieuw buizensysteem met een digitale debietmeter en een digital drukmeter, verbonden met een PLC-sturing en een MiniPC.

## Over de opdracht

Watertechniek Teunissen had deze opdracht beschikbaar en ik heb deze gekozen als eindwerk voor mijn middelbare school. Het fysieke gedeelte was al gebouwd, het software gedeelte ontbrak nog volledig.

## Uitwerking

Allereerst heb ik samen met een leerkracht (Benny Kox), contact opgenomen over dit project. Ik heb met hem samengewerkt om dit project tot een succesvol einde te brengen. Benny Kox heeft de PLC-sturing geprogrammeerd samen met mij. De desbetreffende PLC is een S7-1200 reeks PLC van Siemens.

Daarnaast heb ik een lijst met onderdelen gemaakt die we nodig zouden hebben. Op die lijst stond onderandere een Intel NUC, dit is een kleine en compacte mini-PC. Daarnaast stonden er ook een aantal toebehoren op deze lijst zoals een monitor, toetsenbord, muis en Ethernet kabel. De Ethernet kabel is gebruikt om de PLC met de mini-PC te verbinden.

Ik heb met Node.js, PostgreSQL, ExpressJS, Socket.io en Bootstrap een webapp gemaakt die op de mini-PC draait. De technieker kan dan met een muisklik de logging starten, die zal wachten tot de PLC de pomp aanstuurt, en ondertussen metingen nemen. Wanneer de PLC de pomp uitschakelt en de cyclus beëindigd is, zal deze stoppen en de resultaten verwerken. Enkele seconden later krijgt de technieker een pagina te zien met informatie over de cyclus en de mogelijkheid om een grafiek af te drukken of een CSV-file met de ruwe data te exporteren.

## Award

Dit project heeft ook een award gewonnen die Stad Lommel uitreikte. Deze award was "Beste eindwerk van 2020". Het was voor mij een hele eer om deze award te krijgen. Daarnaast heb ik bij deze award nog een cadeaubon gekregen voor de Standaard Boekhandel waarmee ik uiteindelijk het boek "The C++ Programming Language" door Bjarne Stroustrup gekocht heb.

## Contact

Indien u meer zou willen weten over dit project, aarzel dan niet om contact op te nemen met mij op één van onderstaande wijzen.

### Jonas Claes

**E-mail:** [jonas@jonasclaes.be](mailto:jonas@jonasclaes.be)  
**Telefonisch:** [+32 484 23 89 02](tel:+32484238902)  
**Website:** [jonasclaes.be](https://jonasclaes.be)  
**Twitter:** [@jonasclaesbe](https://twitter.com/jonasclaesbe)  
**GitHub:** [@jonasclaes](https://github.com/jonasclaes)  
**Instagram:** [@jonasclaes.be](https://instagram.com/jonasclaes.be)
