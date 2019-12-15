<template>
  <v-layout row pa-3 id="layout">
    <h1>Average movies grade per year</h1>
    <v-flex xs12>
      <v-simple-table
        height="500px"
        :dense="false"
        :fixed-header="true"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Year</th>
              <th class="text-left">Average Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in grades" :key="item.name">
              <td>{{ item._id }}</td>
              <td>{{ item.AvgRank }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    source: String,
  },
  data () {
    return {
      grades : []
    }
  },
  mounted () {
    axios.get('http://localhost:8000/movie/year')
    .then((res) => {
      this.grades = res.data.data;
      console.log(res);
    }).catch(function(err) {
      console.log(err);
    });
  }
}
</script>

<style>
#layout {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 0%;
}
</style>