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
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    },
    {
      id: 1,
      header: 'Tour de Dannebrog',
      img: 'hest_dannebrog.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    },
    {
      id: 3,
      header: "Giv os dine 'bollebilletter'",
      img: 'bollebilletter.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    }
  ]

  getImage (imageName: string) {
    return !imageName ? require('../assets/heste_mates/pony_free.png') : require('../assets/heste_fest/' + imageName)
  }
};
</script>

<style>
</style>
