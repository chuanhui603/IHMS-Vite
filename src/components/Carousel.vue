<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(image, index) in imgList" :key="index">
      <p>{{ prop.imgList[index].name }}</p>
      <img :src="image" width="100" height="100">
      <button @click="imgDelete()">刪除相片</button>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
const prop = defineProps({
  imgList: Array
})
console.log(prop.imgList[0])
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>