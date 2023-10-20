<template>
  <v-app>

      <navbar-item/>
      <router-view />
      <footer-par/>
   
  </v-app>
</template>

<script setup>
 import NavbarItem from './components/NavbarItem.vue';
 import FooterPar from './components/FooterPar.vue';

</script>
