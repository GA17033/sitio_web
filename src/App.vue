<!-- <script setup>
import Nav from "./components/Nav.vue";
import Inicio from "./components/Inicio.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Contacto from "./components/Contacto.vue";
import Footer from "./components/Footer.vue";
import Pdf from "./components/Pdf.vue";
</script>
<template>
  <Nav></Nav>
  <Inicio></Inicio>
  <About></About>
  <Skills></Skills>
  <Portfolio></Portfolio>
  <Contacto></Contacto>

  <Footer></Footer>
</template>
 -->
<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
   <RouterView />
</template>