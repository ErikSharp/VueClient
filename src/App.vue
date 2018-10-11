<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="goHome">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goAbout">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="primary" app>
      <v-layout row>
        <v-flex xs2 text-xs-center class="secondary--text">
          &copy; 2018
        </v-flex>
        <v-flex xs10 justify-end>
          <v-progress-circular v-show="busy" indeterminate color="secondary"></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'home' })
    },
    goAbout() {
      this.$router.push({ name: 'about' })
    }
  },
  computed: mapState(['busy'])
}
</script>

<style scoped>
</style>
