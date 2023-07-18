<script setup>
import plansidebar from '../components/PlansideBar.vue'
import { ref } from 'vue'
const plans = ref([])
const loadPlansTopFive = async (id) => {
    const res = await fetch(`https://localhost:7127/api/plans/member/${id}/5`)
    const datas = await res.json()
    plans.value = datas
    console.log(plans)
}
loadPlansTopFive(6)

</script>
    
<template>
    <div class="container-xxl mb-2" style="height: 100vh;margin-top: 79px;">
        <!-- 內容  -->
        <div class="row ">
            <!-- sidebar -->
            <div class="col-lg-3" style="height: 100vh;border:1px solid">
                <plansidebar :plans="plans"></plansidebar>
            </div>
            <div class="col-lg-9 ">
             
            <router-view></router-view>

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