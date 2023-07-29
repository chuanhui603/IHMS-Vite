<script setup>
import { ref, computed } from 'vue';
import Carousel from '../components/Carousel.vue';
const prop = defineProps({
    dialogEditVisible:Boolean,
    dietdetailId:Number
})
const {dietdetailId} = prop
const emit = defineEmits();
const dialogEditUpdate = () => {
  emit('dialogEditUpdate', false); // Send the new value to the parent component
};

const date = new Date()
let imgUrl = ref([])
//回傳資料
const dietdetail = ref({
    DietDetailId: 0,
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

const onCreate =async () => {
    const formData = new FormData()
    formData.append('DietId', dietdetail.value.DietId)
    formData.append('Dname', dietdetail.value.Dname)
    formData.append('Type', dietdetail.value.Type)
    formData.append('Calories', dietdetail.value.Calories)
    formData.append('Description', dietdetail.value.Decription)
    dietdetail.value.Img.forEach((img) => {
        formData.append('Img', img)
    })
    formData.append('Registerdate', dietdetail.value.Registerdate)
    const API_URL = `https://localhost:7127/api/plans/dietdetail`
    const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
    })
    .catch(err => {
        console.log(err);
    })
    if(res.ok){
        dialogEditUpdate()
    }
}

const onEdit = async () => {
    const formData = new FormData()
    formData.append('DietDetailId', dietdetail.value.DietDetailId)
    formData.append('DietId', dietdetail.value.DietId)
    formData.append('Dname', dietdetail.value.Dname)
    formData.append('Type', dietdetail.value.Type)
    formData.append('Calories', dietdetail.value.Calories)
    formData.append('Description', dietdetail.value.Decription)
    dietdetail.value.Img.forEach((img) => {
        formData.append('Img', img)
    })
    formData.append('Registerdate', dietdetail.value.Registerdate)
    const API_URL = `https://localhost:7127/api/plans/dietdetail/edit`
    const res = await fetch(API_URL, {
        method: 'PUT',
        body: formData,

    })
    .catch(err => {
        console.log(err);
    })
    if(res.ok){
        dialogEditUpdate()
    }
}

const cancelReturn =()=>{
    dialogEditUpdate()
}
</script>
<template>
    <el-form label-width="100px" style="max-width: 460px">

        <el-form-item label="食物分類">
            <el-select v-model="dietdetail.Type" placeholder="請選擇分類">
                <el-option label="全榖雜糧類" value="全榖雜糧類 " />
                <el-option label="豆魚蛋肉類" value="豆魚蛋肉類" />
                <el-option label="乳品類" value="乳品類" />
                <el-option label="蔬菜類" value="蔬菜類" />
                <el-option label="水果類" value="水果類" />
                <el-option label="油脂與堅果種子類" value="油脂與堅果種子類" />
            </el-select>
        </el-form-item>
        <el-form-item label="食物名稱">
            <el-input v-model="dietdetail.Dname" />
        </el-form-item>
        <el-form-item label="熱量">
            <el-input v-model="dietdetail.Calories" style="width: 15%;" />
        </el-form-item>
        <el-form-item label="敘述">
            <el-input v-model="dietdetail.Decription" />
        </el-form-item>
        <el-form-item label="選擇圖片">
            <input type="file" @change="ImgAdd" multiple>
        </el-form-item>
        <div v-if="dietdetail.Img.length > 0">
            <Carousel :imgList="dietdetail.Img" @img-delete="imgDelete"></Carousel>
        </div>
        <div class="btnset">
            <el-button v-if="dietdetailId" @click="onEdit" class="mt-4">修改</el-button>
            <el-button v-else @click="onCreate" class="mt-4">創建</el-button>
            <el-button class="mt-4" @click="cancelReturn">取消</el-button>
        </div>

    </el-form>
</template>
    
<style></style>