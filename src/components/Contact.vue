<template>
    <div class="under_header">
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
}
}
</script>

<style>

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

</style>