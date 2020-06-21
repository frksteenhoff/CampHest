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
      <b-col cols="12" class="mb-4">
        <h1>{{ topic.header }}</h1>
      </b-col>
      <b-col cols="12">
        <p>{{ topic.desc }}</p>
      </b-col>
    </b-row>

    <!-- IMAGES -->
    <b-row class="hestebilleder">
      <b-col cols="12" md="6" xl="4" v-for="image in range(0, 17)" :key="image">
        <b-img fluid-grow :src="getImage(`hest${image}.jpg`)" alt="Camp Hest @ Roskilde" />
      </b-col>
    </b-row>
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

  range (start: number, end: number) {
    return Array(end).fill(start).map((x, y) => x + y)
  }

  getImage (imageName: string) {
    return !imageName ? require('../assets/heste_mates/pony_free.png') : require('../assets/heste_fest/' + imageName)
  }
}
</script>

<style>
div.topics {
  margin-bottom: 40px;
}

.hestebilleder img {
  transition: 0.5s ease;
  margin: 15px;
}

.hestebilleder img:hover {
  opacity: 0.3;
}
</style>
