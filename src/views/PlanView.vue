<script setup>
import plansidebar from '../components/PlansideBar.vue'
import {useRouter} from 'vue-router'
import {ref} from'vue'
const plans = ref([])
// 創建 ref 變量來存儲計劃更新狀態
const planUpdated = ref(false);
const router = useRouter()

//test 會員id 6
//讀取前五筆資料
const loadPlansTopFive = async (id) => {
    const res = await fetch(`https://localhost:7127/api/plans/member/${id}/5`)
    const datas = await res.json()
    plans.value = datas
}
loadPlansTopFive(6)
// 在父組件中註冊 'plan-Update' 事件監聽器
router.afterEach(() => {
  // 路由更改時觸發 'plan-Update' 事件
  planUpdated.value = true
  if(planUpdated.value){
    loadPlansTopFive(6)
  }
});

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