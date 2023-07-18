<script setup >
import BarChart from '../components/BarChart.vue'
import LineChart from '../components/LineChart.vue'
import PieChart from '../components/PieChart.vue'
</script>

<template>
    <div class="row justify-content-center">
          <div class="chart">
            <BarChart></BarChart>
          </div>
          <div class="row mt-5">
            <div class="col-lg-6">
              <div class="chart">
                <LineChart></LineChart>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="chart">
                <PieChart></PieChart>
              </div>
            </div>
          </div>
        </div>
</template>

<style scoped>
    
</style>