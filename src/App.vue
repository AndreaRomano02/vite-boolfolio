<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      projectLinks: [],
    }
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then(res => {
        this.projects = res.data.projects.data;
        this.projectLinks = res.data.projects.links;
        console.log(this.projects)
      })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>
 
<template>
  <main class="container">
    <h1>Projects</h1>
    <div class="row row-cols-3 gap-3">
    </div>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titolo</th>
          <th scope="col">Tipo</th>
          <th scope="col">Linguaggi</th>
          <th scope="col">Descrizione</th>
          <th scope="col">Link</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <ProjectCard v-if="projects.length" class="col" v-for="project in projects" :key="project.id"
          :project="project" />
        <tr v-else>
          <td colspan="7" class="text-center">
            <h1>NON CI SONO PROGETTI</h1>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
 
<style scoped></style>