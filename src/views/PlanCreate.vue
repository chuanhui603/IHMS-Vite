<script setup>
const createPlan ={
    pname:'',
    weight:0,
    bmipercent:0,
    endDate:1900/6/1,
    description:'',
}
 const onCreate=async ()=>{
    fetch('',{
        method:'POST',
        body:JSON.stringify(createPlan),
        headers:{
            'content-type':'application/json'
        }.then(res=>{
             console.log(res.json());
        })
    })
}
</script> 
<template>
    <div class="creatList mt-4">
        <h2>創建新計畫</h2>
        <div class="row mt-4">
            <div class="col-lg-6">
                <input type="text" v-model="createPlan.pname" placeholder="計畫名稱" class="p-1">
            </div>
            <div class="col-lg-6">
                <input type="number" v-model="createPlan.pname.weight" placeholder="體重" class="p-1">
            </div> 
            <div class="col-lg-6 mt-4">
                <input type="text" v-model="createPlan.bmipercent" placeholder="BMI" class="p-1">
            </div>        
            <div class="col-lg-6 mt-4">
                <input type="date" v-model="createPlan.endDate" class="p-1">
            </div>               
        </div>
        <div class="row mt-4">
            <p class="description" >description</p>
            <textarea v-model="createPlan.description"></textarea>
        </div>
        <button class="mt-4" @click="onCreate()">創建</button>
    </div>



    <!-- <p>匯入會員身體資料表</p> -->
</template>

<style scoped>
.creatList {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.description{
    text-align: center;
}
</style>