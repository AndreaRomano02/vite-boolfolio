<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      projectLinks: [],
      isLoading: false,
    }
  },
  methods: {
    fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects') {
      this.isLoading = true;
      axios.get(endpoint).then(res => {
        this.projects = res.data.projects.data;
        this.projectLinks = res.data.projects.links;
        console.log(this.projects)
      }).catch(err => console.error(err))
        .then(res => {
          this.isLoading = false
        })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<template>
  <AppLoader v-if="isLoading" />
  <h1 class="text-center my-5">Projects</h1>
  <div class="row row-cols-3 gap-3">
  </div>

  <nav v-if="!isLoading" aria-label="Page navigation example">
    <ul class="pagination">
      <li v-for="link in projectLinks" :class="[{ active: link.active }, { disabled: !link.url }]" class="page-item">
        <button class="page-link" v-html="link.label" @click="fetchProjects(link.url)"></button>
      </li>
    </ul>
  </nav>



  <table v-if="!isLoading" class="table table-dark table-striped">
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
      <ProjectCard v-if="projects.length" class="col" v-for="project in projects" :key="project.id" :project="project" />
      <tr v-else>
        <td colspan="7" class="text-center">
          <h1>NON CI SONO PROGETTI</h1>
        </td>
      </tr>
    </tbody>
  </table>
  <nav v-if="!isLoading" aria-label="Page navigation example">
    <ul class="pagination">
      <li v-for="link in projectLinks" :class="[{ active: link.active }, { disabled: !link.url }]" class="page-item">
        <button class="page-link" v-html="link.label" @click="fetchProjects(link.url)"></button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>