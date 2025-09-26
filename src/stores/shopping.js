// Utilities
import { defineStore } from 'pinia'
import menuData from '../consts/menu';
import voordeelmenusData from '../consts/voordeelmenus';

const menuItems = [
  ...menuData.reduce((acc, sample) => [...acc, ...sample.items], []),
  ...voordeelmenusData,
];

export const useShoppingStore = defineStore('shopping', {
  persist: true,
  state: () => ({
    timestamp: null,
    items: [],
  }),
  actions: {
    updateTimestamp() {
      this.timestamp = new Date();
    },
    addItem(itemId) {
      console.log(menuItems);
      if (!itemId) return;
      const itemIndex = this.items.findIndex((i) => i.id === itemId);
      if (itemIndex >= 0) {
        const item = this.items[itemIndex];
        this.items.splice(itemIndex, 1, { ...item, amount: item.amount + 1 });
      } else {
        this.items.push({
          id: itemId,
          amount: 1,
        });
      }
      this.updateTimestamp();
    },
    decreaseItem(itemId) {
      if (!itemId) return;
      const itemIndex = this.items.findIndex((i) => i.id === itemId);
      if (itemIndex >= 0) {
        const item = this.items[itemIndex];
        if (item.amount === 1) {
          this.items.splice(itemIndex, 1);
        } else {
          this.items.splice(itemIndex, 1, { ...item, amount: item.amount - 1 });
        }
      }
      this.updateTimestamp();
    },
    removeItem(itemId) {
      if (!itemId) return;
      this.items = this.items.filter((i) => i.id !== itemId);
      this.updateTimestamp();
    },
    resetState() {
      this.timestamp = null;
      this.items = [];
    },
    emptyStorage() {
      this.resetState();
      localStorage.removeItem('shopping');
    },
  },
  getters: {
    getItems: (state) => state.items.map((item) => ({
      ...item,
      ...menuItems.find((i) => i.id === item.id),
    })),
    hasItem: (state) => (itemId) => state.items.some((item) => itemId === item.id),
    getByItemId: (state) => (itemId) => state.items.find((item) => itemId === item.id),
    hasItems: (state) => state.items.length > 0,
    itemsPrice: (getters) => getters.getItems.reduce((acc, sample) => acc + (sample.price * sample.amount), 0).toFixed(2),
  },
})
