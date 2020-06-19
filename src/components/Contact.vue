<template>
    <div class="under_header">
      <h1>Kontaktperson</h1>
      <img class ="to_the_side" src="../assets/heste_fest/arena_fest.jpg">
      <div class="contactinfo" v-for="person in kontaktpersoner" v-bind:key="person.id"
          :to="`${person.no}`">
      <div class="middle">
        <p class="top_line">{{person.name}}</p>
        <p>{{ person.email }}</p>
        <p>{{ person.phone }}</p>
      </div>
    </div>
    <p class="end_line">Eller kom forbi os i campen til sommer!</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const AppProps = Vue.extend({
  props: {
  }
})

@Component({})
export default class Contact extends AppProps {
  kontaktpersoner = [
    {
      id: 0,
      name: 'Jeppe Nørregaard',
      email: 'jeppenuuk@gmail.com',
      phone: '+45 5382 1111'
    },
    {
      id: 1,
      name: 'Mathias Geisler',
      email: 'geisleren@gmail.com',
      phone: '+45 6013 1579'
    }
  ]
}
</script>

<style scoped>

.contactinfo {
  margin-top: 21px;
}

.middle {
  margin-top: 20px;
  margin-bottom: 40px;
}

.contactinfo p{
  margin-top: 0.1em;
  margin-bottom: 0.1em;
}

.to_the_side {
  width: 60%;
  position: relative;
  float: right;
  margin-right: 41px;
}

p {
  font-size: 1rem;
}

</style>
