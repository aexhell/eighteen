import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
   state: () => ({
      cursorX: 0,
      cursorY: 0,
      height: 0,
      paddingTop: 0,
   }),
   actions: {
      updateCursor(x = 0, y = 0) {
         this.cursorX = x;
         this.cursorY = y;
      },
      increment(h = 0, pt = 0) {
         this.height = h;
         this.paddingTop = pt;
      },
   },
});
