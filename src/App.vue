<template>
  <div id="app">
  <b-navbar sticky toggleable="lg" type="dark" variant="hest">
    <b-navbar-brand href="/">CampHest</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <div v-for="link in links" :key="link.id">
            <b-nav-item :to="link.page">{{ link.text }}</b-nav-item>
          </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <div id="content">
      <router-view/>
    </div>
     <footer>
       <div class="footerinfo">
          <p style="font-size: 1.4rem; font-family: 'Permanent Marker'; font-weight: bold">
            Camp Hest
            <!-- Adding logo inline -->
            <span id="insta_logo">
            <a href="https://www.instagram.com/camp_hest/" target="_blank">
              <img style="float:right;" src="./assets/heste_promo/instagram_logo.png">
            </a>
          </span>
          </p>
          <p>Clean Out Loud</p>
          <p><a href="mailto:camphest@gmail.com?Subject=Vriiinsk" style="padding-left:0" target="_top">camphest@gmail.com</a></p>
          <p><a href="https://www.instagram.com/camp_hest" style="padding-left:0">@camp_hest</a></p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
const AppProps = Vue.extend({
  props: {
  }
})

@Component({
  components: {
  }
})

export default class App extends AppProps {
  links = [
    {
      id: 1,
      text: 'Roskilde',
      page: '/Events'
    },
    /*
    {
      id: 2,
      text: 'Hjælp',
      page: '/Help'
    },
    */
    {
      id: 3,
      text: 'Our stable mates',
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
@import url('//fonts.googleapis.com/css?family=Permanent+Marker:300,400,600,700&amp;lang=en');
@import url('//fonts.googleapis.com/css?family=Roboto:300,400,600,700&amp;lang=en');

@media only screen and (max-width: 480px) {
       h1 { font-size: 0.45rem !important; }
       h2 { font-size: 0.35rem !important; }
       h3 { font-size: 0.3rem !important; }
     }

body {
  margin: 0;
  width: 100%;
  background-position: left 0.75rem;
  background-image: url("./assets/heste_promo/camphest_logo_large.jpg");
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.9) 30%,rgba(255,255,255,0.9) 30%), url("../src/assets/heste_promo/camphest_logo_large.jpg");
  background-size: 200%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #cccccc;
}
#app {
  font-family: 'Roboto Light', 'Roboto', "Arial", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

h1 {
  margin-top: 0.75rem !important;
  margin-bottom: 1rem !important;

}

ul.navbar-nav {
  margin-top: 0;
}
nav, li a.nav-link, a.link-item {
  color: #fd6a02 !important;
  font-size: 1.3rem;
  background: #000000;
  font-family: 'Permanent Marker';
}

.bg-hest {
  background-color:black !important;
}

#content {
  min-height: 100vh;
}

#nav-collapse.navbar-collapse.collapse, nav{
  height: 4rem;
}

img {
  margin: 0;
  width: 100%;
  margin-bottom: 0.25rem;
  justify-content: center;

}

p, h1, h2 {
  font-weight: normal;
  padding-left: 0.525rem;
  padding-right: 0.525rem;
}

h1 {
  font-family: 'Permanent Marker';
  background-color:#fd6a02;
  color:#ffffff;
  display: inline;
  margin-left: 1.025rem;
  margin-right: 1.025rem;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
  margin-left: 0.525rem;
  margin-right: 0.525rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 0.25rem;
}

p a {
    font-size: 1.3rem;
    text-decoration: none !important;
}

#insta_logo img {
    margin: 1.025rem;
    height: 2rem;
    width: 2rem;
}
#insta_logo a:hover {
    background-color: #000000;
    color: #fd6a02;
}
a {
  color: #fd6a02;
  text-decoration: none;
  padding: 0.125rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
a:hover {
  /*text-decoration: underline !important;*/
  background:#222831;
  text-decoration: none !important;
  color: #fd6a02 !important;
}
footer {
  width: 100%;
  position: absolute;
  margin: 0;
  padding: 0.4rem 0 0.4rem 0;
  padding-bottom: 1rem;
  background-color: #000000;
  color: #fd6a02;
}
.footerinfo p, .footerinfo p a {
  font-size: 1rem;
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
  padding-left: 0.525rem;
  text-decoration: none !important;
  color: #fd6a02 !important;
}

p.marker {
  font-size: 1.6rem;
  font-family:'Permanent Marker';
}
.under_header {
  margin-top: 0.525rem;
}

</style>
