<template>
    <div> <Pie :data="data" :options="options" /></div>
   
  </template>
   <style scoped>
   div {
        border:1px solid
        
       }      
</style>
  <script lang="ts">
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  import * as chartConfig from '../js/chartConfig.js'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      Pie
    },
    data() {
      return chartConfig
    }
  }
  </script>
  