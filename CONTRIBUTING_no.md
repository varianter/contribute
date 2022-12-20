# Contribute Variant

I dette dokumentet er det etablert rutiner og hjelp til hvordan man kan bidra
med innhold, fikser og endringer på systemene til Variant. Dette gjelder
nettsiden, håndbok, styleguide, og alle andre øvrige systemer som finnes under
https://github.com/varianter. Selv dette dokumentet tar gjerne i mot forslag til
endringer.

## Viktigste retningslinje

Vi skal være høfflige og hyggelige mot alle som kommer inn og bidrar. Enten det
er med kommentarer eller endringer til innhold. Det er viktig å respektere
andres tid og innsats. Dette gjelder også andre som kommenterer. Dersom noen
bryter med denne retningslinjen burde nødvendige grep tas (eventuell
utestengelse fra prosjekt om nødvendig).

## Hvordan bidra

### Via Githubs grensesnitt

1. Se hvordan man redigerer filer via Githubs grensesnitt:
   https://help.github.com/articles/editing-files-in-your-repository/
2. Velg `Create new branch` alternativet og trykk `Propose file change`
3. Fyll ut _pull request_ beskrivelse med
   [informasjon etter formatet spesifisert nedenfor](#pull-request-beskrivelse)

### Fra lokal (utvikling)

Her er det en veldig kortfattet liste over hvordan man kan gå frem. Vi prøver
ikke være for nøyaktig og detaljert her, for det finnes mange gode ressurser for
dette allerede. Nedenfor finner du en oppsummering, men om du ønsker en mer
detaljert fremgangsmåte, anbefaler vi å sjekke ut
[opensource.guide](https://opensource.guide/how-to-contribute/) fra Github.

1. Installer og konfigurer git
   - Via terminal: https://help.github.com/articles/set-up-git/
   - Via egen klient: https://desktop.github.com/
2. Installer node.js:
   - Nyeste versjon: https://nodejs.org/en/
   - Avansert: For å velge versjon og holde deg oppdatert:
     https://github.com/creationix/nvm
3. Hent ned aktuelle prosjekt:
   - E.g håndboken: `git clone https://github.com/varianter/handbook.git`
   - Naviger til prosjektet `cd handbook`
4. Utfør steg som står i README.md for oppsett lokalt.
5. Gjør endringer på filer og sjekk at alt ser bra ut og fungerer.
6. Om README.md sier at det er tester, kjør `npm run test` eller det README.md
   spesifiserer
7. Opprett en egen [branch](https://guides.github.com/introduction/flow/):
   `git checkout -b uniktNavn`
8. Lagre endringene til git:
   1. `git add <fil med endringer>`
   2. `git commit -m 'Beskrivende endring'`. Meldingen som beskrives her skal
      holdes konkret og konsis. Det er viktig at de oppsummerer faktiske
      endringer.
9. Send endringene til Github: `git push origin uniktNavn`
10. Naviger til _repoet_: https://github.com/varianter/handbook
11. Trykk lenken `Create pull request` som er i den gule boksen.
12. Fyll ut _pull request_ beskrivelse med
    [informasjon etter formatet spesifisert nedenfor](#pull-request-beskrivelse)

### Pull Request beskrivelse

Når man oppretter en Pull Request (forslag til endring) er det viktig at
beskrivelsen gir god nok kontekst slik at noen kan forstå resonnementet bak
endringen. Det betyr at følgende informasjon må som regel med:

1. Hva skal denne endringen gjøre
2. Hvorfor trengs denne endringen
3. Hvilken info trenger man for å gjøre en vurdering

Med å gi denne informasjonen vil det være mye enklere å vurdere endringene, både
tekniske og innholdsmessige, som igjen gjør at endringene kan raskere komme "ut
i produksjon".

## Hvordan håndtere innkommende Pull Requests og Issues

Denne delen gjelder for alle som har rettigheter til å godkjenne og dra inn
endringer. Her dekkes det hvordan vi opererer med å få inn endringer og rutiner
vi burde ha for å kvalitetssikre innhold. Fokuset her er ikke å hindre endringer
ut på systemer, men å unngå at vi gjør en feil. Det kan særlig være skummelt for
nye ansatte, og vi ønsker å senke terskel for å gjøre endringer.

Det er viktig i kommunikasjon og diskusjoner på Pull Requests og Issues. Vi skal
være imøtekommende og høffelig. Uansett hvem det er som kommer med bidrag. Om
det er kolleger eller eksterne. Dette er selsagt, men det må sies. **Respekter
andres tid som har gått inn i å bidra**.

### Godkjenning

For å godkjenne en Pull Request må følgende være oppfylt og gjøres:

1. Minst en reviewer må være lag til.
2. Om ekstra innspill trengs, tag teams med f.eks @variant/styre og lignende.
3. Reviewers ser over og kommer med innspill til eventuelle endringer.
4. Reviewer godkjenner.
5. Så kan endringene merges. Foretrekk metode "Squash and merge".
6. Takk for bidraget og feire med en emoji.
