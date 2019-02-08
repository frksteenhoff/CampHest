<template>
  <div>
    <h1>{{msg}}</h1>
    <p>Email: {{email}}</p>
    <p>Telefon: {{phone}}</p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
        msg: 'Kontakt os',
      email: 'camphest@gmail.com',
      phone: '+45 ---'
    }
  }
}
</script>