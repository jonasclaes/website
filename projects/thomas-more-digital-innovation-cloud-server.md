---
title: 'Digital Innovation Cloud Server'
client: 'Thomas More'
date: '2022-01-11'
image: '/images/projects/thomas-more.jpg'
---

## Wat is de Digital Innovation Cloud Server?

De Digital Innovation cloud server is een professionele rack-server die onze richting (Digital Innovation), gedoneerd heeft gekregen. Met deze server zouden we graag applicaties draaien vanuit onze richting. Daarnaast dient deze server ook om test cases op te zetten en virtuele machines te draaien.

## Over de opdracht

Deze opdracht was vrij breed. De bedoeling was voornamelijk om een file sharing server op te zetten, om die reden hebben we er veel opslag in gestoken. Na wat denken en bespreken met Jochen, breidden we de scope uit zodat we hier virtuele machines op zouden kunnen draaien, dit heeft enkele voordelen. Zo kunnen studenten van Digital Innovation een eigen virtuele machine aanvragen om dingen op te testen of te tonen aan klanten. Daarnaast kunnen we met meerdere servers een cluster bouwen waarmee we high availability kunnen verkrijgen.

## Uitwerking

Ik ben begonnen met de server volledig schoon te maken en nieuwe koelpasta op de processoren te plaatsen. Daarna heb ik alle harddrive trays uit de server genomen, en nieuwe schijven in gestoken. Tijdens de eerste boot heb ik van deze schijven een RAID volume gemaakt. In totaal hebben we 6 schijven, 4 hiervan zijn een RAID groep voor data, en 2 hiervan zijn een RAID 1 groep voor het besturingssysteem en snellere opslag aangezien deze 2 schijven 10K SAS schijven zijn.

Nadat de BIOS en RAID controller instellingen gedaan waren, heb ik Proxmox Community Edition geïnstalleerd op deze server met behulp van een USB-stick. Hierna heb ik nog wat testjes gedaan met Proxmox en clustering. Nadat ik alles werkend gekregen had heb ik Jochen ingelicht om de server te gaan plaatsen in het datacentrum.

Hiervoor heb ik met Gunther Van Landeghem contact opgenomen en doorgegeven welke poorten we geopend zouden moeten hebben naar de server. Dit zou in principe enkel SSH moeten zijn, omdat we via een SSH-tunnel alle poorten kunnen bereiken. Als studenten een web service willen draaien, kunnen ze met Cloudflare een gratis Argon-tunnel opzetten, dit werkt van binnen naar buiten toe.

Op de dag dat we de server geplaatst hebben in het datacentrum, heb ik nog wat configuratie gedaan en hebben we mogelijke IP ranges besproken. Daarnaast hebben we meteen Nextcloud geïnstalleerd zodat we onze eigen file sharing applicatie hebben.

## Contact

Indien u meer zou willen weten over dit project, aarzel dan niet om contact op te nemen met mij of Jochen Mariën op één van onderstaande wijzen.

### Jonas Claes

**E-mail:** [jonas@jonasclaes.be](mailto:jonas@jonasclaes.be)  
**Telefonisch:** [+32 484 23 89 02](tel:+32484238902)  
**Website:** [jonasclaes.be](https://jonasclaes.be)  
**Twitter:** [@jonasclaesbe](https://twitter.com/jonasclaesbe)  
**GitHub:** [@jonasclaes](https://github.com/jonasclaes)  
**Instagram:** [@jonasclaes.be](https://instagram.com/jonasclaes.be)  

### Jochen Mariën

**E-mail:** [jochen.marien@thomasmore.be](mailto:jochen.marien@thomasmore.be)  
**Telefonisch:** [+32 14 74 05 81](tel:+3214740581)  
