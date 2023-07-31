<template>
  <Doughnut :data="data" :options="options" />
</template>
  
<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

const data = {
  labels: ['全榖雜糧類', '豆魚蛋肉類', '乳品類', '蔬菜類', '水果類', '油脂與堅果種子類'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#7A09FF', '#0430E0'],
      data: [10, 4, 1.5, 3, 2, 4]
    }
  ]
}
const options = {
  responsive: true,
  maintainAspectRatio: false
}
ChartJS.register(ArcElement, Tooltip, Legend)
</script>
  