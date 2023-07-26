<template>
    <form method="post" @submit.prevent="detailEdit()">
        <div>
            <input type="text" placeholder="食物名稱" v-model="dietdetail.Dname" required>
            <input type="text" placeholder="食物種類" v-model="dietdetail.Type" required>
            <input type="text" placeholder="熱量" v-model="dietdetail.Calories" required>
            <input type="file" @change="ImgAdd" multiple>
            <textarea v-model="dietdetail.Decription"></textarea>
            <button type="submit">修改</button>
            <button type="button" @click="cancelReturn()">取消</button>
        </div>
    </form>
    <div v-if="dietdetail.Img.length > 0">
        <Carousel :imgList="dietdetail.Img" @img-delete="imgDelete"></Carousel>
    </div>
</template>
    
<script setup>
import { ref, computed } from 'vue';
import Carousel from '../components/Carousel.vue';
const data = ref([])
const date = new Date()
let imgUrl = ref([])
//回傳資料
const dietdetail = ref({
    DietDetailId: 1,
    DietId: 2,
    Dname: '',
    Type: '',
    Calories: 0,
    Decription: '',
<<<<<<< HEAD:src/views/DietDetail.vue
    Img: '',
}
const loadMethod = async () => {
    const API_URL = `https://localhost:7127/api/plans/diets/dietdetail/1`
    const res = await fetch(API_URL)
  diet = await res.json()
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
=======
    Img: [],
    Registerdate: `${date.toLocaleDateString()}`,
})
//載入資料
// const loadMethod = async (dietid) => {
//     const API_URL = `https://localhost:7127/api/plans/diet/${dietid}/dietDetail`
//     const res = await fetch(API_URL, { method: 'Get' })
//     data.value = await res.json()
// }
// loadMethod(2)


const ImgAdd = (e) => {
    dietdetail.value.Img.push(...e.target.files)
    for (let i = 0; i < dietdetail.value.Img.length; i++) {
        const file = e.target.files[i];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imgUrl.value.push(event.target.result);
            };
            reader.readAsDataURL(file);
        }

    }
}


const imgDelete = (index) => {
    dietdetail.value.Img.splice(index, 1)
    imgUrl.value.splice(index, 1)
}


const imgList = computed(() =>
dietdetail.value.Img.map((_, index) => imgUrl.value[index]
        ));


const detailEdit = async () => {
    const formData = new FormData()
        formData.append('DietDetailId', dietdetail.value.DietDetailId)
        formData.append('DietId', dietdetail.value.DietId)
        formData.append('Dname', dietdetail.value.Dname)
        formData.append('Type', dietdetail.value.Type)
        formData.append('Calories', dietdetail.value.Calories)
        formData.append('Description', dietdetail.value.Description)
        dietdetail.value.Img.forEach((img) => {
                formData.append('Img', img)
        })
        formData.append('Registerdate', dietdetail.value.Registerdate)

        
        const API_URL = `https://localhost:7127/api/plans/dietdetail/edit`
        const res = await fetch(API_URL, {
                method: 'PUT',             
                body: formData,
        }).catch(err => {
                console.log(err);
        }
        )

        router.push({
                path: `/plan/chart`,
        })

>>>>>>> 19c77e9e903f44796bda2fe3eb4736cba5b0dc37:src/views/DietList.vue
}


</script>
    
<<<<<<< HEAD:src/views/DietDetail.vue


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
   
=======
>>>>>>> 19c77e9e903f44796bda2fe3eb4736cba5b0dc37:src/views/DietList.vue
<style></style>