<template>
<div>
    <div>
      <img src="../assets/heste_promo/camphest_logo_large_widest.jpg" alt="Camp Hest @ Roskilde" />
    </div>
  <b-container>

    <!-- QUOTES -->
    <!--<div class="quote">
      <blockquote>
        Ingen fest uden hest
      </blockquote>
      <cite>Thue Gram-Hansen</cite>
    </div>-->

    <b-row
      class="mt-2"
      v-for="topic in frontPageTopics"
      :key="topic.id"
      :to="`${topic.no}`"
    >
      <b-col cols="12" class="mb-2">
        <h1>{{ topic.header }}</h1>
      </b-col>
      <b-col cols="12">
        <p>{{ topic.desc }}</p>
      </b-col>
    </b-row>

    <!-- IMAGES -->
    <div class="hestebilleder">
      <img src="../assets/heste_fest/hest1.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest2.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest3.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest4.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest5.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest6.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest7.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest8.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest1.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest6.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest3.jpg" alt="Camp Hest @ Roskilde" />
      <img src="../assets/heste_fest/hest4.jpg" alt="Camp Hest @ Roskilde" />
    </div>
  </b-container>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const AppProps = Vue.extend({
  props: {}
})
@Component({})
export default class Hello extends AppProps {
  frontPageTopics = [
    {
      id: 0,
      header: 'Hvem er Camp Hest?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
    }
  ];
}
</script>

<style>
div.topics {
  margin-bottom: 40px;
}

.hestebilleder img {
  transition: 0.5s ease;
  height: 300px;
  width: 300px;
  margin: 15px;
}

.hestebilleder img:hover {
  opacity: 0.3;
}

.hestebilleder {
  margin: 0 auto;
  display: block;
  width: 90%;
}
</style>
