<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>IMDB Research App</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <MoviePerYear/>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">By Joakim VO, Germinal CORREIA et Charles BENIZRI</span>
    </v-footer>
  </v-app>
</template>

<script>
import MoviePerYear from './MoviePerYear';

export default {
  components: {
    MoviePerYear,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>