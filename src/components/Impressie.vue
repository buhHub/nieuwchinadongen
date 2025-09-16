<template>
  <div class="impressie-container">
    <v-sheet
      color="#FFFFFFFFA0"
      width="60%"
      height="60vh"
      class="d-flex justify-center align-center pa-4"
    >
      <div class="d-flex-column ga-2" style="max-width: 50%;">
        <span class="text-h6">Kwaliteit is onze reclame</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, saepe nesciunt quisquam et ab temporibus nobis delectus perspiciatis quae sapiente quam placeat eum alias amet quia sint officia cupiditate earum.
        </span>
      </div>
    </v-sheet>
      <v-img
        :src="Impressie1"
        width="45%"
        aspect-ratio="1"
        cover
        class="impressie-foto-container"
      ></v-img>
  </div>
</template>

<script setup>
  import Impressie1 from '../assets/impressie_foto_1.jpg';
</script>

<style scoped lang="scss">
  .impressie-container {
    position: relative;
  }
  .impressie-foto-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: 2;
  }
</style>
