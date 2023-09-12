<script>
export default {
  props: {
    project: Object,
  }
}
</script>
 
<template>
  <tr>
    <!--  * ID -->
    <th class="align-middle">{{ project.id }}</th>

    <!--  * Titolo -->
    <th class="align-middle">{{ project.title }}</th>

    <!--  * Tipo -->
    <th class="align-middle text-center">
      <span v-if="project.type" class="badge rounded-pill" :style="{ 'background-color': project.type.color }">{{
        project.type.label }}</span>

      <span v-else>-</span>
    </th>

    <!--  * Linguaggio -->
    <th class="align-middle text-center py-5 w-25">
      <span v-if="project.technologies" v-for="technology in project.technologies" :key="technology.id"
        class="badge rounded-pill me-2 mb-2" :style="{ 'background-color': technology.color }">{{
          technology.label }}</span>

      <span v-else>-</span>
    </th>

    <!--  * Descrizione -->
    <td class="align-middle">{{ project.description.substr(0, 50) + '...' }}</td>

    <!--  * Link GitHub -->
    <td class="align-middle"><a href="{{ project.url }}" target="_blank">Apri in GitHub</a></td>

    <!-- * Info button -->
    <td class="align-middle">
      <RouterLink class="btn btn-info" to="/"><i class="fas fa-eye"></i></RouterLink>
    </td>
  </tr>
</template>
 
<style scoped></style>