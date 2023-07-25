<template>
        <form method="post" @submit.prevent="detailEdit(1)">
                <div>
                        <input type="text" placeholder="運動名稱" v-model="sportdetail.Sname" required>
                        <select type="text" v-model="sportdetail.Type" required>
                                <option value="健身">健身</option>
                                <option value="有氧">有氧</option>
                        </select>

                        <input type="text" placeholder="組數" v-model="sportdetail.Frequency" required>
                        <input type="text" placeholder="運動時間" v-model="sportdetail.Sporttime" required>
                        <input type="file" @change="ImgAdd" multiple>
                        <textarea v-model="sportdetail.Description"></textarea>
                        <button type="submit">修改</button>
                        <button @click="cancelReturn">返回</button>
                </div>
        </form>


        <div v-if="sportdetail.Img.length > 0">
                <Carousel :imgList="sportdetail.Img" @Img-Delete="imgDelete"></Carousel>
        </div>
</template>
        
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Carousel from '../components/Carousel.vue';
const router = useRouter()
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
        Description: '',
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
}

const imgDelete = (index) => {
        sportdetail.value.Img.splice(index, 1)
        imgUrl.value.splice(index, 1)
}

const imgList = computed(() =>
        sportdetail.value.Img.map((_, index) => imgUrl.value[index]
        ));

const detailEdit = async () => {

        const formData = new FormData()
        formData.append('SportDetailId', sportdetail.value.SportDetailId)

        formData.append('SportId', sportdetail.value.SportId)
        formData.append('Sname', sportdetail.value.Sname)
        formData.append('Type', sportdetail.value.Type)
        formData.append('Sporttime', sportdetail.value.Sporttime)
        formData.append('Frequency', sportdetail.value.Frequency)
        formData.append('Description', sportdetail.value.Description)
        sportdetail.value.Img.forEach((img) => {
                formData.append('Img', img)
        })
        formData.append('Registerdate', sportdetail.value.Registerdate)


        const API_URL = `https://localhost:7127/api/plans/sportdetail/edit`
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

const cancelReturn = () => {

}
</script>
        
<style></style>