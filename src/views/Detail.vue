<template>    
    <div  class="container" style="margin-top: 100px;">
      <h1>訂單明細</h1><br>
        <div class="row">           
          <div class="col-9">
            <DetailItem :OrderDetail="OrderDetail"></DetailItem> 
          </div>         
          
        </div>
    </div>
</template>
    
<script setup >
  import { ref } from 'vue';

  const plans = ref([])

  import DetailItem from '../components/DetailItem.vue';
 
  const OrderDetail = ref([]);
  const loadOrderDetial = async ()=>{  
    const res = await fetch(`https://localhost:7127/api/OrderDetailsDTO`)
    const datas = await res.json()
    OrderDetail.value = datas;  
    //  console.log(datas)
  };
  
  loadOrderDetial();

    
</script>
    
<style scoped>
    
</style>