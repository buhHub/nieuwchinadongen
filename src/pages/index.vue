<template>
  <v-container class="d-flex-column ga-16">
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
    <Impressie></Impressie>
    <Location></Location>
  </v-container>
</template>

<script setup>
  import logoNieuwChina from '../assets/logo_nieuwchina.png';

  import Location from '../components/Location';
  import Impressie from '../components/Impressie';
  //
</script>
