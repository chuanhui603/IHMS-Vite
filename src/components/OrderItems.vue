<template>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>訂單ID</th>
          <th>訂單編號</th>
          <th>會員id</th>
          <th>訂單價格</th>
          <th>訂單狀態</th>
          <th>已取消原因</th>
          <th>訂單時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{orderId, ordernumber, memberId,pointstotal, state, reason, createtime } in orders" :key="OrderId">
          <td>{{ orderId }}</td>
          <td>{{ ordernumber }}</td>
          <td>{{ memberId }}</td>
          <td>{{ pointstotal }}</td>
          <td>{{ state }}</td>
          <td>{{ reason }}</td>
          <td>{{ createtime }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>    
    const prop = defineProps({    
        orders: Array, // 聲明 orders 的類型   
       
  });
//   console.log(prop)
//   console.log(prop.orders)
  </script>
  
  <style scoped>
  
  </style>
  