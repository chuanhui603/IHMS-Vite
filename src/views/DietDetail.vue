<script setup>
import { ref } from 'vue';
import Carousel from '../components/Carousel.vue';
import { wholeGrains, proteinFoods, dairyProducts, vegetables, fruits, fatsAndNuts } from '../js/dietFood.js'
const prop = defineProps({
    dialogEditVisible: Boolean,
    dietdetailId: Number,
    DetailId: Number,
})
const ischecked = ref(false)
const isinput = ref(false)
const input = ref([])
const { dietdetailId } = prop
const emit = defineEmits();
const dialogEditUpdate = () => {
    emit('dialogEditUpdate', false); // Send the new value to the parent component
};
const imgUpload = ref(false)
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

//添加圖片
const ImgAdd = (e) => {
    imgUpload.value = false
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
    imgUpload.value = true
}


//刪除資料
const imgDelete = (index) => {
    dietdetail.value.Img.splice(index, 1)
    imgUrl.value.splice(index, 1)
}

//新增資料
const onCreate = async () => {
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
    if (res.ok) {
        dialogEditUpdate()
    }
}

//更新資料庫
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
    if (res.ok) {
        dialogEditUpdate()
    }
}
const inputchange = (input,calories)=>{
    dietdetail.value.Dname =input
    dietdetail.value.Calories = calories
    isinput.value =false
}

const cancelReturn = () => {
    dialogEditUpdate()
}
const typeChange =() =>{
    ischecked .value =true
    isinput.value=false
}
</script>
<template>
    <el-form label-width="100px" style="max-width: 460px">

        <el-form-item label="食物分類">
            <el-select v-model="dietdetail.Type" placeholder="請選擇分類" @change="typeChange">
                <el-option label="全榖雜糧類" value="全榖雜糧類 " />
                <el-option label="豆魚蛋肉類" value="豆魚蛋肉類" />
                <el-option label="乳品類" value="乳品類" />
                <el-option label="蔬菜類" value="蔬菜類" />
                <el-option label="水果類" value="水果類" />
                <el-option label="油脂與堅果種子類" value="油脂與堅果種子類" />
            </el-select>
        </el-form-item>
        <el-form-item label="食物名稱">
            <el-input v-model="dietdetail.Dname" id="food" @click="isinput = true"/>
        </el-form-item>
        <ul v-if="ischecked && isinput">
            <el-scrollbar height="400px">
                <li v-if="dietdetail.Type==='全榖雜糧類'">
                    <el-link @click="inputchange(name,calories)" v-for="{ name,calories } in wholeGrains" :key="item" class="scrollbar-demo-item">{{ name }} 熱量:{{calories}}</el-link>
                </li>
                <li v-else-if="dietdetail.Type==='豆魚蛋肉類'">
                    <el-link @click="inputchange(name,calories)" v-for="{ name,calories } in proteinFoods" :key="item" class="scrollbar-demo-item">{{ name }} 熱量:{{calories}}</el-link>
                </li>
                <li v-else-if="dietdetail.Type==='乳品類'">
                    <el-link @click="inputchange(name,calories)" v-for="{ name,calories } in dairyProducts" :key="item" class="scrollbar-demo-item">{{ name }} 熱量:{{calories}}</el-link>
                </li>
                <li v-else-if="dietdetail.Type==='水果類'">
                    <el-link @click="inputchange(name,calories)" v-for="{ name,calories } in vegetables" :key="item" class="scrollbar-demo-item">{{ name }} 熱量:{{calories}}</el-link>
                </li>
                <li v-else-if="dietdetail.Type==='蔬菜類'">
                    <el-link @click="inputchange(name,calories)" v-for="{ name,calories } in fruits" :key="item" class="scrollbar-demo-item">{{ name }} 熱量:{{calories}}</el-link>
                </li>
                <li v-else>
                    <el-link @click="inputchange(name,calories)" v-for="{ name,calories } in fatsAndNuts" :key="item" class="scrollbar-demo-item">{{ name }} 熱量:{{calories}}</el-link>
                </li>
            </el-scrollbar>
        </ul>
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
            <Carousel @change="changeUpdate" :imgList="dietdetail.Img" @img-delete="imgDelete" :imgUrl="imgUrl"></Carousel>
        </div>
        <div class="btnset">
            <el-button v-if="dietdetailId" @click="onEdit" class="mt-4">修改</el-button>
            <el-button v-else @click="onCreate" class="mt-4">創建</el-button>
            <el-button class="mt-4" @click="cancelReturn">取消</el-button>
        </div>

    </el-form>
</template>
    
<style scoped>
#food {
    position: relative;
}

ul {
    
    z-index: 99;
    width: 67%;
    left: 16%;
    top: 39%;
    position: absolute;
   
}

.el-scrollbar {
    background-color: #fff;
    width: 99%;
    border: 1px solid black;
    border-radius: 2%;
}

.el-scrollbar .el-link {
    font-size: 16px;
    text-align: center;
    display: block;
    border-bottom: 1px solid black;
}</style>