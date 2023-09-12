<script>
import axios from 'axios';
const baseUri = 'http://127.0.0.1:8000/api/projects/'
export default {
  data() {
    return {
      project: null,
      isLoading: false,
    }
  },
  methods: {
    fetchProject() {
      this.isLoading = true
      const endpoint = baseUri + this.$route.params.id;
      axios.get(endpoint).then(res => {
        this.project = res.data.project;
      }).catch(err => { console.error(err) })
        .then(() => {
          this.isLoading = false
        })
    }
  },
  created() {
    this.fetchProject();
  }
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div v-else class="card container my-5">
    <img class="card-img-top" v-if="project.image" :src="project.image" :alt="project.title">
    <h1 class="card-title"> {{ project.title }}</h1>
    <div class="card-body">
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>