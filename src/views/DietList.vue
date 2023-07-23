<template>
    <form method="post" @submit.prevent="detailEdit(1)">
        <div>
        <input type="text" placeholder="食物名稱" v-model="dietdetail.Dname" required>
        <input type="text" placeholder="食物種類" v-model="dietdetail.Type" required>
        <input type="text" placeholder="熱量" v-model="dietdetail.Calories" required>
        <input type="file" @change="ImageChange" placeholder="圖片" >
        <textarea v-model="dietdetail.Decription"></textarea>
        <button type="submit">修改</button>
        <button type="button"  @click="cancelReturn()">取消</button>
    </div>
    </form>
    
</template>
    
<script setup>
import {ref} from 'vue'

const data = ref([])
const date=new Date()
console.log(date)
//回傳資料
const dietdetail = {
    DietDetailId: 1,
    DietId: 2,
    Dname: '',
    Type: '',
    Calories: 0,
    Decription: '',
    Img: '',
    Registerdate:`${date.toLocaleDateString()}`,
}
console.log(dietdetail.Registerdate)
//載入資料
const loadMethod = async (dietid) => {
    const API_URL = `https://localhost:7127/api/plans/diet/${dietid}/dietDetail`
    const res = await fetch(API_URL,{method: 'Get'})
    data.value = await res.json()
}
loadMethod(2)


const detailEdit = async (DetailID) => {
    const API_URL = `https://localhost:7127/api/plans/dietdetail/${DetailID}/edit`
    const res = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dietdetail),
    }).catch(err => {
        console.log(err);
    }
    )
}


</script>
    
<style></style>