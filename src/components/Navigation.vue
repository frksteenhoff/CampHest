<template>
  <div>
    <nav>
      <!--<img class="logo" src="../assets/logo_placeholder.png"/>-->
      <router-link class='spacing' v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Hjem',
          page:'/'
        },
        {
          id: 1,
          text: 'Your stable mates',
          page:'/About'
        },
        {
          id: 2,
          text: 'Kontakt',
          page:'/Contact'
        },
        {
          id: 3,
          text: 'Roskilde',
          page:'/Events'
        },
        {
          id: 4,
          text: 'Hjælp',
          page:'/Help'
        }
      ]
    }
  }
}
</script>

<style>
.logo {
  height: 25px;
  width: 25px;
  margin-right: 30px;
}

.spacing { 
    Margin-top: 20px;
    Margin-right: 40px; 
      font-family: 'Permanent Marker';
} 

</style>

<!--https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80
-->