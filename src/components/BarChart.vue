<template>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>
<style scoped>
div {
  border: 1px solid
}
</style>
<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { ref } from 'vue'
const prop =defineProps({
  sum: Number
})
const number =ref(0)
const fetchData = async () => {
        try {
                if(prop.sum!=null){
                 const result = await prop.sum;
                 number.value = result;
                 console.log(number.value)
                }          
        } catch (error) {
                console.error('Error fetching data:', error);
        }
}
fetchData()
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const name = 'BarChart'
const chartData = ref({
  labels: ['7/28', '7/29', '7/30', '7/31', '8/1', '8/2', 'now'],
  datasets: [{
    label: '卡路里',
    data: [2030, 1988, 2033, 1865, 2133, 1977, number.value],
    backgroundColor: '#f87979',
  }]
})
const chartOptions = ref({
  responsive: true
})
</script>