<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
const prop = defineProps({
  datas: Object
})
console.log(prop.datas)
const data = {
  labels: ['全榖雜糧類', '豆魚蛋肉類', '乳品類', '蔬菜類', '水果類', '油脂與堅果種子類'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#7A09FF', '#0430E0'],
      data: [prop.datas.Cereals, prop.datas.eggMeat, prop.datas.milk
        , prop.datas.vegetable, prop.datas.fruit, prop.datas.oil
      ]
    }
  ]
}
const options = {
  responsive: true,
  maintainAspectRatio: false
}
ChartJS.register(ArcElement, Tooltip, Legend)
</script>
  