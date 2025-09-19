<template>
  <v-sheet
    color="#00000060"
    class="d-flex justify-center align-center pa-4 elevation-12"
    height="100dvh"
  >
    <div class="d-flex-column ga-2 align-center" style="max-width: 50%;">
      <v-img
        :src="LogoWhite"
        width="300"
      ></v-img>
      <div class="d-flex-column ga-4 align-center fill-width">
        <v-btn class="flex-grow-1" block variant="tonal" color="white" to="/menu">
          Menu bekijken
        </v-btn>
        <v-btn class="flex-grow-1" block variant="tonal" color="white">
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
        <v-btn class="flex-grow-1" block variant="tonal" color="white" href="tel:0162-312772">
          Reserveren
        </v-btn>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
  import { useDisplay } from 'vuetify'
  import LogoWhite from '../assets/logo_nieuwchina_white.png';

  const { mobile } = useDisplay();
</script>

<style scoped lang="scss">
</style>
