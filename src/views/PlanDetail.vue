<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Edit, Back, DeleteFilled } from '@element-plus/icons-vue'
import Calender from '../components/calender.vue';
const route = useRoute()
const router = useRouter()
const { planID } = route.params
const emit = defineEmits(['plan-Update'])


const planDelete = async (id) => {
    const isDelete = confirm('確定刪除計畫?')
    if (isDelete) {
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

<!-- 計畫完成度
開始日期 ~ 截止日期
喝水量表 -->

<template>
    <div>
        <div> <el-link id="retrunBtn" style="margin-top: 3px;" :icon="Back" @click="planBack"></el-link>
            <el-button id="deleteBtn" :icon="DeleteFilled" @click="planDelete(planID)">刪除計畫</el-button>
        </div>

        <div>
            <el-button :icon="Edit" @click="changeDiet">飲食</el-button>
            <el-button :icon="Edit" @click="changeSport">運動</el-button>
            <el-button :icon="Edit" @click="changeDiet">總覽</el-button>
            <el-button :icon="Edit" @click="changeSport">運動</el-button>

        </div>
        <Calender></Calender>

    </div>
</template>

<style scoped>
.el-link {
    font-size: 18px;
}

#retrunBtn {
    width: 25px;
    height: 25px;
    float: left;
    border: 1px solid black;
    border-radius: 50%;
}

#deleteBtn {
    float: right;
}
</style>