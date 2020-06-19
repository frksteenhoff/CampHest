<template>
  <b-container class="mt-3">
    <b-row>
      <b-col cols="12" class="p-0 mb-3">
        <h1>Vi gør din Roskilde endnu bedre</h1>
      </b-col>
      <b-col cols="12" class="p-0">
        <p class="mb-0">Er det dit første år på Roskilde? Kan du ikke finde ud af at sætte en pavillion op, eller ender I ud med at den er ødelagt efter første dag? Fortvivl ikke. Her giver vi nemlig et indblik I hvordan vi sikrer både pavillion og telt!</p>
      </b-col>
    </b-row>
    <b-row class="m-4">
      <img src="../assets/heste_fest/hest_maddie.jpg" alt="Camp Hest @ Roskilde" />
    </b-row>
   <!-- List all prior events -->
    <b-row
      class="topics"
      v-for="item in items"
      v-bind:key="item.id"
      :to="`${item.no}`"
    >
      <h1>{{ item.header }}</h1>
      <p>{{ item.desc }}</p>
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
export default class Help extends AppProps {
  items = [
    {
      id: 0,
      header: 'How-to-telt',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    },
    {
      id: 1,
      header: 'How-to pavillion',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    }
  ]
}
</script>

<style>
</style>
