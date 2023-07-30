<template >
    <div>
        <el-button-group>
            <el-button :icon="Edit" @click="pageSwich(true)">飲食</el-button>
            <el-button :icon="Edit" @click="pageSwich(false)">運動</el-button>
        </el-button-group>
    </div>

    <el-table :data="dietData" height="400" style="width: 100%;" v-if="isDiet">
        <el-table-column fixed prop="date" label="食物名稱" width="150" />
        <el-table-column prop="name" label="種類" width="120" />
        <el-table-column prop="state" label="熱量" width="120" />
        <el-table-column prop="city" label="紀錄時間" width="120" />
        <el-table-column prop="address" label="圖片" width="600" />       
        <el-table-column fixed="right" label="編輯" width="120">
            <template #default>
                <el-button link type="primary" size="small">Edit</el-button>
                <el-button link type="primary" size="small" @click="handleClick">Delete</el-button>             
            </template>
        </el-table-column>
    </el-table>
    <el-table :data="sportData" height="400" style="width: 100%;" v-else>
        <el-table-column fixed prop="date" label="運動名稱" width="150" />
        <el-table-column prop="name" label="分類" width="120" />
        <el-table-column prop="state" label="運動日期" width="120" />
        <el-table-column prop="city" label="紀錄時間" width="120" />   
        <el-table-column prop="city" label="完成確認" width="120" />   
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
const dietData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]
</script>
<style></style>