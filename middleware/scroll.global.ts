export default defineNuxtRouteMiddleware((to, from) => {
   if (to.path !== from.path && process.client) {
      let main = document.getElementById('__AMILLIONCITIES-CONTENT');
      setTimeout(() => main.scrollTo(0, 0), 400);
   }
});
