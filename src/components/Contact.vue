<template>
    <div>
      <h1>Kontaktperson</h1>
      <div class="contactinfo" v-for="person in kontaktpersoner" v-bind:key="person.id"
          :to="`${person.no}`">
      <div class="middle">
        <p class="top_line">{{person.name}}</p>
        <p>{{person.email}}</p>
        <p>{{person.phone}}</p>
      </div>
    </div>
    <p class="end_line">Eller kom forbi os i campen til sommer!</p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      kontaktpersoner: [ {
        id: 0,
        name: 'Jeppe Nørregaard',
        email: 'something@x.com',
        phone: '+45 1234 5678'
      },
       {
         id: 0,
        name: 'Mathias Geisler',
        email: 'something@x.com',
        phone: '+45 1234 5678'
      }
    ]
  }
}
}
</script>

<style>

.contactinfo {
  margin-top: 21px;
}

.middle {
  margin-top: 30px;
  margin-bottom: 80px;
}


.contactinfo p{
  margin-top: 0.1em;
  margin-bottom: 0.1em;
}

</style>