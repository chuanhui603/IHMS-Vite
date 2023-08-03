<template>
    <div class="container" style="margin-top: 79px;  background-color: #fff">
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

  const { memberId } = JSON.parse(localStorage.getItem('currentMember'))
  
  
  const PointRecords = ref([]);
   const loadPointRecord = async ()=>{ 
    
    if(memberId) {
      const res = await fetch(`https://localhost:7127/api/PointRecordsDTO/${memberId}`)
      
      const datas = await res.json()
      PointRecords.value = datas;  
      
    }  
     
   };
   
   
   loadPointRecord();


    
</script>
    
<style scoped>
    
</style>