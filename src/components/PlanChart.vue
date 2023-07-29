<script setup >
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'
import DietDetail from '../views/DietDetail.vue';
import doghnutsChart from '../components/doghnutsChart.vue'
import { Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
const dietDialogEditVisible = ref(false)
const dialogEditUpdate = (value) => {
  dietDialogEditVisible.value = value
}
</script>

<template>
  <div class="row justify-content-center">
    <div> <el-button :icon="Edit" @click="dietDialogEditVisible = true">飲食</el-button></div>
    <div class="row mt-5">
      <div class="col-lg-6">
        <div class="chart">
          <PieChart></PieChart>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="chart">
          <BarChart></BarChart>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-6">
        <el-text>全榖雜糧類</el-text>
        <el-text>豆魚蛋肉類</el-text>
        <el-text>乳品類</el-text>
        <el-text>蔬菜類</el-text>
        <el-text>水果類</el-text>
        <el-text>油脂與堅果種子類</el-text>
      </div>
      <div class="col-lg-6">
        <div class="chart">
          <doghnutsChart></doghnutsChart>
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="dietDialogEditVisible" title="更改設定" width="30%">
    <DietDetail :dialogEditVisible="dietDialogEditVisible" @dialogEditUpdate="dialogEditUpdate(value)"></DietDetail>
  </el-dialog>
</template>

<style scoped></style>