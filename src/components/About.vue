<template>
  <div>
    <img src="../assets/hest_camp.jpg"/>
    <h1>Hingste, hopper og ponnier..</h1>
    <p>Hvordan kommer man med i camp hest, er der forskelle på ny og gammel?</p>
    <h1>Vriiinsk!</h1>
    <ul>
        <div class="hest" v-for="hest in den_heste_liste" v-bind:key="hest.id"
           :to="`${hest.page}`">
           <img class="img_about" src="../assets/pony.png"/>

           <p1>{{hest.name}}</p1>
           <p>{{hest.desc}}</p>
           <psmall>" {{hest.slogan}} "</psmall>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      den_heste_liste: [
        {
          id: 0,
          name: "Loke",
          img_path: '../assets/pony.png',
          slogan: 'North East South Hest',
          desc: '..'
        },
        {
          id: 1,
          name: "Nanna",
          img_path: '../assets/pony.png',
          slogan: 'Star horse',
          desc: '..'        
          },
        {
          id: 2,
          name: "Niels",
          img_path: '../assets/pony.png',
          slogan: 'Mass = horse x acceleration',
          desc: '..'        
          },
        {
          id: 3,
          name: "Henriette",
          img_path: '../assets/pony.png',
          slogan: 'alias yolo="git push --horse',
          desc: '..'        
          }
      ]
    }
  }
}
</script>

<style>
 ul {
    margin-top: 40px;
    margin-left: 21px;  
    list-style-type: disc;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
    margin-bottom: 30px;
    width: 1000px;
}

p1 {
    font-weight: bold;
}

img.img_about {
    width: 120px;
    Float:left;
    margin-right: 20px;
}

img {
  width: 100%;
}

.hest {
    margin-bottom: 70px;
}

.hest p1{
    font-size: 20px;
}

.hest p {
    font-size: 16px;
}

.hest psmall {
    font-style: italic;
}
</style>