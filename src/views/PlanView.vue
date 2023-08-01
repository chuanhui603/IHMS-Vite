<script setup>
import plansidebar from '../components/PlansideBar.vue'
import plandetail from '../views/PlanDetail.vue'
import planlistview from '../views/PlanListView.vue'
import { useRouter } from 'vue-router'
import { ref,onMounted } from 'vue'
const isPlans = ref(false)
const router = useRouter()
// 在組件中註冊事件監聽器
const { memberId } = JSON.parse(localStorage.getItem('currentMember'))
const planitems = ref()
const pId = ref()
const sportdate = ref('')
//讀取前五筆資料
// const loadPlansTopFive = async () => {
//     const res = await fetch(`https://localhost:7127/api/plans/member/${memberId}/5`)
//     const datas = await res.json()
//     plans.value = datas
// }
const loadPlans = async () => {
    const api_URL = `https://localhost:7127/api/plans/member/${memberId}`
    const res = await fetch(api_URL)
    const datas = await res.json()
    sessionStorage.setItem("plans", JSON.stringify(datas));
    if(sessionStorage.getItem("plans")){
        planitems = sessionStorage.getItem("plans")
    } 
    const { planId } = planitems
    pId = planId
}
     loadPlans()
    //  loadsportdate()
const loadsportdate = async () => {
    const api_URL = `https://localhost:7127/api/plans/sport/${pId}`
    const res = await fetch(api_URL)
    const datas = await res.json()
    sportdate.value = datas
}

</script>
    
<template>
    <div class="container-xxl mb-2" style="margin-top: 79px;">
        <!-- 內容  -->
        <div class="row ">
            <!-- sidebar -->
            <div class="col-lg-3" style="height: 100vh;border:1px solid;position:sticky; top:79px">
                <plansidebar></plansidebar>
            </div>

            <div class="col-lg-9 ">
                <div class="row">
                    <div v-if="isPlans">
                        <el-empty>
                            <el-button type="primary">Button</el-button>
                        </el-empty>
                    </div>
                    <plandetail v-else></plandetail>
                </div>
                <div class="row">
                    <planlistview></planlistview>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.chart {
    width: 70%;
}

.col-lg-3 {
    width: 20%;
}

.col-lg-9 {
    width: 80%;
}
</style>