<template>
  <v-sheet
    color="#FFFFFFE0"
    class="pa-8 elevation-12"
  >
    <v-row>
      <v-col cols="12" md="5">
        <div class="d-flex-row fill-height justify-md-center align-center">
          <div class="d-flex-column ga-4">
            <div class="d-flex-column">
              <span class="text-h6">Locatie</span>
              <span>Hoge Ham 105</span>
              <span>5104 JC, Dongen</span>
              <span>Noord-Brabant, Nederland</span>
            </div>
            <div class="d-flex-row">
              <v-btn
                variant="tonal"
                prepend-icon="mdi-directions"
                href="https://www.google.com/maps/dir/your+location/Nieuw+China+Dongen,+Hoge+Ham+105,+5104+JC+Dongen/"
                target="_blank"
              >
                Open in Google Maps
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <v-card height="500" flat>
          <l-map
            :zoom="15"
            :center="coords"
            :use-global-leaflet="false"
          >
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            />
            <l-marker :lat-lng="[coords.lat, coords.lon]">
              <l-popup>{{ address }}</l-popup>
            </l-marker>
          </l-map>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
  import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
  
  const address = 'Hoge Ham 105, Dongen'
  const coords = ref({ lat: 51.909, lon: 4.486 }) // fallback
  
  onMounted(async () => {
    try {
      const result = await getCoordinates(address)
      coords.value = result
    } catch (err) {
      console.error(err)
    }
  })
  
  async function getCoordinates(address) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    const data = await response.json()
    if (data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      }
    }
    throw new Error('Address not found')
  }
</script>

<style scoped lang="sass">
</style>
