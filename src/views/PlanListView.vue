<template >
    <div>
        <el-button-group>
            <el-button :icon="Edit" @click="pageSwich(true)">飲食</el-button>
            <el-button :icon="Edit" @click="pageSwich(false)">運動</el-button>
        </el-button-group>
    </div>
    
    <el-table :data="dietData" height="400" style="width: 100%;" v-if="isDiet">      
        <el-table-column fixed prop="dname" label="食物名稱" width="150" />
        <el-table-column v-if="false" prop="dietDetailId" label="食物名稱" width="150" />
        <el-table-column prop="type" label="種類" width="120" />
        <el-table-column prop="calories" label="熱量" width="120" />
        <el-table-column prop="registerdate" label="紀錄時間" width="120" />
        <!-- <el-table-column fixed="right" label="編輯" width="120">
            <template #default>
                <el-button prop="dietDetailId" @click="isDietEdit =true" link type="primary" size="small">Edit</el-button>
                <el-button link type="primary" size="small" @click="handleClick">Delete</el-button>
            </template>
        </el-table-column> -->
    </el-table>
    <el-table :data="sportData" height="400" style="width: 100%;" v-else>    
        <el-table-column fixed prop="sname" label="運動名稱" width="150" />
        <el-table-column v-if="false" prop="sportDetailId" label="運動名稱" width="150" />
        <el-table-column prop="type" label="分類" width="120" />
        <el-table-column prop="timelong" label="運動時間" width="120" />
        <el-table-column prop="sets" label="組數" width="120" />
        <el-table-column prop="frequency" label="次數" width="120" />
        <el-table-column prop="calories" label="消耗熱量" width="120" />
        <el-table-column prop="time" label="運動日期" width="120" />
        <el-table-column prop="registerdate" label="紀錄時間" width="120" />
        <el-table-column prop="isdone" label="完成確認" width="120" />
        <!-- <el-table-column fixed="right" label="編輯" width="120">
            <template #default>
                <el-button  @click="dietEdit" link type="primary" size="small">Edit</el-button>
                <el-button link type="primary" size="small" @click="handleClick">Delete</el-button>
            </template>
        </el-table-column> -->
    </el-table>

    <el-dialog v-model="isDietEdit" title="修改飲食" width="30%">
        <DietDetail :DetailId="DetailId" @dialogEditUpdate="dietDialogEditUpdate(value)">
        </DietDetail>
    </el-dialog>
    <!-- <el-dialog v-model="isSportEdit" title="修改" width="30%">
        <SportDetail :datas="sportdetaildatas" @dialogEditUpdate="sportDialogEditUpdate(value)">
        </SportDetail>
    </el-dialog> -->


</template>
<script  setup>
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue';
import DietDetail from '../views/DietDetail.vue'
import SportDetail from '../views/SportDetail.vue'
const isDietEdit =ref(false)
const isSportEdit =ref(false)
const sportdetaildatas =ref()
const handleClick = () => {
    console.log('click')
}
const isDiet = ref(true)

const pageSwich = (boolen) => {
    isDiet.value = boolen
}
const dietid = 2
const dietLoad = async () => {
    const res = await fetch(`https://localhost:7127/api/plans/dietdetail/list/${dietid}`)
    const datas = await res.json()
    if (res.ok) {
        dietData.value = datas
        console.log(dietData.value)
    }

}
const dietEdit = (e) => {
    console.log(e.target)
    isDietEdit.value = true
    
}

const sportLoad = async () => {
    const res = await fetch(`https://localhost:7127/api/plans/sportdetail/list/1`)
    const datas = await res.json()
    if (res.ok) {
        sportData.value = datas
        console.log(sportData.value)
    }
}

//跳出視窗匯入資料
const dialogLoadUpdate = async (Id) => {
    const API_URL = `https://localhost:7127/api/plans/Sportdetail/${Id}`
    const res = await fetch(API_URL)
    sportdetaildatas.value = await res.json()
    dialogEditVisible.value = true
}

const dietData = ref([
    {
        name: '雞排',
        type: '豆魚蛋肉類',
        calories: 235,
        date: '2023-07-28',
        registerdate: '2023-07-30',

    },
    {
        name: '牛奶',
        type: '乳品類',
        calories: 86,
        date: '2023-07-28',
        registerdate: '2023-07-28',

    },
    {
        name: '白飯',
        type: '全榖雜糧類',
        calories: 106,
        date: '2023-07-28',
        registerdate: '2023-07-28',

    },
    {
        name: '炸豆腐',
        type: '豆魚蛋肉類',
        calories: 167,
        date: '2023-07-28',
        registerdate: '2023-07-28',

    }, {
        name: '燙青菜',
        type: '蔬菜類',
        calories: 67,
        date: '2023-07-28',
        registerdate: '2023-07-30',

    }
])
dietLoad()
const sportData = ref([
    {
        name: '慢跑',
        type: '有氧',
        alltime: '30min',
        sets: 'none',
        times: 'none',
        calories: 'none',
        sportdate: '2023-07-28 早上',
        registerdate: '2023-07-28',
        isdone: 'True',
    },
    {
        name: '深蹲',
        type: '健身',
        alltime: 'none',
        sets: '4組',
        times: '8下',
        calories: 'none',
        sportdate: '2023-07-28 下午',
        registerdate: '2023-07-28',
        isdone: 'True',
    },
    {
        name: '握推',
        type: '健身',
        alltime: 'none',
        sets: '3組',
        times: '4下',
        calories: 'none',
        sportdate: '2023-07-28 下午',
        registerdate: '2023-07-28',
        isdone: 'false',
    },
    {
        name: '肩舉',
        type: '健身',
        alltime: 'none',
        sets: '4組',
        times: '12下',
        calories: 'none',
        sportdate: '2023-07-28 下午',
        registerdate: '2023-07-28',
        isdone: 'True',
    },
])
sportLoad()
</script>
<style></style>