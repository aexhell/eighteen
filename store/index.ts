import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
   state: () => ({
      height: 0,
      paddingTop: 0,
   }),
   actions: {
      increment(h = 0, pt = 0) {
         this.height = h;
         this.paddingTop = pt;
      },
   },
});
