/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// app/javascript/packs/application.js

// app/javascript/packs/application.js

import App from '../components/app.vue'

import Vue from 'vue/dist/vue.js';

import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import '@dattn/dnd-grid/dist/dnd-grid.css'
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.component('app', App)
document.addEventListener('DOMContentLoaded', () => {
   
  const app = new Vue({
    el: '[data-behavior="vue"]',
  })

  console.log(app)
})