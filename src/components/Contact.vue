<template>
  <v-sheet
    color="#FFFFFFE0"
    class="px-8 elevation-12 d-flex align-center"
    height="24rem"
  >
    <v-row>
      <v-col cols="6">
        <div class="d-flex-row fill-height justify-md-center">
          <div class="d-flex-column ga-4">
            <div class="d-flex-column">
              <span class="text-h6">Contact gegevens</span>
              <span>+31 162 31 27 72</span>
              <span>+31 6 22 88 00 89</span>
              <span>nieuwchinadongen@outlook.com</span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="d-flex-row fill-width fill-height">
          <div class="d-flex-column justify-md-center align-center fill-width">
            <div>
              <span class="text-h6 fill-width">Openingstijden</span>
              <div>
                <div
                  v-for="entry in schedule"
                  :key="entry.id"
                  class="d-flex-row justify-space-between ga-4"
                  :class="{ 'font-weight-bold': dayName === entry.day}"
                >
                  <span>{{ entry.day }}:</span><span>{{ entry.time }}</span>
                </div>
              </div>
            </div>
            </div>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
  const schedule = [
    { id: 1, day: 'Maandag', time: '16:00 - 21:00' },
    { id: 2, day: 'Dinsdag', time: 'Gesloten' },
    { id: 3, day: 'Woensdag', time: '16:00 - 21:00' },
    { id: 4, day: 'Donderdag', time: '16:00 - 21:00' },
    { id: 5, day: 'Vrijdag', time: '16:00 - 21:00' },
    { id: 6, day: 'Zaterdag', time: '12:00 - 21:00' },
    { id: 0, day: 'Zondag', time: '12:00 - 21:00' },
    { id: 'x', day: 'Feestdagen', time: '12:00 - 21:00' },
  ]

  const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
  const today = new Date();
  const dayName = days[today.getDay()];
</script>

<style scoped lang="sass">
</style>
