export default defineNuxtRouteMiddleware(async (to, from) => {
   const router = useRouter();
   await router.isReady();

   if (to.path !== from.path && process.client) {
      let main = document.getElementById('__AMILLIONCITIES-CONTENT');
      setTimeout(() => main!.scrollTo(0, 0), 500);
   }
});
