<template>
  <div>
  <!--<img class="logo" src="../assets/logo_placeholder.png"/>-->
  <nav>
    <router-link class='spacing' v-for="routes in links"
      v-bind:key="routes.id"
        :to="`${routes.page}`">{{routes.text}}
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Navigation extends Vue {
  links = [
    {
      id: 0,
      text: 'Hjem',
      page: '/'
    },
    {
      id: 1,
      text: 'Roskilde',
      page: '/Events'
    },
    {
      id: 2,
      text: 'Hjælp',
      page: '/Help'
    },
    {
      id: 3,
      text: 'Your stable mates',
      page: '/About'
    },
    {
      id: 4,
      text: 'Kontakt',
      page: '/Contact'
    }
  ]
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
    color: #fd6a02;
}

</style>

<!--https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80
-->
