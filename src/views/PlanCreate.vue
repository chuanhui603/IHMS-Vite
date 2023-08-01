<script setup>
import { useRouter } from 'vue-router'
import { ref,inject } from 'vue'
const prop = defineProps({
    dialogEditVisible: Boolean
})
const { dialogEditVisible } = prop

const emit = defineEmits();
const dialogEditUpdate = () => {
    emit('dialogEditUpdate', false); // Send the new value to the parent component
};
const reload = inject('reload')
const router = useRouter()
const newPlan = ref(JSON.parse(sessionStorage.getItem("plans")))
const BMR = ref(0)
const TDEE = ref(0)
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
    if (dialogEditVisible) {
        dialogEditUpdate()
    }
    reload()
}
const btnCancel = async () => {
    if (dialogEditVisible) {
        dialogEditUpdate()
    } else {
        router.push({
            path: `/plan/detail`,
        })
    }

}
const comformation = ref({
    protein: 20,
    adipose: 20,
    carbohydrates: 60,
    basicConsumption: 2000,

})



const comformationUpdate = () => {

    BMR.value = (newPlan.value.gender == 'male' ? (10 * newPlan.value.height + 6.25 * newPlan.value.height - 5 * newPlan.value.age) + 5 : (10 * newPlan.value.height + 6.25 * newPlan.value.height - 5 * newPlan.value.age) - 161).toFixed(0)

    switch (newPlan.value.times) {
        case 'never':
            TDEE.value = (BMR.value * 1.2).toFixed(0)
            break
        case 'seldom':
            TDEE.value = (BMR.value * 1.375).toFixed(0)
            break
        case 'normal':
            TDEE.value = (BMR.value * 1.55).toFixed(0)
            break
        case 'usually':
            TDEE.value = (BMR.value * 1.725).toFixed(0)
            break
        case 'almost':
            TDEE.value = (BMR.value * 1.9).toFixed(0)
            break
    }
    switch (newPlan.value.type) {
        case '健康':
            comformation.value.protein = 20
            comformation.value.adipose = 20
            comformation.value.carbohydrates = 60
            TDEE.value = parseInt(TDEE.value)
            break
        case '生酮':
            comformation.value.protein = 10
            comformation.value.adipose = 20
            comformation.value.carbohydrates = 70
            TDEE.value = parseInt(TDEE.value) - 300
            break
        case '增肌':
            comformation.value.protein = 30
            comformation.value.adipose = 20
            comformation.value.carbohydrates = 50
            TDEE.value = parseInt(TDEE.value) + 300
            break
    }
    newPlan.value.bmr = BMR
    newPlan.value.tdee = TDEE

}
comformationUpdate()


</script> 
<template>
    <div class="creatList mt-4">


        <el-form class="form" label-width="100px" style="max-width: 460px">
            <el-form-item label="目標">
                <el-select v-model="newPlan.type" placeholder="請選擇目標" @change="comformationUpdate">
                    <el-option label="健康" value="健康" />
                    <el-option label="生酮" value="生酮" />
                    <el-option label="增肌" value="增肌" />
                </el-select>
            </el-form-item>
            <el-form-item label="頻率">
                <el-select v-model="newPlan.times" placeholder="每周運動頻率" @change="comformationUpdate">
                    <el-option label="幾乎不運動" value="never" />
                    <el-option label="每周1~3次" value="seldom" />
                    <el-option label="每周3~5次" value="normal" />
                    <el-option label="每周6~7次" value="usually" />
                    <el-option label="長時間運動" value="almost" />
                </el-select>
            </el-form-item>
            <el-form-item label="性別">
                <el-select v-model="newPlan.gender" placeholder="選擇性別" @change="comformationUpdate">
                    <el-option label="男" value="male" />
                    <el-option label="女" value="female" />

                </el-select>
            </el-form-item>
            <el-form-item label="年齡">
                <el-input v-model="newPlan.age" @input="comformationUpdate" />
            </el-form-item>
            <el-form-item label="身高">
                <el-input v-model="newPlan.height" @input="comformationUpdate" />
            </el-form-item>
            <el-form-item label="體重">
                <el-input v-model="newPlan.weight" @input="comformationUpdate" />
            </el-form-item>
            <div>
                <el-button v-if="!planId" class="mt-4" @click="onCreate">創建</el-button>
                <el-button v-else class="mt-4" @click="onEdit">更改</el-button>
                <el-button class="mt-4" @click="btnCancel">取消</el-button>
            </div>
            <!-- <el-radio-button label="top">BMI計算</el-radio-button> -->
            <el-label class="mt-2 text-danger">{{ newPlan.type }}飲食:蛋白質{{ comformation.protein }}% 脂肪{{ comformation.adipose
            }}%
                碳水化合物:{{ comformation.carbohydrates }}%</el-label>
            <el-label class="mt-2 text-danger">BMR:{{ BMR }} TDEE:{{ TDEE }}</el-label>
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