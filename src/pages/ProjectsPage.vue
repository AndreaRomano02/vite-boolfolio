<script>
import { RouterLink } from 'vue-router';
import ProjectList from '../projects/ProjectList.vue';
export default {
  name: 'ProjectPage',
  components: { ProjectList, RouterLink }
};
</script>

<template>
  <div class="container my-4">
    <RouterLink class="btn btn-info" :to="{ name: 'form-email' }">Invia l'email
    </RouterLink>
    <ProjectList />
  </div>
</template>

<style scoped></style>