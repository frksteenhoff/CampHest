<template>
  <b-container>
    <b-row class="mt-3">
      <h1>Roskilde Events</h1>
    </b-row>
    <b-row>
      <p class="mt-2">På Roskilde laver vi forskellige events både for os selv og for andre. Her skriver vi lidt om, hvad de går ud på.</p>
    </b-row>
    <b-row class="p-3 pb-4">
      <img src="../assets/heste_fest/hest_large.jpg" alt="Camp Hest @ Roskilde" />
   </b-row>

   <!-- List all prior events -->
    <b-row v-for="event in events" v-bind:key="event.id"
         :to="`${event.no}`" class="pb-3">
      <h1 class="mb-3">{{ event.header }}</h1>
      <img v-if="event.img" class="p-3" :src="getImage(event.img)" :alt="'Camp Hest @ Roskilde - ' + event.header" />
      <p>{{ event.desc }}</p>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const AppProps = Vue.extend({
  props: {

  }
})
@Component
export default class Events extends AppProps {
  events = [
    {
      id: 0,
      header: 'Hestevæddeløb',
      img: 'hestevaeddeloeb.jpg',
      desc: 'Vi udfordrer dig til hestevæddeløb! Til lyden af hestehove og tilråb beder vi dig og en makker om at hoppe i ét af vores 5 hestekostumer og tager derefter en tur i ægte væddeløbsstil.'
    },
    {
      id: 1,
      header: 'Tour de Dannebrog',
      img: 'hest_dannebrog.jpg',
      desc: 'Alle klæder sig ud i rødt og hvidt og derefter tager vi på eventyr. Ruten går fra Dannebrogsflag til Dannebrogsflag og slutter først når der ikke er flere tilbage.'
    },
    {
      id: 3,
      header: "Giv os dine 'bollebilletter'",
      img: 'bollebilletter.jpg',
      desc: 'Vi samler dåsesplitter og vil gerne være de bedste i Clean out Loud til netop dette. Skulle du ligge inde med nogle overskydende splitter, tager vi imod dem med kyshånd og giver gerne en bajer i lejeren!'
    }
  ]

  getImage (imageName: string) {
    return !imageName ? require('../assets/heste_mates/pony_free.png') : require('../assets/heste_fest/' + imageName)
  }
};
</script>

<style>
</style>
