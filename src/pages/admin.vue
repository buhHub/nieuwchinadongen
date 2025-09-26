<template>
  <div class="d-flex-column ga-8">
    <Wallpaper></Wallpaper>
    <AppBarAdmin v-model="settingsModel"></AppBarAdmin>
    <v-container max-width="1080" class="d-flex-column ga-16 mb-8">
      <v-fade-transition leave-absolute>
        <template
          v-if="settingsModel === 'Afhaalmenu'"
        >
          <MenuAdmin></MenuAdmin>
        </template>
        <template
          v-else-if="settingsModel === 'Menus'"
        >
          <VoordeelmenusAdmin></VoordeelmenusAdmin>
        </template>
        <template
          v-else-if="settingsModel === 'Meldingen'"
        >
          c
        </template>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script setup>
  import logoNieuwChina from '../assets/logo_nieuwchina.png';
  
  const windowHeight = window.innerHeight;

  const route = useRoute();

  const settingsModel = ref('Afhaalmenu');
</script>
