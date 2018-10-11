<template>
    <div>
      <v-alert type="error" :value="error">{{error}}</v-alert>
      <v-container v-if="!error" grid-list-md>
        <v-layout row wrap>
          <contact v-for="contact in contacts" :key="contact.id" :person="contact"/>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Contact from '@/components/Contact.vue'

export default {
  components: { Contact },
  computed: mapState(['contacts', 'error']),
  created() {
    this.$store.dispatch('getContacts')
  }
}
</script>

<style scoped>
</style>
