# INGEN FEST UDEN HEST
Repository for the upcoming Camp Hest website -- it will be *horseome*.

Camp Hest is a concept created at Roskilde Festival. This upcoming website will contain information related to the camp's Roskilde participation, about upcoming events @ Roskilde Festival, pictures, videos -- let's see what we make it!

![Camp Hest Logo](https://github.com/frksteenhoff/CampHest/blob/master/img/camphest.jpg)

## Prerequisites
* NodeJS
* Vue.js

### Instructions
Execute the following command to load dependencies:

```
$ npm install -g vue-cli 
$ npm i vue vue-router
$ npm install
```

### Run the project
``$ npm start``

## Folder structure

```
 ./                              <-- Repository
 ├── ..
 ├── build/                      <-- build files
 ├── config/                     <-- config files
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
 ├── static/                     <-- source code
 ├── .gitignore                  <-- The stuff we don't care about
 ├── manifest.yml                <-- Information for cloud purposes
 ├── package.json                <-- All that formal stuff
 ├── README.md                   <-- The project description made easy
 ├── index.html                  <-- Basic layout details
 └── ...
 ```
