<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Edit,  DeleteFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
import Calender from '../components/calender.vue';
import PlanChart from '../components/planChart.vue';
import PlanCreate from '../views/PlanCreate.vue';
const planDialogEditVisible = ref(false)
const isCalender = ref(false)
const isoverview = ref(true)
const emit = defineEmits(['plan-Update'])

const pageSwich = (e) => {
    if (e.target.innerText == "行事曆") {
        isCalender.value = true
        isoverview.value = false
    }
    if (e.target.innerText == "總覽") {
        isCalender.value = false
        isoverview.value = true
    }

}
const dialogEditUpdate = (value) => {
    planDialogEditVisible.value = value
}
</script>

<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-lg-3 offset-lg-4">
                <el-button :icon="Edit" @click="pageSwich">總覽</el-button>
                <el-button :icon="Edit" @click="pageSwich">行事曆</el-button>
            </div>
            <div class="col-lg-2 offset-lg-2">
                <el-button id="editBtn" :icon="DeleteFilled" @click="planDialogEditVisible = true">更改設定</el-button>
            </div>
        </div>
        <div v-if="isoverview" id="Chart">
            <PlanChart></PlanChart>
        </div>
        <div v-if="isCalender" id="Calender">
            <Calender></Calender>
        </div>
    </div>
    <el-dialog v-model="planDialogEditVisible" title="更改設定" width="30%">
        <PlanCreate :dialogEditVisible="planDialogEditVisible" @dialogEditUpdate="dialogEditUpdate(value)"></PlanCreate>
    </el-dialog>
</template>

<style scoped>
.el-link {
    font-size: 18px;
}

#retrunBtn {
    width: 25px;
    height: 25px;
    border: 1px solid black;
    border-radius: 50%;
}

#editBtn {
    width: 90px;
}

#Chart {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

#Calender {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
</style>