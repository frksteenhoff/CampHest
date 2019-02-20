<template>
  <div>
    <img src="../assets/heste_fest/hest_camp.jpg"/>
    <h1>Hingste, hopper og ponnier..</h1>
    <p>Historien om camp hest. Hvem er med, hvorfor?</p>

    <h1>Vriiinsk!</h1>
    <p>Alle heste har et slogan. De omhandler heste. Det er dem vi er vilde med.
    
    <div class="de_heste_venner">
      <ul>
        <div class="hest" v-for="hest in den_heste_liste" v-bind:key="hest.id"
           :to="`${hest.page}`">
           <img class="img_about" src="../assets/pony_free.png"/>

           <p class="name">{{hest.name}}</p>
           <p class="small">" {{hest.slogan}} "</p>
        </div>
      </ul>
    </div>
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
          img_path: '../assets/pony_free.png',
          slogan: 'North East South Hest',
          desc: '..'
        },
        {
          id: 1,
          name: "Nanna",
          img_path: '../assets/pony_free.png',
          slogan: 'Star horse',
          desc: '..'        
          },
        {
          id: 2,
          name: "Niels",
          img_path: '../assets/pony_free.png',
          slogan: 'Mass = horse x acceleration',
          desc: '..'        
          },
        {
          id: 3,
          name: "Henriette",
          img_path: '../assets/pony_free.png',
          slogan: 'alias yolo="git push --horse',
          desc: '..'        
          },
        {
          id: 4,
          name: "Sophia",
          img_path: '../assets/pony_free.png',
          slogan: "Hestiny's Child",
          desc: '..'        
          },
        {
          id: 5,
          name: "Jose",
          img_path: '../assets/pony_free.png',
          slogan: "You're simply the hest",
          desc: '..'        
          },
        {
          id: 6,
          name: "Cille",
          img_path: '../assets/pony_free.png',
          slogan: "I hest my case",
          desc: '..'        
          },
        {
          id: 7,
          name: "La Cour",
          img_path: '../assets/pony_free.png',
          slogan: "Ingen fest uden hest",
          desc: '..'        
          },
        {
          id: 8,
          name: "Jesper",
          img_path: '../assets/pony_free.png',
          slogan: "Hestabe",
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
    line-height: 1em;
}

.hest p {
    font-size: 20px;
}

p.small {
    font-style: italic;
}

</style>