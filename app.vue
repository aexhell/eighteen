<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const details = ref({
  name: 'Aexhell',
  description: 'Digital architect weaving the virtual tapestry of the internet, fabricating immersive online experiences.'
})

useServerSeoMeta({
  ogSiteName: details.value.name,
  ogTitle: details.value.name,
  description: details.value.description,
  ogDescription: details.value.description,
  themeColor: '#CCC9C4',
  ogImage: '/banner.png',
  twitterCard: 'summary_large_image',
  twitterDescription: details.value.description
});
</script>
