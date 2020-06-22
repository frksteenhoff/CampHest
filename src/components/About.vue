<template>
  <div>
    <img src="../assets/heste_fest/hest_camp.jpg"  alt="Camp Hest" />
    <b-container>
      <b-row class="mt-3 mb-2">
        <b-col cols="12" class="mb-4">
          <h1 class="ml-0">Deltagere Roskilde Hestival {{ chosenYear }} <span v-if="chosenYear === 2020">@ Følsborg</span></h1>
        </b-col>
        <b-col>
          <p class="p-0 ml-0">Her kan du læse lidt om alle deltagere i Camp Hest fra campens start i 2010? til i dag. Vælg årstal nedenunder.</p>
        </b-col>
      </b-row>
      <b-row class="pr-5">
          <b-col cols="6" class="mb-3">
            <b-form-select v-model="chosenYear" :options="campHestYears">
              <template v-slot:first>
                <b-form-select-option :value="null" disabled>-- Vælg et årstal --</b-form-select-option>
              </template>
            </b-form-select>
          </b-col>
      </b-row>
      <b-row class="pr-5">
          <b-col style="font-style: italic">
              Antal deltagere: {{ horsesInYear.length}}
          </b-col>
      </b-row>
    <b-row class="mt-5">
        <b-col cols="12" md="6" xl="4" class="hest mb-xl-3"
          v-for="hest in horsesInYear"
          :key="hest.name + hest.imageUrl">
          <div v-if="hest.name">
              <b-row>
                <b-col cols="12" sm="3" md="5" lg="4" xl="5">
                <img class="img_about" :src="getImage(hest.imageUrl)" />
                </b-col>
                <b-col class="pl-xs-3 pl-md-0">
                  <p class="horse name">{{ hest.name }}<span style="font-style: italic; font-weight: normal" v-if="hest.alias">{{", " + hest.alias }}</span></p>
                  <p class="horse mt-0 mb-3" style="font-size: 0.8rem;">{{"🐴".repeat(hest.yearsAtRoskilde.length) }}</p>
                </b-col>
             </b-row>
             <b-row>
               <b-col class="mt-3">
                  <p class="horse small">" {{ hest.slogan ? hest.slogan : "Mangler" }} "</p>
                  <p class="horse small" style="font-style: normal;">{{ hest.funFact ? hest.funFact : "" }}</p>
                </b-col>
             </b-row>
          </div>
        </b-col>
       <b-col v-if="horsesInYear.length === 0">
          <p class="marker" style="font-size: 1rem;">What horsery is this!? Vi har endnu ikke tilføjet hvilke heste, der var med dette år. Stay tuned!</p>
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
  firstYear = 2010
  chosenYear: number = this.currentYear
  campHestYears: number[] = Array(this.currentYear - this.firstYear + 1).fill(1).map((x, y) => (x + y + this.firstYear - 1))
  den_heste_liste: HorseDescription[] = horses;

  getImage (imageName: string) {
    return !imageName ? require('../assets/heste_mates/pony_free.png') : require('../assets/heste_mates/' + imageName)
  }

  get horsesInYear () {
    return this.den_heste_liste.filter(horse => horse.yearsAtRoskilde.includes(this.chosenYear.toString()))
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

.horse {
  padding-left: 0;
  margin-left: 0;
}

p.small {
  font-style: italic;
}
</style>
