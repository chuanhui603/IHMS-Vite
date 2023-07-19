<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const { planID } = route.params
console.log(planID)
const planDelete = async (id) => {
    const API_URL = `https://localhost:7127/api/Plans/${id}`
    const res = await fetch(API_URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    router.push({
        path: `/plan/chart`,
    })
}

const changeDiet = () => {
    router.push({
        path: `/plan/diet/${planID}`,
    })
}


const changeSport = () => {
    router.push({
        path: `/plan/sport/${planID}`,
    })
}

const planBack =() =>{
    router.push({
        path: `/plan/chart`,
    })
}
</script>

<template>
    <div>
        <div>
            <button @click="changeDiet()">飲食清單</button>
            <button @click="changeSport()">運動清單</button>
            計畫完成度
            開始日期 ~ 截止日期

            喝水量表

            <button @click="planBack()">返回</button>
            <button @click="planDelete(planID)">刪除計畫</button>

        </div>



    </div>
</template>

<style scoped></style>