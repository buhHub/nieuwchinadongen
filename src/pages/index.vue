<template>
  <div class="d-flex-column ga-8">
    <v-app-bar
      color="background"
      class="d-flex-row justify-start px-4"
      scroll-behavior="inverted hide"
      :scroll-threshold="windowHeight"
    >
      <v-img
        :src="logoNieuwChina"
        height="48"
        width="120"
        inline
      ></v-img>
      <v-spacer></v-spacer>
      <div class="d-flex-row ga-4">
        <v-btn class="flex-grow-1" :disabled="route.path === '/menu'" variant="tonal" to="/menu">
          Menu bekijken
        </v-btn>
        <v-btn class="flex-grow-1" variant="tonal">
          Afhalen
          <v-dialog activator="parent" max-width="240">
            <v-card>
              <v-list>
                <v-list-item href="https://foodtown.nl/nieuwchina" target="_blank">
                  Online
                </v-list-item>
                <v-list-item href="tel:0162-312772">
                  Bellen
                </v-list-item>
              </v-list>
            </v-card>
          </v-dialog>
        </v-btn>
        <v-btn class="flex-grow-1" variant="tonal" href="tel:0162-312772">
          Reserveren
        </v-btn>
      </div>
    </v-app-bar>
    <Header></Header>
    <v-container max-width="1080" class="d-flex-column ga-16">
      <Impressie></Impressie>
      <Location></Location>
    </v-container>
  </div>
</template>

<script setup>
  import logoNieuwChina from '../assets/logo_nieuwchina.png';

  import Header from '../components/Header';
  import Location from '../components/Location';
  import Impressie from '../components/Impressie';
  
  const windowHeight = window.innerHeight;

  const route = useRoute();
</script>
