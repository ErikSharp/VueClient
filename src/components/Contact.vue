<template>
  <v-flex xs6>
    <v-card color="indigo" class="white--text">
      <v-layout>
        <v-flex xs5>
          <v-img :src="person.imageUrl" contain></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <h3>{{`${person.first} ${person.last}`}}</h3>
            <p>{{person.description}}</p>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    person: Object
  }
}
</script>

<style scoped>
</style>
