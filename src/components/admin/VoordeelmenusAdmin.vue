<template>
  <div class="d-flex-column ga-8">
    <v-row>
      <v-col
        v-for="(menu, index) in voordeelmenuData"
        :key="index"
        cols="12"
        md="6"
      >
        <v-card
          :title="menu.id"
          height="100%"
          class="d-flex flex-column"
        >
          <template #title>
            <div class="d-flex-row justify-space-between align-center">
              <span>{{ menu.text }}</span>
              <v-chip v-if="menu.person" prepend-icon="mdi-account" label>
                {{ menu.person[0] }} - {{ menu.person[1] }} personen
              </v-chip>
            </div>
          </template>
          <template #text>
            <div class="d-flex-column">
              <div
                v-for="(item, itemIndex) in menu.contents"
                :key="`${index}-${itemIndex}`"
                class="d-flex"
                :class="{
                  'flex-row': !(item.subtitle?.length > 10),
                  'flex-column': item.subtitle?.length > 10,
                }"
              >
                <span>{{ item.title }}</span>
                <span v-if="item.subtitle" class="text-caption ml-2">
                  ({{ item.subtitle }})
                </span>
              </div>
            </div>
          </template>
          <div class="d-flex-column justify-end flex-grow-1 px-6 pb-4 ga-8">
            <div class="d-flex-row fill-width justify-space-between align-center">
              <div class="d-flex-row ga-2 align-center">
                <template v-if="shoppingStore.hasItem(menu.id)">
                  <v-btn size="x-small" variant="tonal" @click="shoppingStore.decreaseItem(menu.id)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <span>{{ shoppingStore.getByItemId(menu.id)?.amount }}</span>
                </template>
                <v-btn size="x-small" variant="tonal" @click="shoppingStore.addItem(menu.id)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
              <span class="text-h6" style="min-width: fit-content;">
                € {{ menu.price.toFixed(2) }}
              </span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import menuData from '../../consts/menu';
  import voordeelmenuData from '../../consts/voordeelmenus';

  const router = useRouter();
  const route = useRoute();

  import { useShoppingStore } from '../../stores/shopping';
  const shoppingStore = useShoppingStore();
</script>

<style lang="scss" scoped>
  .menu-item-title-container {
    max-width: 70%;
  }
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
