<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const prop = defineProps({
    dialogEditVisible:Boolean
})
const {dialogEditVisible} = prop
const emit = defineEmits();
const dialogEditUpdate = () => {
  emit('dialogEditUpdate', false); // Send the new value to the parent component
};

const router = useRouter()
const newPlan = ref(JSON.parse(sessionStorage.getItem("plans")))
const { planId } = newPlan.value
const onCreate = async () => {
    const API_URL = 'https://localhost:7127/api/Plans'
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newPlan.value),
    })
    router.push({
        path: `/plan/detail`,
    })
}
const onEdit = async () => {
    const API_URL = `https://localhost:7127/api/Plans/edit`
    const res = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newPlan.value),
    })
    if(dialogEditVisible){
        dialogEditUpdate()
    }
         
}
const btnCancel =async () => {
    if(dialogEditVisible){
        dialogEditUpdate()
    }else{
        router.push({
        path: `/plan/detail`,
    })
    }
    
}
</script> 
<template>
    <div class="creatList mt-4">


        <el-form class="form" label-width="100px" style="max-width: 460px">
            <el-form-item label="目標">
                <el-select v-model="newPlan.type" placeholder="請選擇目標">
                    <el-option label="健康" value="健康" />
                    <el-option label="減重" value="減重" />
                    <el-option label="增肌" value="增肌" />
                </el-select>
            </el-form-item>
            <el-form-item label="頻率">
                <el-select v-model="newPlan.times" placeholder="每周運動頻率">
                    <el-option label="幾乎不運動" value="never" />
                    <el-option label="每周1~3次" value="seldom" />
                    <el-option label="每周3~5次" value="normal" />
                    <el-option label="每周6~7次" value="usually" />
                    <el-option label="長時間運動" value="almost" />
                </el-select>
            </el-form-item>
            <el-form-item label="年齡">
                <el-input v-model="newPlan.age" />
            </el-form-item>
            <el-form-item label="身高">
                <el-input v-model="newPlan.height" />
            </el-form-item>
            <el-form-item label="體重">
                <el-input v-model="newPlan.weight" />
            </el-form-item>
            <div>
                <el-button v-if="!planId" class="mt-4" @click="onCreate">創建</el-button>
                <el-button v-else class="mt-4" @click="onEdit">更改</el-button>
                <el-button class="mt-4" @click="btnCancel">取消</el-button>
            </div>
            <!-- <el-radio-button label="top">BMI計算</el-radio-button> -->
        </el-form>
    </div>








    <!-- <p>匯入會員身體資料表</p> -->
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.creatList {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.description {
    text-align: center;
}
</style>