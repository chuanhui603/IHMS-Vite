<template>
   <table class="table table-bordered">
      <thead>
        <tr>
          <th>訂單明細ID</th>        
                   
                   
        </tr>
      </thead>
      <tbody>
        <tr v-for="{OrderdetailId,  } in OrderDetail" :key="OrderdetailId">
        <!-- <router-link :to="`/detail/${order.id}`">Detail</router-link> -->
          <td>{{ OrderdetailId }}</td>       
              
                    
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup> 
    const { ref } = require('vue'); 
  
 
    const prop = defineProps({            
        OrderDetail:Array,
       
  });
//   console.log(prop)
//   console.log(prop.orders)
  </script>
  
  <style scoped>
  
  </style>
  