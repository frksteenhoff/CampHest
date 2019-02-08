<template>
  <div>
    <h1>Roskilde Events</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in. </p>

    <img class="imglong" src="../assets/hest_large.jpg">

   <!-- List all prior events -->
    <div class="topics" v-for="event in events" v-bind:key="event.id"
         :to="`${event.no}`">
      <h1>{{ event.header }}</h1>
      <p>{{ event.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [
        {
          id: 0,
          header: "Hestevæddeløb",
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
          },
        {
          id: 1,
          header: "Tour de Dannebrog",
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'          },
        {
          id: 2,
          header: "Hestival Bingo",
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'          },
        {
          id: 3,
          header: "Giv os dine 'bollebilletter'",
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'          }
      ]
    }
  }
}
</script>
<style>
.link {
  font-weight: bold;
}

</style>