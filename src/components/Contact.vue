<template>
  <v-flex xs6>
    <v-card color="secondary" class="accent--text">
      <v-layout @click="onClickContact">
        <v-flex xs5>
          <v-img height="125px" :src="person.imageUrl" contain></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div class="headline">{{`${person.first} ${person.last}`}}</div>
            <div>{{person.description}}</div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
    <v-snackbar v-model="snackbar" top>
      {{`You clicked on ${person.first} ${person.last}`}}
      <v-btn
        color="primary"
        flat
        @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-flex>
</template>

<script>
export default {
  props: {
    person: Object
  },
  data() {
    return {
      snackbar: false
    }
  },
  methods: {
    onClickContact() {
      this.snackbar = true
    }
  }
}
</script>

<style scoped>
</style>
