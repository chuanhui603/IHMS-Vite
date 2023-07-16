<script setup>
import plansidebar from '../components/PlansideBar.vue'
import BarChart from '../components/BarChart.vue'
const loadProducts = async (e) => {
    console.log(e)
    const res = await fetch(`https://localhost:7127/api/Plans/${e}`)
    const datas = await res.json()
    console.log(datas)

}


</script>
    
<template>
    <div class="container-xxl" style="height: 100vh;margin-top: 79px;">
        <!-- 內容  -->
        <div class="row">
            <!-- sidebar -->
            <plansidebar></plansidebar>
            <div class="col-lg-9" >
              <BarChart></BarChart>
                <button type="button" @click="loadProducts(1)">AJAX測試</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.col-lg-3 {
    width: 20%;
}

.col-lg-9 {
    width: 80%;
}
</style>