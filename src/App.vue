<template>
  <v-app>
    <router-view />
    <v-fab icon app variant="tonal" position="bottom right">
      <v-icon v-if="shoppingStore.hasItems">mdi-basket</v-icon>
      <v-icon v-else>mdi-basket-outline</v-icon>
      <v-dialog v-model="listDialog" activator="parent" :fullscreen="mobile">
        <v-card>
          <div class="fill-width d-flex-row justify-space-between py-4 px-6 align-center">
            <div class="d-flex-column">
              <span>Lijst opstellen</span>
              <span class="text-caption">
                Stel een lijst op om makkelijk je bestelling te onthouden tijdens het bellen
              </span>
            </div>
            <div class="d-flex-row ga-2">
              <v-btn variant="text" class="square-button">
                <v-icon>mdi-dots-vertical</v-icon>
                <v-menu activator="parent">
                  <v-card>
                    <v-list>
                      <v-list-item
                        title="Lijst legen"
                        @click="shoppingStore.emptyStorage()"
                      ></v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </v-btn>
              <v-btn variant="text" class="square-button" @click="listDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
          <v-divider></v-divider>
          <v-card-text v-if="!shoppingStore.hasItems" class="d-flex-column">
            <div class="d-flex-column ga-2 align-center">
              <span>Ga naar ons menu toe om gerechten toe te voegen</span>
              <div>
                <v-btn variant="tonal" to="/menu" @click="listDialog = false">menu</v-btn>
              </div>
            </div>
          </v-card-text>
          <template v-else>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="item in shoppingStore.getItems" :key="item.id"
                  :title="`${item.id}. ${item.text ?? ''}`"
                >
                  <template #append>
                    <div class="d-flex-row ga-2">
                      <v-btn variant="tonal" size="x-small" @click="shoppingStore.decreaseItem(item.id)">
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      {{ item.amount }}
                      <v-btn variant="tonal" size="x-small" @click="shoppingStore.addItem(item.id)">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                      <div style="width: 6rem;" class="text-end">
                        € {{ (item.amount * item.price).toFixed(2) }}
                      </div>
                    </div>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="text-end px-10 py-4 d-flex-column fill-width ga-4">
              Totaal: € {{ shoppingStore.itemsPrice }}
              <div>
                <v-btn variant="tonal">Bellen</v-btn>
              </div>
            </v-card-text>
          </template>
        </v-card>
      </v-dialog>
    </v-fab>
  </v-app>
</template>

<script setup>
  import { useDisplay } from 'vuetify'
  const { mobile } = useDisplay();

  import { useShoppingStore } from './stores/shopping';
  const shoppingStore = useShoppingStore();

  const listDialog = ref(false);
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
  