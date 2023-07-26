 
<script setup>
const diet = {
    DietDetailId: 1,
    DietId: 2,
    Dname: '',
    Type: '',
    Calories: 0,
    Decription: '',
    Img: '',
}
const loadMethod = async () => {
    const API_URL = `https://localhost:7127/api/plans/diets/dietdetail/1`
    const res = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(diet),
    }).catch(err => {
        console.log(err);
    }
    )
}
loadMethod()


const editMethod = async () => {
    const API_URL = `https://localhost:7127/api/plans/diets/dietdetail/1`
    const res = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(diet),
    }).catch(err => {
        console.log(err);
    }
    )
}


</script>
    
<template>
    <div>
        <input type="text" placeholder="食物名稱" v-model="diet.Dname" class="border:1px solid">
        <input type="text" placeholder="食物種類" v-model="diet.Type" class="border:1px solid">
        <input type="text" placeholder="熱量" v-model="diet.Calories" class="border:1px solid">
        <input type="text" placeholder="圖片" v-model="diet.Img">
        <textarea v-model="diet.Decription"></textarea>
        <v-btn @click="editMethod()">修改</v-btn>
    </div>
</template>
   
<style></style>