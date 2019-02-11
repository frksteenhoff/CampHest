<template>
  <div id="app">
    <header>
      <Navigation></Navigation>
    </header>
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
          <p>Clean Out Loud (det håber vi hvert fald på)</p>
          <p><a href="mailto:camphest@gmail.com?Subject=Vriiinsk" style="padding-left:0" target="_top">camphest@gmail.com</a></p>
          <p><a href="www.linkedin.com/in/frksteenhoff" style="padding-left:0">@frksteenhoff</a></p> 
      </div>
    </footer> 
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
@import url('//fonts.googleapis.com/css?family=Permanent+Marker:300,400,600,700&amp;lang=en');
@import url('//fonts.googleapis.com/css?family=Roboto:300,400,600,700&amp;lang=en');
body {
  margin: 0;
  width: 100%;
  background-position: left 30px;
  background-image: url("./assets/heste_promo/camphest_logo_large.jpg");
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.9) 30%,rgba(255,255,255,0.9) 30%), url("../src/assets/heste_promo/camphest_logo_large.jpg");
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #cccccc;
}
#app {
  font-family: 'Roboto Light';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
header {
  position: fixed;
  width: 100%;
  top:0;
  margin: 0;
  height: 24px;
  padding: 16px 0 16px 24px;
  background-color: #000000;
  color: #fd6a02;
  font-size: 30px;
  line-height: 24px;
  text-align: left;
}

hello {
  padding: 5px;
}

#content {
  padding-top: 55px; /* Should be larger than the height of the header to 
                        ensure that all text is shown correctly */
  min-height: 800px;
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
}
h1 {
  font-family: 'Permanent Marker';
  background-color:#fd6a02;
  color:#ffffff;
  display: inline;
  margin-left: 21px;
  padding-right: 21px;
  margin-top: 21px;
}
p {
  font-size: 26px; 
  line-height: 1.4;
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
}
#insta_logo img {
    margin: 41px;
    height: 40px;
    width: 40px;
}
#insta_logo a:hover {
    background-color: #000000;
}
a {
  color: #fd6a02;
  text-decoration: none !important;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
a:hover {
  /*text-decoration: underline !important;*/
  background:#222831;
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
.footerinfo p {
  font-size: 20px;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
.imglong {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
p.top_line {
  font-weight:bold; 
}
p.end_line {
  margin-top: 4em;
  font-size: 30px; 
  font-family:'Permanent Marker';
}
.under_header {
  margin-top: 21px;
}

</style>