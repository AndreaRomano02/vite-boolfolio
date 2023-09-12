<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
}


</script>
 
<template>
  <AppHeader />
  <main class="container my-4">
    <RouterView />
  </main>
</template>
 
<style scoped></style>