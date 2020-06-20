<template>
  <div>
    <img src="../assets/heste_fest/hest_camp.jpg"  alt="Camp Hest" />
    <b-container>
      <b-row class="mt-3 mb-2">
        <b-col cols="12" class="mb-2">
          <h1>Deltagere Roskilde Hestival {{ chosenYear }} @ Følsborg</h1>
        </b-col>
        <b-col>
          <p>Her kan du læse lidt om alle deltagere i Camp Hest fra campens start i 2014 til i dag.</p>
        </b-col>
      </b-row>
      <b-row class="pl-5 pr-5">
          <b-col cols="6" class="mb-3">
            <b-form-select v-model="chosenYear" :options="campHestYears">
              <template v-slot:first>
                <b-form-select-option :value="null" disabled>-- Vælg et årstal --</b-form-select-option>
              </template>
            </b-form-select>
          </b-col>
      </b-row>
    <b-row>
        <b-col cols="4" class="hest"
          v-for="hest in den_heste_liste"
          :key="hest.name + hest.imageUrl">
          <div v-if="hest.yearsAtRoskilde.includes(chosenYear.toString()) && hest.imageUrl && hest.slogan">
            <!-- <img class="img_about" :src="getImage(hest.imageUrl)" />-->

            <p class="name">{{ hest.name }}<span style="font-style: italic; font-weight: normal" v-if="hest.alias">{{", " + hest.alias }}</span></p>
            <p class="small">" {{ hest.slogan }} "</p>
            <p class="small" style="font-style: normal;">{{ hest.funFact }}</p>
          </div>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import horses from '../data/horses.json'
import { HorseDescription } from '../types'

const AppProps = Vue.extend({
  props: {}
})

@Component({})
export default class About extends AppProps {
  firstYear = 2014
  chosenYear: number = this.currentYear
  campHestYears: number[] = Array(this.currentYear - this.firstYear + 1).fill(1).map((x, y) => (x + y + this.firstYear - 1))
  den_heste_liste: HorseDescription[] = horses;

  getImage (imageName: string) {
    console.log(imageName)
    return !imageName ? require('../assets/heste_mates/pony_free.png') : require('../assets/heste_mates/' + imageName)
  }

  get currentYear () {
    const date = new Date()
    return date.getFullYear()
  }
}

</script>

<style>
ul {
  margin-top: 40px;
  margin-left: 41px;
  margin-right: 41px;
  list-style-type: disc;
  -webkit-columns: 3;
  -moz-columns: 3;
  columns: 3;
  list-style-position: inside;
  margin-bottom: 40px;
  width: 90%;
  align-content: center;
}

.name {
  font-weight: bold;
}

img.img_about {
  width: 120px;
  float: left;
  margin-right: 20px;
}

img {
  width: 100%;
}

.hest {
  margin-bottom: 70px;
}

.hest p1 {
  font-size: 20px;
  line-height: 1em;
}

.hest p {
  font-size: 20px;
}

p.small {
  font-style: italic;
}
</style>
