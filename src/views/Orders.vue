<template>    
    <div  class="container" style="margin-top: 100px;">
      <h1>訂單</h1><br>
        <div class="row">           
          <div class="col-9">
            <OrderItems :orders="orders"></OrderItems> <!-- 通过props传递order属性 -->
            <!-- <router-link class="nav-link active" to="/detail">Detail</router-link> -->
            <!-- <Detail></Detail > -->
          </div>
          
          <div class="col-3">

          </div>
        </div>
    </div>
</template>
    
<script setup >
  import { ref } from 'vue';
  import OrderItems from '../components/OrderItems.vue';
  // import Detail from '../components/Detail.vue';
  const orders = ref([]);
   const loadOrders = async ()=>{    
     const res = await fetch(`https://localhost:7127/api/OrdersDTO`)
     const datas = await res.json()
     orders.value = datas;  
    //  console.log(datas)
   };
   
   loadOrders();

    
</script>
    
<style scoped>
    
</style>