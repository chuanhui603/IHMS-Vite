<template>
    <nav aria-label="Page navigation example">
 <ul class="pagination">
   <li class="page-item" v-for="(value, index) in totalPage" :key="index" @click="clickHandler(value)"><a class="page-link">{{value}}</a></li>
  
  
 </ul>
</nav>
</template>
   
<script setup>
//定義父元件傳過來的資料
   const props = defineProps({
       totalPage:Number
   })
  // console.log(props.totalPage)

  //定義了父元件傳過來的事件
  const emit = defineEmits(['childClick'])
  const clickHandler = page =>{
   //引發父元件的事件，將資料傳給父元件
    emit("childClick",page)
  }
</script>
   
<style scoped>
   
</style>