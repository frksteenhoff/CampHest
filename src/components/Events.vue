<template>
  <b-container>
    <b-row class="mt-3">
      <h1>Roskilde Events</h1>
    </b-row>
    <b-row>
      <p class="mt-2">På Roskilde laver vi forskellige events både for os selv og for andre. Her skriver vi lidt om, hvad de går ud på.</p>
    </b-row>
    <b-row class="m-3">
        <img src="../assets/heste_promo/camphest_logo_large_widest.jpg" alt="Camp Hest @ Roskilde" />
    </b-row>

   <!-- List all prior events -->
    <b-row v-for="event in events" v-bind:key="event.id"
         :to="`${event.no}`">
      <h1>{{ event.header }}</h1>
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
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    },
    {
      id: 1,
      header: 'Tour de Dannebrog',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    },
    {
      id: 2,
      header: 'Hestival Bingo',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    },
    {
      id: 3,
      header: "Giv os dine 'bollebilletter'",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    }
  ]
};
</script>

<style>
</style>
