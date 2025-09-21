<template>
  <v-app>
    <router-view />
    <v-fab icon="mdi-basket" app variant="tonal" position="bottom right">
      <v-dialog activator="parent" :fullscreen="mobile">
        <v-card>
          <div class="fill-width d-flex-row justify-space-between py-4 px-6 align-center">
            <div class="d-flex-column">
              <span>Lijst opstellen</span>
              <span class="text-caption">
                Stel een lijst op om makkelijk je bestelling te onthouden tijdens het bellen
              </span>
            </div>
            <div class="d-flex-row ga-2">
              <v-btn variant="tonal">Bellen</v-btn>
            </div>
          </div>
          <v-divider></v-divider>
          <v-card-text class="d-flex-column">
            <div class="d-flex-column ga-2 align-center">
              <span>Ga naar ons menu toe om gerechten toe te voegen</span>
              <div>
                <v-btn variant="tonal" to="/menu">menu</v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-fab>
  </v-app>
</template>

<script setup>
  import { useDisplay } from 'vuetify'
  const { mobile } = useDisplay();
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
  