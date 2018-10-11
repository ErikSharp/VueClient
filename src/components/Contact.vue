<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-img :src="person.imageUrl" contain></v-img>
    <v-card-title primary-title>
      <h3>{{`${person.first} ${person.last}`}}</h3>
      <p>{{person.description}}</p>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    person: Object
  },
  created() {
    console.log('got here too')
  }
}
</script>

<style scoped>
</style>
