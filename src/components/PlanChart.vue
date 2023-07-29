<script setup >
import BarChart from '../components/BarChart.vue'
import DietDetail from '../views/DietDetail.vue'
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
          <doghnutsChart></doghnutsChart>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="chart">
          <BarChart></BarChart>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 Classification" style="height: 10rem; border: 1px solid;">
            <el-text>全榖雜糧類 <span style="font-size: 25px;">10</span> 份</el-text>
            <div>
              <el-text> ➤ 未精緻 <span style="font-size: 18px;">4</span> (份)</el-text>
              <el-text> ➤ 其他 <span style="font-size: 18px;">6</span> (份)</el-text>
            </div>

          </div>
          <div class="col-lg-3 Classification">
            <div class="row" style="height: 5rem; border: 1px solid;">
              <el-text>豆魚蛋肉類 <span style="font-size: 25px;">4</span> 份</el-text>
            </div>
            <div class="row" style="height: 5rem; border: 1px solid;">
              <el-text>乳品類 <span style="font-size: 25px;">1.5</span> 份</el-text>
            </div>
          </div>
          <div class="col-lg-3 Classification">
            <div class="row" style="height: 5rem;border: 1px solid;">
              <el-text>蔬菜類 <span style="font-size: 25px;">3</span> 份</el-text>
            </div>
            <div class="row" style="height: 5rem; border: 1px solid;">
              <el-text>水果類 <span style="font-size: 25px;">2</span> 份</el-text>
            </div>
          </div>
          <div class="col-lg-3 Classification" style="height: 10rem;border: 1px solid;">
            <el-text>油酯與堅果種子類 <span style="font-size: 25px;"> 4 </span>份</el-text>
            <div>
              <el-text>➤油酯類 <span style="font-size: 18px;">3</span> (份)</el-text>
              <el-text>➤堅果類 <span style="font-size: 18px;">1</span> (份)</el-text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="dietDialogEditVisible" title="更改設定" width="30%">
    <DietDetail :dialogEditVisible="dietDialogEditVisible" @dialogEditUpdate="dialogEditUpdate(value)">
    </DietDetail>
  </el-dialog>
</template>

<style scoped></style>