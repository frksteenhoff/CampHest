<template>
  <div class="hello">
    <div id="topimg">
      <img src="../assets/heste_promo/camphest_logo_large.jpg" alt="Camp Hest @ Roskilde">
    </div>

    <!-- QUOTES -->
    <!--<div class="quote">
      <blockquote>
        Ingen fest uden hest
      </blockquote>
      <cite>Thue Gram-Hansen</cite>
    </div>-->

    <div class="topics" v-for="topic in front_page_topics" v-bind:key="topic.id"
         :to="`${topic.no}`">
      <h1>{{ topic.header }}</h1>
      <p>{{ topic.desc }}</p>
    </div>

    <!-- IMAGES -->
    <div id="hestebilleder">
      <img src="../assets/heste_fest/hest1.jpg" alt="Camp Hest @ Roskilde">
      <img src="../assets/heste_fest/hest2.jpg" alt="Camp Hest @ Roskilde">
      <img src="../assets/heste_fest/hest3.jpg" alt="Camp Hest @ Roskilde">
      <img src="../assets/heste_fest/hest4.jpg" alt="Camp Hest @ Roskilde">
      <img src="../assets/heste_fest/hest5.jpg" alt="Camp Hest @ Roskilde">
      <img src="../assets/heste_fest/hest6.jpg" alt="Camp Hest @ Roskilde">
      <img src="../assets/heste_fest/hest7.jpg" alt="Camp Hest @ Roskilde"> 
      <img src="../assets/heste_fest/hest8.jpg" alt="Camp Hest @ Roskilde">   
      <img src="../assets/heste_fest/hest1.jpg" alt="Camp Hest @ Roskilde">   
      <img src="../assets/heste_fest/hest6.jpg" alt="Camp Hest @ Roskilde">
      <img src="../assets/heste_fest/hest3.jpg" alt="Camp Hest @ Roskilde"> 
      <img src="../assets/heste_fest/hest4.jpg" alt="Camp Hest @ Roskilde">        
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      front_page_topics: [
        {
          id: 0,
          header: "Hvem er Camp Hest?",
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui dapibus, sagittis neque id, rhoncus augue. Curabitur iaculis cursus ipsum ac fringilla. Curabitur eu lorem ut ligula volutpat viverra in in elit. Fusce malesuada ultrices augue a iaculis. Aliquam varius, eros eu ornare vestibulum, tortor mauris molestie orci, venenatis egestas felis lorem ut sem. Aenean a dui condimentum, efficitur nisi malesuada, sodales purus. Aenean in mi et sem cursus gravida. Nam id tortor nec ligula dignissim ultricies. Vestibulum venenatis eget dolor sodales mollis. Ut porta et risus vitae elementum. Vivamus sodales lorem elit, iaculis ornare enim semper in.'
        }
      ]
    }
  }
}
</script>
<style>
div.topics {
  margin-bottom: 40px;
}

#hestebilleder img {
  transition: .5s ease;
  height: 300px;
  width: 300px;
  margin: 15px;
}

#hestebilleder img:hover {
    opacity: 0.3;

}

#hestebilleder {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

</style>