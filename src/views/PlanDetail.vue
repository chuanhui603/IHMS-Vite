<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Edit,CircleClose,DeleteFilled } from '@element-plus/icons-vue'
const route = useRoute()
const router = useRouter()
const { planID } = route.params
console.log(planID)
const emit = defineEmits(['plan-Update'])


const planDelete = async (id) => {
const isDelete = confirm('確定刪除計畫?')
if(isDelete){
const API_URL = `https://localhost:7127/api/Plans/${id}`
const res = await fetch(API_URL, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
})

emit('plan-Update')
router.push({
    path: `/plan/chart`,
})
}
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

const planBack = () => {
    router.push({
        path: `/plan/chart`,
    })
}
</script>

<template>
    <div>
        <div>
            <el-button :icon="Edit" @click="changeDiet">飲食清單</el-button>
            <el-button :icon="Edit" @click="changeSport">運動清單</el-button>
            計畫完成度
            開始日期 ~ 截止日期

            喝水量表
            <el-link id="retrunBtn" :icon="CircleClose" @click="planBack"></el-link>
            <el-button :icon="DeleteFilled" @click="planDelete(planID)">刪除計畫</el-button>
        </div>



    </div>
</template>

<style scoped>
.el-link {
  font-size: 18px;
}
#retrunBtn{
    float: left;
}
</style>