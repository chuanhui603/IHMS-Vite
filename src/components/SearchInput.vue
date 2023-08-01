
<template>
    <el-autocomplete v-model="state" :fetch-suggestions="querySearch" popper-class="my-autocomplete"
        placeholder="Please input" @select="handleSelect">
        <template #suffix>
            <el-icon class="el-input__icon" @click="handleIconClick">
                <edit/>
            </el-icon>
        </template>
        <template #default="{ item }">
            <div class="value">{{ item.value }}</div>
            <span class="link">{{ item.link }}</span>
        </template>
    </el-autocomplete>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import { wholeGrains, proteinFoods, dairyProducts, vegetables, fruits, fatsAndNuts } from '../js/dietFood.js'
const prop = defineProps({
    type: String
    input: String
})
interface LinkItem {
    value: string
    link: string
}

const state = ref('')
const links = ref<LinkItem[]>([])

const querySearch = (queryString: string, cb) => {
    const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value
    // call callback function to return suggestion objects
    cb(results)
}
const createFilter = (queryString) => {
    return (restaurant) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
    }
}
const loadAll = () => {
    switch (prop.type) {
        case "全榖雜糧類":
            return wholeGrains
        case "豆魚蛋肉類":
            return proteinFoods
        case "乳品類":
            return dairyProducts
        case "蔬菜類":
            return vegetables
        case "水果類":
            return fruits
        case "油脂與堅果種子類":
            return fatsAndNuts
    }

}
const handleSelect = (item: LinkItem) => {
    console.log(item)
}

const handleIconClick = (ev: Event) => {
    console.log(ev)
}

onMounted(() => {
  links.value = loadAll()
})

</script>
  
<style>
.my-autocomplete li {
    line-height: normal;
    padding: 7px;
}

.my-autocomplete li .name {
    text-overflow: ellipsis;
    overflow: hidden;
}

.my-autocomplete li .addr {
    font-size: 12px;
    color: #b4b4b4;
}

.my-autocomplete li .highlighted .addr {
    color: #ddd;
}
</style>