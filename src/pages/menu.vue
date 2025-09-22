<template>
  <div class="d-flex-column ga-8">
    <v-app-bar
      color="background"
      class="d-flex-row justify-start px-4"
      scroll-behavior="elevate"
      scroll-threshold="20"
    >
      <v-img
        :src="logoNieuwChina"
        height="48"
        width="120"
        inline
        class="cursor-pointer"
        @click="router.push({ path: '/' })"
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
    <v-container max-width="1080" class="d-flex-column ga-16">
      <span class="text-h5">Menu</span>
      <div class="d-flex-column ga-8">
        <div
          v-for="entry in menuData"
          :key="entry.text"
          class="d-flex-column align-center ga-2"
        >
          <div class="title-container d-flex-row align-center justify-center">
            <span class="font-weight-bold">{{ entry.text }}</span>
          </div>
          <div class="fill-width">
            <div
              v-for="item in entry.items ?? []"
              :key="item.id"
              class="d-flex-row justify-space-between align-end"
            >
              <span>{{ item.id }}. {{ item.text }}</span>
              <span v-if="item.subtext" class="text-caption pl-2">({{ item.subtext }})</span>
              <div class="dots mx-2"></div>
              <span>€ {{ item.price.toFixed(2) }}</span>
              <div v-if="shoppingStore.hasItem(item.id)" class="d-flex-row ga-2">
                <v-btn size="x-small" variant="tonal" class="ml-2 mb-1" @click="shoppingStore.decreaseItem(item.id)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span>{{ shoppingStore.getByItemId(item.id)?.amount }}</span>
              </div>
              <v-btn size="x-small" variant="tonal" class="ml-2 mb-1" @click="shoppingStore.addItem(item.id)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
  import logoNieuwChina from '../assets/logo_nieuwchina.png';

  import Header from '../components/Header';
  import Location from '../components/Location';
  import Impressie from '../components/Impressie';

  import menuData from '../consts/menu';

  const router = useRouter();
  const route = useRoute();

  import { useShoppingStore } from '../stores/shopping';
  const shoppingStore = useShoppingStore();
</script>

<style lang="scss" scoped>
  .dots {
    flex-grow: 1;
    height: 1em;
    background-image: repeating-linear-gradient(
      to right,
      black 0,
      black 2px,
      transparent 2px,
      transparent 6px
    );
    background-size: auto 1px;
    background-repeat: repeat-x;
    background-position: center;
  }
  .title-container {
    position: relative;
    min-height: 1.75rem;
    padding: 0 1rem;
    /* background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 5%,
      rgba(210, 180, 140, 1) 20%,
      rgba(210, 180, 140, 1) 80%,
      rgba(255, 255, 255, 0) 95%
    ); */
    background-color: rgba(210, 180, 140, 1);
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: -20%;
      width: 20%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 20%,
        rgba(210, 180, 140, 1) 80%,
      );
    }
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      right: -20%;
      width: 20%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(210, 180, 140, 1) 20%,
        rgba(255, 255, 255, 0) 80%,
      );
    }
  }
</style>
