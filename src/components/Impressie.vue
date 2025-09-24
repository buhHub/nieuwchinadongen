<template>
  <div class="impressie-container">
    <FadeInOnScroll left>
      <v-sheet
        color="#FFFFFFFFA0"
        :width="mdAndUp ? '60%' : null"
        :height="mdAndUp ? '60vh' : null"
        class="d-flex justify-center align-center pa-8 elevation-12"
      >
        <div class="d-flex-column ga-2" :style="`max-width: ${mdAndUp ? '60%' : '100%'};`">
          <span class="text-h6">Kwaliteit is onze reclame</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, saepe nesciunt quisquam et ab temporibus nobis delectus perspiciatis quae sapiente quam placeat eum alias amet quia sint officia cupiditate earum.
          </span>
          <v-img
            v-if="!mdAndUp"
            :src="Impressie1"
            aspect-ratio="2"
            cover
            class="mt-2"
          ></v-img>
        </div>
      </v-sheet>
    </FadeInOnScroll>
    <FadeInOnScroll right class="scroll-container">
      <v-img
        v-if="mdAndUp"
        :src="Impressie1"
        width="100%"
        aspect-ratio="1"
        cover
        class="impressie-foto-container elevation-24"
      ></v-img>
    </FadeInOnScroll>
  </div>
</template>

<script setup>
  import FadeInOnScroll from './FadeInOnScroll';
  import { useDisplay } from 'vuetify'
  import Impressie1 from '../assets/impressie_foto_1.jpg';

  const { mdAndUp } = useDisplay();
</script>

<style scoped lang="scss">
  .impressie-container {
    position: relative;
  }
  .scroll-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
  }
  .impressie-foto-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: 2;
  }
</style>
