<template>
  <v-app-bar
    color="background"
    class="d-flex-row justify-start px-4"
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
    <v-btn v-if="mobile || smAndDown" variant="tonal">
      <v-icon>mdi-menu</v-icon>
      <v-menu activator="parent" max-width="240">
        <v-card>
          <v-list>
            <v-list-item
              v-for="(btn, index) in buttons"
              :key="index"
              :title="btn.text"
              :disabled="btn.disabled"
              :href="btn.href"
              :to="btn.to"
              @click="model = btn.text"
            ></v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-btn>
    <div v-else class="d-flex-row ga-4">
      <v-btn
        v-for="(btn, index) in buttons"
        :key="index"
        v-bind="btn"
        @click="model = btn.text"
      ></v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
  import logoNieuwChina from '../../assets/logo_nieuwchina.png';

  const router = useRouter();
  const route = useRoute();

  import { useDisplay } from 'vuetify'
  const { mobile, smAndDown } = useDisplay();

  const openDialog = ref(false);

  const model = defineModel();

  const buttons = [
    {
      class: 'flex-grow-1',
      variant: 'tonal',
      text: 'Afhaalmenu',
    },
    {
      class: 'flex-grow-1',
      variant: 'tonal',
      text: 'Menus',
    },
    {
      class: 'flex-grow-1',
      variant: 'tonal',
      text: 'Meldingen',
    },
  ];
</script>

<style scoped lang="sass">
</style>
