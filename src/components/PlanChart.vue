<script setup >
import BarChart from '../components/BarChart.vue'
import DietDetail from '../views/DietDetail.vue'
import doghnutsChart from '../components/doghnutsChart.vue'
import { Edit } from '@element-plus/icons-vue'
import { ref,inject } from 'vue'
const reload = inject('reload')
const dietDialogEditVisible = ref(false)
const dialogEditUpdate = (value) => {
  dietDialogEditVisible.value = value
}
const Plan = ref(JSON.parse(sessionStorage.getItem("plans")))
const bmr = ref(parseInt(Plan.value.bmr))
console.log(bmr)
const foodtype = ref({
  Cereals: 0,
  eggMeat: 0,
  milk: 0,
  vegetable: 0,
  fruit: 0,
  oil: 0
})

const foodtypeUpdate = () => {
  if (bmr.value < 2000 && bmr.value > 1500) {
    foodtype.value.Cereals = 3
    foodtype.value.eggMeat = 5
    foodtype.value.fruit = 2
    foodtype.value.milk = 1.5
    foodtype.value.vegetable = 3
    foodtype.value.oil = 5
  } else if (bmr.value < 2500 && bmr.value > 2000) {
    foodtype.value.Cereals = 3.5
    foodtype.value.eggMeat = 6
    foodtype.value.fruit = 3.5
    foodtype.value.milk = 1.5
    foodtype.value.vegetable = 4
    foodtype.value.oil = 6
  } else if (bmr.value < 3000 && bmr.value > 2500) {
    foodtype.value.Cereals = 4
    foodtype.value.eggMeat = 8
    foodtype.value.fruit = 4
    foodtype.value.milk = 2
    foodtype.value.vegetable = 5
    foodtype.value.oil = 8
  }
  
}
foodtypeUpdate()
</script>

<template>
  <div class="row justify-content-center">

    <div> <el-button :icon="Edit" @click="dietDialogEditVisible = true">飲食</el-button></div>
    <div class="row mt-5">
      <div class="col-lg-6">
        <div class="chart">
          <doghnutsChart :datas="foodtype"></doghnutsChart>
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

          <div class="row ">
            <div class="col-3">
              <el-text style="font-size: 16px;">基礎代謝<span style="font-size: 28px;">{{ Plan.bmr }}</span></el-text>
            </div>
            <div class="col-3">
              <el-text style="font-size: 16px;">每日消耗熱量<span style="font-size: 28px;">{{ Plan.tdee }}</span></el-text>
            </div>
          </div>

          <div class="col-lg-3 Classification" style="height: 10rem; border: 1px solid;">
            <el-text>全榖雜糧類 <span style="font-size: 25px;">{{foodtype.Cereals}}</span> 碗</el-text>          
          </div>
          <div class="col-lg-3 Classification">
            <div class="row" style="height: 5rem; border: 1px solid;">
              <el-text>豆魚蛋肉類 <span style="font-size: 25px;">{{foodtype.eggMeat}}</span> 份</el-text>
            </div>
            <div class="row" style="height: 5rem; border: 1px solid;">
              <el-text>乳品類 <span style="font-size: 25px;">{{foodtype.milk}}</span> 份</el-text>
            </div>
          </div>
          <div class="col-lg-3 Classification">
            <div class="row" style="height: 5rem;border: 1px solid;">
              <el-text>蔬菜類 <span style="font-size: 25px;">{{foodtype.vegetable}}</span> 份</el-text>
            </div>
            <div class="row" style="height: 5rem; border: 1px solid;">
              <el-text>水果類 <span style="font-size: 25px;">{{foodtype.fruit}}</span> 份</el-text>
            </div>
          </div>
          <div class="col-lg-3 Classification" style="height: 10rem;border: 1px solid;">
            <el-text>油酯與堅果種子類 <span style="font-size: 25px;"> {{foodtype.oil}} </span>份</el-text>
          
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