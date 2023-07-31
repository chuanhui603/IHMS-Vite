<template >
    <div>
        <el-button-group>
            <el-button :icon="Edit" @click="pageSwich(true)">飲食</el-button>
            <el-button :icon="Edit" @click="pageSwich(false)">運動</el-button>
        </el-button-group>
    </div>

    <el-table :data="dietData" height="400" style="width: 100%;" v-if="isDiet">
        <el-table-column fixed prop="name" label="食物名稱" width="150" />
        <el-table-column prop="type" label="種類" width="120" />
        <el-table-column prop="calories" label="熱量" width="120" />
        <el-table-column prop="registerdate" label="紀錄時間" width="120" />     
        <el-table-column fixed="right" label="編輯" width="120">
            <template #default>
                <el-button link type="primary" size="small">Edit</el-button>
                <el-button link type="primary" size="small" @click="handleClick">Delete</el-button>             
            </template>
        </el-table-column>
    </el-table>
    <el-table :data="sportData" height="400" style="width: 100%;" v-else>
        <el-table-column fixed prop="name" label="運動名稱" width="150" />
        <el-table-column prop="type" label="分類" width="120" />
        <el-table-column prop="alltime" label="運動時間" width="120" />
        <el-table-column prop="sets" label="組數" width="120" />
        <el-table-column prop="times" label="次數" width="120" />
        <el-table-column prop="calories" label="消耗熱量" width="120" />
        <el-table-column prop="sportdate" label="運動日期" width="120" />
        <el-table-column prop="registerdate" label="紀錄時間" width="120" />   
        <el-table-column prop="isdone" label="完成確認" width="120" />            
        <el-table-column fixed="right" label="編輯" width="120">
            <template #default>
                <el-button link type="primary" size="small">Edit</el-button>
                <el-button link type="primary" size="small" @click="handleClick">Delete</el-button>             
            </template>
        </el-table-column>
    </el-table>
</template>
<script  setup>
import {ref} from 'vue'
const handleClick = () => {
    console.log('click')
}
const isDiet =ref(true)

const pageSwich = (boolen) => {
    isDiet.value =boolen
}


const dietData=[
    {
        name: '雞排',
        type: '豆魚蛋肉類',
        calories : 235,
        date: '2023-07-28',
        registerdate: '2023-07-30',
        
    },
    {
        name: '牛奶',
        type: '乳品類',
        calories : 86,
        date: '2023-07-28',
        registerdate: '2023-07-28',
        
    },
    {
        name: '白飯',
        type: '全榖雜糧類',
        calories : 106,
        date: '2023-07-28',
        registerdate: '2023-07-28',
        
    },
    {
        name: '炸豆腐',
        type: '豆魚蛋肉類',
        calories : 167,
        date: '2023-07-28',
        registerdate: '2023-07-28',
        
    },{
        name: '燙青菜',
        type: '蔬菜類',
        calories : 67,
        date: '2023-07-28',
        registerdate: '2023-07-30',
        
    }
]
const sportData = [
    {
        name: '慢跑',
        type: '有氧',
        alltime:'30min',
        sets:'none',
        times:'none',
        calories:'none',
        sportdate: '2023-07-28 早上',
        registerdate: '2023-07-28',
        isdone: 'True',
    },
    {
        name: '深蹲',
        type: '健身',
        alltime:'none',
        sets:'4組',
        times:'8下',
        calories:'none',
        sportdate: '2023-07-28 下午',
        registerdate: '2023-07-28',
        isdone: 'True',
    },
    {
        name: '握推',
        type: '健身',
        alltime:'none',
        sets:'3組',
        times:'4下',
        calories:'none',
        sportdate: '2023-07-28 下午',
        registerdate: '2023-07-28',
        isdone: 'false',
    },
    { 
        name: '肩舉',
        type: '健身',
        alltime:'none',
        sets:'4組',
        times:'12下',
        calories:'none',
        sportdate: '2023-07-28 下午',
        registerdate: '2023-07-28',
        isdone: 'True',
    },
]
</script>
<style></style>