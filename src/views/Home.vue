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
  data() {
    return {
      busy: false
    }
  },
  computed: mapState(['contacts', 'error']),
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
