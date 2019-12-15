<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>IMDB Research App</v-toolbar-title>
    </v-app-bar>

    <v-tabs color="#EEE" v-model="currentTab" centered>
          <v-tabs-slider color="blue"></v-tabs-slider>
          <v-tab key="1" href="#tab-1">Home</v-tab>
          <v-tab key="2" href="#tab-2">Average Grade Per Year</v-tab>
          <v-tab key="3" href="#tab-3">Services</v-tab>
          <v-tab key="4" href="#tab-4">API&Contact</v-tab>
          <v-tab key="5" href="#tab-5">French</v-tab>

          <v-tabs-items v-model="currentTab">
            <v-tab-item key="1" value="tab-1">
              <H1>Welcome on our IMDB Research App.<br>
              This is the project we made for the "Développement d'Applications Cloud" class at ESILV.</H1>
            </v-tab-item>
            <v-tab-item key="2" value="tab-2">
              <MoviePerYear/>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
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
    currentTab: "tab-1",
  }),
}
</script>