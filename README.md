# INGEN FEST UDEN HEST
Repository for the upcoming Camp Hest website -- it will be horseome.

Camp Hest is a concept created at the Danish Roskilde Festival. This upcoming website will contain information related to the camp's Roskilde participation, about upcoming events @ Roskilde Festival, pictures, videos -- let's see what we make it!

![Camp Hest!](https://github.com/frksteenhoff/CampHest/blob/master/src/assets/heste_promo/camphest_logo_large.jpg)

## Prerequisites
NodeJS
Vue.js

### Instructions
Execute the following command to load dependencies:

$ npm install -g @vue-cli 
$ npm i vue vue-router
$ npm install

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Deploying to IBM cloud
To be able to deploy your changes to the IBM Cloud instance running the web page you need an IBM account. Ask @frksteenhoff for more information.

## Folder structure
```
./                              <-- Repository
 ├── ..
 ├── public/                     <-- if build fails, show this
 ├── dist/                       <-- static build of webpage
 ├── src/                        <-- source code
 │    ├── assets/
 │    │     ├── heste_fest/      <-- Awesome pics of Camp Hest people @ Roskilde
 │    │     ├── heste_mates/     <-- Close-up of the horsies <3
 │    │     ├── heste_promo/     <-- Them logos 
 │    │     └── *.{png, jpg..}   <-- uncategorized images
 │    ├── router/
 │    ├── components/
 │    │     ├── About.vue        <-- Camp Hest who?
 │    │     ├── Contact.vue      <-- Looking for a stable relationship?
 │    │     ├── Events.vue       <-- What do we do @ Roskilde
 │    │     ├── Hello.vue        <-- Front page
 │    │     ├── Navigation.vue   <-- Routing logic
 │    ├── main.js      
 │    └── App.vue                <-- Parent
 │     
 ├── node_modules/               <-- node modules
 ├── .gitignore                  <-- The stuff we don't care about
 ├── .cfignore                   <-- Information neede when pushing to IBM Cloud (Cloud Foundry)
 ├── manifest.yml                <-- Information for cloud purposes
 ├── package.json                <-- All that formal stuff
 ├── README.md                   <-- The project description made easy
 └── ...
```
