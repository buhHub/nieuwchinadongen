<template>
  <div ref="observerRef" class="observer" :class="{ 'is-visible': isVisible }" :style="`--direction: ${styling}`">
    <v-fade-transition>
      <template v-if="isVisible">
        <slot />
      </template>
    </v-fade-transition>
  </div>
</template>

<script setup>
  const props = defineProps({'left': Boolean, 'right': Boolean, 'top': Boolean, 'bottom': Boolean});
  const deficit = '50px';
  const styling = computed(() => {
    if (props.left) {
      return `translateX(-${deficit})`;
    }
    if (props.right) {
      return `translateX(${deficit})`;
    }
    if (props.top) {
      return `translateY(-${deficit})`;
    }
    return `translateY(${deficit})`;
  })

  const observerRef = ref(null)
  const isVisible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect() // Optional: only animate once
      }
    }, { threshold: 0.1 })

    if (observerRef.value) observer.observe(observerRef.value)
  })

  onUnmounted(() => {
    // Clean up if needed
  })
</script>

<style scoped>
  .is-visible {
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    opacity: 1;
    transform: translateY(0);
  }

  div.observer:not(.is-visible) {
    opacity: 0;
    transform: var(--direction);
  }
</style>