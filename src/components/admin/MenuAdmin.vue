<template>
  <div class="d-flex-column ga-8">
    <span class="text-h5 font-weight-bold">Afhaalmenu</span>
    <div class="d-flex-column ga-8">
      <v-fade-transition group>
        <template
          v-for="(entry, index) in menuCategoriesOrdered"
          :key="entry.text"
        >
          <div class="d-flex-column align-center ga-2">
            <v-row class="fill-width" no-gutters>
              <v-col></v-col>
              <v-col>
                <div class="title-container d-flex-row align-center pl-8 ga-4 justify-center justify-self-center">
                  <span class="font-weight-bold">{{ entry.text }}</span>
                  <v-btn class="square-button" variant="text">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col>
                <div class="d-flex-row justify-end align-center ga-4">
                  <v-btn
                    variant="tonal"
                    class="square-button"
                    :disabled="index === orderCategories.length - 1"
                    @click="switchPositions(index)"
                  >
                    <v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                  <v-btn
                    variant="tonal"
                    class="square-button"
                    :disabled="index === 0"
                    @click="switchPositions(index - 1)"
                  >
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <div class="fill-width">
              <div
                v-for="item in entry.items ?? []"
                :key="item.id"
                class="d-flex-row justify-space-between align-end"
              >
                <div class="d-flex flex-md-row flex-column menu-item-title-container">
                  <span>{{ item.id }}. {{ item.text }}</span>
                  <span v-if="item.subtext" class="text-caption pl-2">
                    ({{ item.subtext }})
                  </span>
                </div>
                <div class="dots mx-2"></div>
                <span class="align-self-start">€ {{ item.price.toFixed(2) }}</span>
              </div>
            </div>
            <v-btn variant="tonal" block>
              Nieuw item toevoegen aan '{{ entry.text }}'
            </v-btn>
          </div>
        </template>
      </v-fade-transition>
    </div>
  </div>
</template>

<script setup>
  import menuData from '../../consts/menu';
  import voordeelmenuData from '../../consts/voordeelmenus';

  const router = useRouter();
  const route = useRoute();

  const orderCategories = ref(menuData.map((i) => i.text));
  const menuCategoriesOrdered = computed(() => {
    return orderCategories.value.map((text) => menuData.find((cat) => cat.text === text));
  });

  function switchPositions(firstIndex) {
    const temp = orderCategories.value[firstIndex];
    orderCategories.value[firstIndex] = orderCategories.value[firstIndex + 1];
    orderCategories.value[firstIndex + 1] = temp;
  };
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
