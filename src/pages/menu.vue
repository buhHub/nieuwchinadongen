<template>
  <div class="d-flex-column ga-8">
    <v-app-bar
      color="transparent"
      flat
      class="d-flex-row justify-start"
    >
      <v-img
        :src="logoNieuwChina"
        height="48"
        width="120"
        inline
      ></v-img>
    </v-app-bar>
    <v-container max-width="1080" class="d-flex-column ga-16">
      <span class="text-h5">Menu</span>

    </v-container>
  </div>
</template>

<script setup>
  import logoNieuwChina from '../assets/logo_nieuwchina.png';

  import Header from '../components/Header';
  import Location from '../components/Location';
  import Impressie from '../components/Impressie';
</script>
