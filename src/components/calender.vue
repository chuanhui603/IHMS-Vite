<template>
        <el-calendar>
                <template #date-cell="{ data }">
                        <div class="calendar-item">
                                <div class="calendar-time">
                                        {{ data.day.split('-').slice(2).join('') }}
                                </div>
                                <div>
                                        <span class="remark-text calendar-time" v-for="(item, index) in dealMyDate(data.day)"
                                                :key="index">
                                                {{ item }}
                                        </span>
                                </div>
                        </div>
                </template>
        </el-calendar>
</template>
  
<script setup>
import {reactive, ref } from 'vue'
const resDate = reactive([
    { date: '2021-09-30', content: '放假' },
    { date: '2021-10-01', content: '放假' },
    { date: '2021-10-02', content: '划水' },
    { date: '2021-10-24', content: '学习vue' },
    { date: '2021-10-25', content: '学习vue' },
    { date: '2021-10-26', content: '学习vue' },
    { date: '2021-10-27', content: '学习vue' },
    { date: '2021-10-28', content: '学习vue' },
  ])
  
    const dealMyDate = (v) => {
    let res = '';
    for (let index = 0; index < resDate.length; index++) {
      if (resDate[index].date == v) {
        res = resDate[index].content;
        break;
      }
    }
    return res;
  }

const value = ref(new Date())
</script>