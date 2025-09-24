<template>
  <div class="item-container">
    <img
      v-for="(item, index) in itemList"
      :key="index"
      :src="item.src"
      class="item"
      :style="{ top: `${item.top}px`, left: `${item.left}px`, '--rotate': `${item.rotate}deg` }"
    />
    <img
      :src="treeA"
      class="item tree-bottom-left"
    />
    <img
      :src="treeB"
      class="item tree-top-right"
    />
  </div>
</template>

<script setup>
  import fishA from '../assets/background/fish_a.png';
  import fishB from '../assets/background/fish_b.png';
  import fishC from '../assets/background/fish_c.png';

  import cloudA from '../assets/background/cloud_a.png';
  import cloudB from '../assets/background/cloud_b.png';
  import cloudC from '../assets/background/cloud_c.png';
  import cloudD from '../assets/background/cloud_d.png';

  import treeA from '../assets/background/tree_a.png';
  import treeB from '../assets/background/tree_b.png';

  const props = defineProps({ double: Boolean });

  const itemList = ref([]);

  function generateRandomItems(count = 15, options = [], rotate = false) {
    if (options.length === 0) return;
    if (count <= 0) return;

    const items = [];
    const pageHeight = (document.body.scrollHeight - 80);
    const pageWidth = (document.body.scrollWidth - 80);

    for (let i = 0; i < count; i++) {
      items.push({
        src: options[Math.floor(Math.random() * (options.length))],
        top: Math.random() * pageHeight * ( props.double ? 1.8 : 1),
        left: Math.random() * pageWidth,
        rotate: rotate ? Math.random() * 360 : 0,
      });
    }
    itemList.value = [...itemList.value, ...items];
  };

  function generate() {
    generateRandomItems(15, [fishA, fishB, fishC], true);
    generateRandomItems(15, [cloudA, cloudB, cloudC, cloudC], false);
  };

  onMounted(() => {
    generate();
  })
</script>

<style scoped>
.item-container {
  position: absolute;
  width: 100%;
  height: auto;
  pointer-events: none; /* So it doesn't block clicks */
  z-index: 0;
}

.item {
  position: absolute;
  width: 80px;
  opacity: 0.4;
  transform: rotate(var(--rotate));
}

.tree-top-right {
  top: 0px;
  right: 0px;
  transform: scale(5) translateX(-40%) translateY(40%);
}
.tree-bottom-left {
  bottom: 0px;
  left: 0px;
  transform: scale(5) translateX(40%) translateY(-40%);
}
</style>
