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

}


</script>
    
<style></style>