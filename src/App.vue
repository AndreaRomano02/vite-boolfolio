<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
}


</script>
 
<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>
 
<style scoped></style>