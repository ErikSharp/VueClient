<template>
  <v-card>
    <v-alert type="error" :value="errorMessage">{{errorMessage}}</v-alert>
    <v-container v-if="!errorMessage" grid-list-md>
      <v-layout row wrap>
        <contact v-for="contact in contacts" :key="contact.id" :person="contact"/>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import Contact from '@/components/Contact.vue'

export default {
  components: { Contact },
  data() {
    return {
      busy: false
    }
  },
  computed: {
    ...mapState(['contacts']),
    errorMessage() {
      return this.$store.error ? this.$store.error.errorMessage : null
    }
  },
  created() {
    this.busy = true

    this.$store.dispatch('getContacts').finally(() => {
      this.busy = false
    })
  }
}
</script>

<style scoped>
</style>
