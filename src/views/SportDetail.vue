<template>
        <el-form label-width="100px" style="max-width: 460px">
                <el-form-item label="選擇類型">
                        <el-select v-model="sportdetail.type" placeholder="請選擇類型" @change="typeChange">
                                <el-option label="健身" value="健身" />
                                <el-option label="有氧" value="有氧" />
                        </el-select>
                </el-form-item>
                <el-form-item label="運動名稱">
                        <el-input v-model="sportdetail.sname" />
                </el-form-item>
                <ul v-if="ischecked && isinput">
                        <el-scrollbar height="400px">
                                <li v-if="dietdetail.Type === '有氧'">
                                        <el-link @click="inputchange(name, calories)" v-for="{ name, calories } in aerobic"
                                                :key="item" class="scrollbar-demo-item">{{ name }} 每分鐘熱量:{{ calories }}</el-link>
                                </li>
                        </el-scrollbar>
                </ul>
                <div v-if="sportdetail.type == '健身'">
                        <el-form-item v-if="sportdetail.type == '健身'" label="組數">
                                <el-input v-model="sportdetail.sets" style="width: 15%;" />
                        </el-form-item>
                        <el-form-item label="次數">
                                <el-input v-model="sportdetail.frequency" style="width: 15%;" />
                        </el-form-item>
                </div>
                <el-form-item v-else label="時長">
                        <el-input v-model="sportdetail.hour" style="width: 15%;" @input="calorieseCal"/>
                        <el-text>時</el-text>
                        <el-input v-model="sportdetail.min" style="width: 15%;" @input="calorieseCal"/>
                        <el-text>分</el-text>
                </el-form-item>
                <el-form-item label="消耗熱量">
                        <el-input v-model="sportdetail.calories" style="width: 15%;" />
                </el-form-item>
                <el-form-item label="時間">
                        <el-col :span="11">
                                <el-date-picker v-model="sportdetail.registerdate" type="date" placeholder="Pick a time"
                                        style="width: 100%" />
                        </el-col>
                        <el-col :span="2" class="text-center">
                                <span class="text-gray-500">-</span>
                        </el-col>
                        <el-col :span="11">
                                <el-select v-model="sportdetail.time" placeholder="請選擇時間">
                                        <el-option label="早上" value="早上" />
                                        <el-option label="下午" value="下午" />
                                        <el-option label="晚上" value="晚上" />
                                </el-select>
                        </el-col>
                </el-form-item>
                <div class="btnset">
                        <el-button v-if="sportdetail.sportDetailId" @click="onEdit" class="mt-4">修改</el-button>
                        <el-button v-else @click="onCreate" class="mt-4">創建</el-button>
                        <el-button class="mt-4" @click="cancelReturn">取消</el-button>
                </div>
                <el-text v-if="isspace" style="color=red;">請填入資料</el-text>
        </el-form>
</template>
        
<script setup>
import { ref } from 'vue';
import {aerobic} from '../js/sportcalories'
const isspace = ref(false)
const ischecked =ref(false) 
const isinput =ref(false)
//彈出視窗設定
const prop = defineProps({
        sportdatas: Object
})
console.log(prop.sportdatas)

const sportdetail = ref({
        frequency: '',
        isdone: false,
        registerdate: new Date(),
        sets: '',
        sname: '',
        sportDetailId: '',
        sportId: 1,
        time: '',
        hour: '',
        type: '',
        calories: '',
        min: '',

})

const inputchange = (input,calories)=>{
    sportdetail.value.sname =input
    sportdetail.value.calories = calories
    isinput.value =false
}

const typeChange = ()=>{
        if(sportdetail.value.type =='有氧'){
                ischecked.value =true    
        }
}

const calorieseCal = ()=>{
        if(parseInt(sportdetail.value.time)>0){
               sportdetail.value.calories= sportdetail.value.time*60*aerobic.calories+sportdetail.value.min*aerobic.calories
        }else if(parseInt(sportdetail.value.time)==0){
                sportdetail.value.calories= sportdetail.value.min*aerobic.calories     
        }
}

const fetchData = async () => {
        try {
                if (prop.sportdatas != null) {
                        const result = await prop.sportdatas;
                        sportdetail.value = result;
                }
        } catch (error) {
                console.error('Error fetching data:', error);
        }
}
fetchData()
console.log(sportdetail.value)
const emit = defineEmits();
const dialogEditUpdate = () => {
        emit('dialogEditUpdate', false);
};


//sportdetail資料表設定
const onCreate = async () => {
        if (sportdetail.value.sname == '' && sportdetail.value.type == '') {
                isspace.value = true
        } else if (sportdetail.value.type == '健身' && sportdetail.value.frequency == '' && sportdetail.value.sets == '') {
                isspace.value = true
        } else if (sportdetail.value.type == '有氧' && sportdetail.value.hour == '' && sportdetail.value.min == '') {
                isspace.value = true
        } else {
                const formData = new FormData()
                formData.append('SportId', sportdetail.value.sportId)
                formData.append('Sname', sportdetail.value.sname)
                formData.append('Type', sportdetail.value.type)
                formData.append('Timelong', sportdetail.value.min)
                formData.append('Timelong', sportdetail.value.hour)
                formData.append('Frequency', sportdetail.value.frequency)
                formData.append('Time', sportdetail.value.time)
                formData.append('Sets', sportdetail.value.sets)
                formData.append('isdone', sportdetail.value.isdone)
                formData.append('calories', sportdetail.value.calories)
                const API_URL = `https://localhost:7127/api/plans/sportdetail`
                const res = await fetch(API_URL, {
                        method: 'POST',
                        body: formData,
                }).catch(err => {
                        console.log(err);
                })
                dialogEditUpdate()
        }

}


const onEdit = async () => {
        if (sportdetail.value.sname == '' && sportdetail.value.type == '') {
                isspace.value = true
        } else if (sportdetail.value.type == '健身' && sportdetail.value.frequency == '' && sportdetail.value.sets == '') {
                isspace.value = true
        } else if (sportdetail.value.type == '有氧' && sportdetail.value.hour == '' && sportdetail.value.min == '') {
                isspace.value = true
        } else {
                const formData = new FormData()
                formData.append('SportDetailId', sportdetail.value.sportDetailId)
                formData.append('SportId', sportdetail.value.sportId)
                formData.append('Sname', sportdetail.value.sname)
                formData.append('Type', sportdetail.value.type)
                formData.append('Timelong', sportdetail.value.timelong)
                formData.append('Frequency', sportdetail.value.frequency)
                formData.append('Time', sportdetail.value.time)
                formData.append('calories', sportdetail.value.calories)
                formData.append('SetS', sportdetail.value.sets)
                const API_URL = `https://localhost:7127/api/plans/sportdetail/edit`
                const res = await fetch(API_URL, {
                        method: 'PUT',
                        body: formData,
                }).catch(err => {
                        console.log(err);
                })
                dialogEditUpdate()
        }


}

const cancelReturn = () => {
        dialogEditUpdate()
}
</script>
        
<style>
.btnset {
        margin-left: 5rem;
        display: flex;
        justify-content: center;
}
</style>