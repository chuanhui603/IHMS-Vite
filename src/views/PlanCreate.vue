<script setup>

</script> 
<template>
    <div class="row mt-4">
        <div class="col-lg-9">
            <h2>創建新計畫</h2>
            <p>計畫名稱</p>
            <input type="text">
        </div>
        <div class="row mt-4">
            <div class="col-lg-6">
                <p>體重</p>
                <input type="text">          
            </div>
            <div class="col-lg-6">               
                <p>BMI</p>
                <input type="text">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-9">
                <p>description</p>
            <input type="text">
            <button>創建</button>
            </div>          
        </div>
    </div>



    <!-- <p>匯入會員身體資料表</p> -->
</template>

<style scoped>
.row {
    justify-content: center;
}
</style>