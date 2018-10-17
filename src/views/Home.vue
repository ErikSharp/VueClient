<template>
    <div>
      <v-alert type="error" :value="error">{{error}}</v-alert>
      <v-container v-if="!error" grid-list-md>
        <v-layout row wrap>
          <contact v-for="contact in contact.contacts" :key="contact.id" :person="contact"/>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Contact from '@/components/Contact.vue'

export default {
  components: { Contact },
  computed: mapState(['contact', 'error']),
  created() {
    this.$store.dispatch('contact/getContacts')
  }
}
</script>

<style scoped>
</style>
