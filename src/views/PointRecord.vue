<template>
    <div class="container" style="margin-top: 100px;">
      <h1>點數紀錄</h1><br>      
      <div class="row">           
        <div class="col-13">
          <PointRecordItem :PointRecords="PointRecords"></PointRecordItem> 
        </div>  
           
      </div>
    
    </div>
</template>
    
<script setup >

  import { ref } from 'vue';
  import PointRecordItem from '../components/PointRecordItem.vue';
  
  const PointRecords = ref([]);
   const loadPointRecord = async ()=>{    
     const res = await fetch(`https://localhost:7127/api/PointRecordsDTO`)
     const datas = await res.json()
     PointRecords.value = datas;  
     console.log(datas)
   };
   
   loadPointRecord();


    
</script>
    
<style scoped>
    
</style>