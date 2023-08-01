<template>
  <el-carousel :interval="5000" type="card"  height="300px">
    <el-carousel-item v-for="(image, index) in imgList" :key="index">
      <a @click="imgDelete(index)"><el-icon><Close /></el-icon></a>
      <el-image style="width: 100%; height: 100%" :src="imgUrl[index]" :alt="prop.imgList[index].name" fit="contain"/>  
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import {ref} from 'vue'
const prop = defineProps({
  imgList: Array
})
console.log(prop.imgList)
const imgUrl = ref([])
const imgUrlAdd = ()=>{
  for (let i = 0; i < prop.imgList.length; i++) {
        const file =  prop.imgList[i];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imgUrl.value.push(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
console.log(imgUrl)
}
imgUrlAdd()

const emit = defineEmits(['img-delete'])
const imgDelete =(index)=>{
  emit("img-delete",index);
}
</script>

<style scoped>
.el-carousel-item{
  background-color: #fff;
}
.el-carousel__item p {
  color: #475669;
  opacity: 0.75;
  line-height: 15px;
  margin: 0;
  text-align: center;
}

.el-carousel__item a{
  float: right;
  font-size: 20px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>