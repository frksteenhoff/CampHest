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
          <p style="font-size: 30px; font-family: 'Permanent Marker'; font-weight: bold">
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
    {
      id: 2,
      text: 'Hjælp',
      page: '/Help'
    },
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
       h1 { font-size: 18px !important; }
       h2 { font-size: 14px !important; }
       h3 { font-size: 12px !important; }
     }

body {
  margin: 0;
  width: 100%;
  background-position: left 30px;
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
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;

}

ul.navbar-nav {
  margin-top: 0;
}
nav, li a.nav-link, a.link-item {
  color: #fd6a02 !important;
  font-size: 30px;
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
  margin-bottom: 10px;
  justify-content: center;

}
p, h1, h2 {
  font-weight: normal;
  padding-left: 21px;
  padding-right: 21px;
}
h1 {
  font-family: 'Permanent Marker';
  background-color:#fd6a02;
  color:#ffffff;
  display: inline;
  margin-left: 41px;
  margin-right: 41px;
}
p {
  font-size: 1.3rem;
  line-height: 1.4;
  margin-left: 21px;
  margin-right: 21px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
p a {
    font-size: 20px;
    text-decoration: none !important;
}
#insta_logo img {
    margin: 41px;
    height: 40px;
    width: 40px;
}
#insta_logo a:hover {
    background-color: #000000;
    color: #fd6a02;
}
a {
  color: #fd6a02;
  text-decoration: none;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
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
  padding: 16px 0 16px 0;
  padding-bottom: 40px;
  background-color: #000000;
  color: #fd6a02;
}
.footerinfo p, .footerinfo p a {
  font-size: 20px;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
  padding-left: 21px;
  text-decoration: none !important;
  color: #fd6a02 !important;
}
p.top_line {
  font-weight:bold;
}
p.marker {
  font-size: 1.6rem;
  font-family:'Permanent Marker';
}
.under_header {
  margin-top: 21px;
}

</style>
