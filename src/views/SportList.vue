<template>
        <form method="post" @submit.prevent="detailEdit">
                <div>
                        <input type="text" placeholder="運動名稱" v-model="sportdetail.Dname" required>
                        <section type="text" placeholder="運動分類" required></section>
                        <input type="text" placeholder="組數" v-model="sportdetail.Calories" required>
                        <input type="text" placeholder="運動時間" v-model="sportdetail.Calories" required>
                        <input type="file" @change="ImgAdd" multiple>                     
                        <textarea v-model="sportdetail.Decription"></textarea>
                        <button type="submit">修改</button>
                        <button @click="cancelReturn">修改</button>
                </div>
        </form>
        <div v-if="sportdetail.Img.length > 0">
                                <h5>已選擇的圖片檔案：</h5>
                                <div v-for="(image, index) in imgList" :key="index">
                                        <p>{{ sportdetail.Img[index].name }}</p>
                                        <img :src="image" width="100" height="100">
                                        <button @click="imgDelete(index)">刪除相片</button>
                                </div>

                        </div>

</template>
        
<script setup>
import { ref, computed } from 'vue';
const data = ref([])
const date = new Date();
let imgUrl = ref([])
const sportdetail = ref({
        SportDetailId: 1,
        SportId: 2,
        Sname: '',
        Type: '',
        Sporttime: 0,
        Frequency: 0,
        Decription: '',
        Img: [],
        Registerdate: date.toLocaleDateString(),
})

const loadMethod = async (sportId) => {
        const API_URL = `https://localhost:7127/api/plans/Sport/${sportId}/Sportdetail`
        const res = await fetch(API_URL, { method: 'Get' })
        data.value = await res.json()
}
loadMethod(1)

const ImgAdd = (e) => {
        sportdetail.value.Img.push(...e.target.files)
        console.log(sportdetail.value.Img)
        for (let i = 0; i < sportdetail.value.Img.length; i++) {
                const file = e.target.files[i];
                if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                                imgUrl.value.push(event.target.result);
                        };
                        reader.readAsDataURL(file);
                } 
                
        }
        console.log(imgUrl)
}

const imgDelete = (index) => {
        sportdetail.value.Img.splice(index,1)
        imgUrl.value.splice(index,1)
}

const imgList = computed(() => 
        sportdetail.value.Img.map((_, index) => imgUrl.value[index]
));

const detailEdit = async (DetailID) => {


        const API_URL = `https://localhost:7127/api/plans/dietdetail/${DetailID}/edit`
        const res = await fetch(API_URL, {
                method: 'PUT',
                headers: {
                        'content-type': 'application/json'
                },
                body: JSON.stringify(sportdetail.value),
        }).catch(err => {
                console.log(err);
        }
        )
}

const cancelReturn = () => {

}
</script>
        
<style></style>