<template>
  <div class="d-flex-column ga-8">
    <Wallpaper double></Wallpaper>
    <AppBar
      scroll-behavior="inverted hide"
      :scroll-threshold="windowHeight"
    ></AppBar>
    <Header></Header>
    <v-container max-width="1080" class="d-flex-column ga-16 mb-8">
      <Impressie></Impressie>
      <FadeInOnScroll left>
        <Location></Location>
      </FadeInOnScroll>
      <FadeInOnScroll left>
        <Contact></Contact>
      </FadeInOnScroll>
    </v-container>
  </div>
</template>

<script setup>
  import logoNieuwChina from '../assets/logo_nieuwchina.png';

  import Header from '../components/Header';
  import Impressie from '../components/Impressie';
  import Location from '../components/Location';
  import Contact from '../components/Contact';
  import FadeInOnScroll from '../components/FadeInOnScroll';
  
  const windowHeight = window.innerHeight;

  const route = useRoute();
</script>
