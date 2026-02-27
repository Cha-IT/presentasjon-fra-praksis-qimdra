import React from 'react'
import { Deck, Slide, Heading, Text, UnorderedList, ListItem, DefaultTemplate, Image } from 'spectacle'

export default function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      {/* title slide */}
      <Slide>
        <Heading>Praksisuke 6-7</Heading>
      </Slide>

      {/* Om praksisplassen - part 1 */}
      <Slide>
        <Heading>Om praksisplassen – Kantega SSO</Heading>
        <Text>
          Kantega SSO er en del av selskapet Kantega, som jobber med programvareutvikling og digitale løsninger. De utvikler blant annet frontend-løsninger og systemer som gjør innlogging tryggere og enklere.
        </Text>
      </Slide>
      {/* Om praksisplassen - part 2 */}
      <Slide>
        <Text>
          Kantega SSO tilbyr verktøy som hjelper brukere med å sikre og forenkle innlogging til Atlassian-produkter, som for eksempel Jira og Confluence. Løsningene deres fokuserer på sikkerhet, brukeropplevelse og effektiv tilgang til tjenester.
        </Text>
        <Text>
          Selskapet jobber i team og bruker moderne teknologi innen webutvikling.
        </Text>
      </Slide>

      {/* Hva gjorde vi - part 1 */}
      <Slide>
        <Heading>Hva gjorde vi i praksis?</Heading>
        <UnorderedList>
          <ListItem>De første dagene jobbet vi med oppgaver i JavaScript, HTML og CSS</ListItem>
          <ListItem>Vi fikk læringsressurser som W3Schools og Codecademy for å lære mer om kode</ListItem>
          <ListItem>Vi deltok på møter, blant annet et ukentlig møte mandag kl. 11</ListItem>
        </UnorderedList>
      </Slide>
      {/* Møter – detaljer */}
      <Slide>
        <UnorderedList>
          <Text>På møtene snakket teamet om flere punkter</Text>
          <ListItem>hva de hadde gjort</ListItem>
          <ListItem>hva som skulle gjøres videre</ListItem>
          <ListItem>problemer og løsninger</ListItem>
          <Text>Supporttjenesten deres hadde vært nede en periode, og vi hjalp med å svare brukere etter omtrent én måned uten respons</Text>
        </UnorderedList>
      </Slide>
      {/* Hva gjorde vi - part 2 */}
      <Slide>
        <UnorderedList>
          <Text>Parallelt jobbet jeg med mitt eget porteføljenettsted</Text>
          <ListItem>nettside om meg selv</ListItem>
          <ListItem>mine ferdigheter</ListItem>
          <ListItem>prosjekter</ListItem>
          <ListItem>kontaktinformasjon</ListItem>
        </UnorderedList>
      </Slide>

      {/* Video slide */}
      <Slide>
        <Heading>Nettside</Heading>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <video width="1000" height="450" controls>
            <source src="src/assets/video.mov" type="video/mp4" />
            Din nettleser støtter ikke video.
          </video>
        </div>
      </Slide>

      {/* Hva lærte jeg - part 1 */}
      <Slide>
        <Heading>Hva lærte jeg i praksis?</Heading>
        <UnorderedList>
          <ListItem>Hvordan frontend-utvikling fungerer i et ekte arbeidsmiljø</ListItem>
          <ListItem>Bedre forståelse av HTML, CSS og JavaScript</ListItem>
          <ListItem>Hvordan utviklere samarbeider i team</ListItem>
          <ListItem>Hvordan møter brukes til planlegging og problemløsning</ListItem>
        </UnorderedList>
      </Slide>
      {/* Hva lærte jeg - part 2 */}
      <Slide>
        <UnorderedList>
          <ListItem>Viktigheten av god kommunikasjon med brukere gjennom support</ListItem>
          <ListItem>Hvordan jobbe selvstendig med læringsressurser</ListItem>
          <ListItem>Erfaring med å lage og forbedre en egen nettside</ListItem>
          <ListItem>Innsikt i profesjonelle arbeidsrutiner innen IT-bransjen</ListItem>
        </UnorderedList>
      </Slide>
    </Deck>
  )
}
