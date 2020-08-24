<template>
<div>
    <div>
      <img src="../assets/heste_promo/camphest_logo_large_widest.jpg" alt="Camp Hest @ Roskilde" />
    </div>
  <b-container>
    <b-row class="mt-3 mb-5">
      <b-col cols="12" class="mb-4">
        <h1>Roskilde Hestival 2020</h1>
        <p class="mt-3">Hvordan afholdt vi do it yourself Roskilde 2020? Se med her!</p>
      </b-col>
      <b-col class="text-center">
       <video autoplay controls style="width:90%;" type="video/mov">
         <source src="https://drive.google.com/file/d/1lADXcCClbO-5x6y93jeTPAgrjZcQSr90/view?usp=sharing" />
       </video>
      </b-col>
    </b-row>
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
      <b-col cols="12" md="6" xl="4" v-for="image in range(0, 18)" :key="image">
        <b-img fluid-grow :src="getImage(`hest${image}.jpg`)" class="p-3 m-0" alt="Camp Hest @ Roskilde" />
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
      desc: 'Først og fremmest: den heste camp på Roskilde! Du kan kende os på vores orange t-shirts med hesteslogans og vores hestekostumer. Vi elsker at have camp i Clean Out Loud og går efter at være både den reneste camp og den camp, der samler flest dåsesplitter.'
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
  margin-bottom: 1rem;
}

.hestebilleder img {
  transition: 0.5s ease;
  margin: 0.375rem;
}

.hestebilleder img:hover {
  opacity: 0.3;
}
</style>
