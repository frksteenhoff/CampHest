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
      desc: 'Først og fremmest den heste camp på Roskilde!'
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
