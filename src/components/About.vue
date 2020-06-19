<template>
  <div>
    <img src="../assets/heste_fest/hest_camp.jpg"  alt="Camp Hest" />
    <b-container>
      <b-row
        v-for="desc in descriptions"
        :key="desc.header"
        class="mt-3"
      >
        <b-col cols="12" class="mb-2">
          <h1>{{ desc.header }}</h1>
        </b-col>
        <b-col cols="12">
          <p>{{ desc.paragraph}}</p>
        </b-col>
      </b-row>
    </b-container>
    <div class="de_heste_venner">
      <ul>
        <div class="hest"
          v-for="hest in den_heste_liste"
          :key="hest.id"
          :to="`${hest.page}`">
          <img class="img_about" src="../assets/pony_free.png" />

          <p class="name">{{hest.name}}</p>
          <p class="small">" {{hest.slogan}} "</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const AppProps = Vue.extend({
  props: {}
})

@Component({})
export default class About extends AppProps {
  descriptions = [
    {
      header: 'Hingste, hopper og ponnier..',
      paragraph: 'Historien om camp hest. Hvem er med, hvorfor?'
    }
  ];

  den_heste_liste = [
    {
      id: 0,
      name: 'Loke',
      imgPath: '../assets/pony_free.png',
      slogan: 'North East South Hest',
      desc: '..'
    },
    {
      id: 1,
      name: 'Nanna',
      imgPath: '../assets/pony_free.png',
      slogan: 'Star horse',
      desc: '..'
    },
    {
      id: 2,
      name: 'Niels',
      imgPath: '../assets/pony_free.png',
      slogan: 'Mass = horse x acceleration',
      desc: '..'
    },
    {
      id: 3,
      name: 'Henriette',
      imgPath: '../assets/pony_free.png',
      slogan: "alias yolo='git push --horse",
      desc: '..'
    },
    {
      id: 4,
      name: 'Sophia',
      imgPath: '../assets/pony_free.png',
      slogan: "Hestiny's Child",
      desc: '..'
    },
    {
      id: 5,
      name: 'Jose',
      imgPath: '../assets/pony_free.png',
      slogan: "You're simply the hest",
      desc: '..'
    },
    {
      id: 6,
      name: 'Cille',
      imgPath: '../assets/pony_free.png',
      slogan: 'I hest my case',
      desc: '..'
    },
    {
      id: 7,
      name: 'La Cour',
      imgPath: '../assets/pony_free.png',
      slogan: 'Ingen fest uden hest',
      desc: '..'
    },
    {
      id: 8,
      name: 'Jesper',
      imgPath: '../assets/pony_free.png',
      slogan: 'Hestabe',
      desc: '..'
    }
  ];
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
