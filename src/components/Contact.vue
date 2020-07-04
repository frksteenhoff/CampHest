<template>
    <div class="under_header">
      <b-container class="ml-0 mt-3">
        <b-row>
          <b-col cols="12" class="mb-3">
            <h1>Kontakt</h1>
          </b-col>
          <b-col cols="12" md="5">
            <div class="contactinfo mb-4" v-for="person in kontaktpersoner" v-bind:key="person.id"
                :to="`${person.no}`">
              <div>
                <p class="font-weight-bold">{{person.name}}</p>
                <p><a class="pl-0" :href="`mailto:${person.email}`">{{ person.email }}</a></p>
                <p>{{ person.phone }}</p>
              </div>
            </div>
        </b-col>
        <b-col cols="12" md="7" class="ml-sm-5 ml-md-0">
          <img src="../assets/heste_fest/arena_fest.jpg">
        </b-col>
      </b-row>
      <b-col class="mt-3">
        <p class="marker">Eller kom forbi os i campen til sommer!</p>
      </b-col>
    </b-container>
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
    },
    {
      id: 2,
      name: 'Henriette Steenhoff (hjemmeside)',
      email: 'henriette.steenhoff@gmail.com',
      phone: '+45 2666 1248'
    }
  ]
}
</script>

<style scoped>

.contactinfo {
  margin-top: 0.525rem;
}

.contactinfo p{
  margin-top: 0.1em;
  margin-bottom: 0.1em;
}

p a, a:link {
  color: #000;
  text-decoration: none !important;
}

</style>
