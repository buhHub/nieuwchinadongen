<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
  //
</script>

<style lang="scss">
  .d-flex-row {
    display: flex;
    flex-direction: row;
  }
  
  .d-flex-column {
    display: flex;
    flex-direction: column;
  }
  
  .gapped {
    gap: 16px;
  }
  .sticky-top {
    position: sticky;
    top: 0px;
    z-index: 2;
  }
  .fill-width {
    width: 100% !important;
  }
  .clickable {
    cursor: pointer;
  }
  .square-button {
    min-width: 28px;
    padding: 0;
  }
  </style>
  