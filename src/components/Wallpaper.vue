<template>
  <div class="fish-container">
    <img
      v-for="(fish, index) in fishList"
      :key="index"
      :src="fishA"
      class="fish"
      :style="{ top: fish.top + 'px', left: fish.left + 'px' }"
    />
  </div>
</template>

<script setup>
import fishA from '../assets/background/fish_a.png';

const fishList = ref([])

function generateRandomFish(count = 5) {
  const fishes = []
  for (let i = 0; i < count; i++) {
    fishes.push({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    })
  }
  fishList.value = fishes
}

onMounted(() => {
  generateRandomFish()
})
</script>

<style scoped>
.fish-container {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; /* So it doesn't block clicks */
  z-index: 0;
}

.fish {
  position: absolute;
  width: 80px;
  opacity: 0.6;
  animation: float 10s infinite ease-in-out;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
</style>
