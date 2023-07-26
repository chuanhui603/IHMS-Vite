<template>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th style="width: 50px">訂單ID</th>
          <th style="width: 120px;">訂單編號</th>
          <th style="width: 50px">會員id</th>
          <th style="width: 80px">訂單價格</th>
          <th style="width: 100px">訂單狀態</th>
          <!-- <th>已取消原因</th> -->
          <th style="width: 150px">訂單時間</th>
          <th style="width: 180px">明細</th>
          <!-- <th style="width: 80px">刪除</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="{orderId, ordernumber, memberId,pointstotal, state, createtime, coach, course, member, schedule}
 in orders" :key="orderId">
        
          <td>{{ orderId }}</td>
          <td>{{ ordernumber }}</td>
          <td>{{ memberId }}</td>
          <td>{{ pointstotal }}</td>
          <td>{{ state }}</td>
          <!-- <td>{{ reason }}</td> -->
          <td>{{ createtime }}</td>           
                   
          <td style="weight:50px">
            <!-- 呈現教練資料 -->
            <ul>
              <li v-for="c in coach">教練ID: {{ c.memberId}} </li>
            </ul>
            <ul>
              <li v-for="m in member">教練名字: {{ m.name}} </li>
            </ul>

            <!-- 呈現課程名稱 -->
            <ul>
              <li v-for="c in course">課程名稱: {{ c.coursename }}</li>
            </ul>

            <!-- 呈現課程時間 -->
            <ul>
              <li v-for="s in schedule">課程時間: {{ s.startTime }}</li>
            </ul>

             <!-- 呈現課程費用 -->
             <ul>
              <li v-for="s in schedule">課程費用: {{ s.point}}</li>
            </ul>
          </td>
          <!-- <td style="weight:100px">
          <button @click="deleteOrder(orderId)" class="delete-button">刪除</button>
          </td> -->
          
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';     
  
 
  const prop = defineProps({    
      orders: Array, // 聲明 orders 的類型
  });


  const deleteOrder = async (orderId) => {
  const index = prop.orders.findIndex(order => order.orderId === orderId);
  if (index !== -1) {
    try {
      // 使用axios發送DELETE請求到後端API
      await axios.delete(`https://127.0.0.1:7127/api/OrdersDTO/${orderId}`);
      // 成功刪除後，更新前端的資料列表
      prop.orders.splice(index, 1);
    } catch (error) {
      // 處理錯誤，例如顯示錯誤訊息
      console.error('刪除訂單失敗', error);
    }
  }

  
};

  // console.log(orders)
//   console.log(prop)
//   console.log(prop.orders)
  </script>
  
  <style scoped>
/* 自定義刪除按鈕樣式 */
.delete-button {
  background-color: #66d862; /* 背景顏色 */
  color: white; /* 文字顏色 */
  border: none; /* 移除邊框 */
  padding: 8px 16px; /* 設定內邊距 */
  border-radius: 4px; /* 圓角邊框 */
  cursor: pointer; /* 鼠標樣式為手指指針 */
  font-weight: bold; /* 加粗文字 */
  margin: 5px;
}

/* 讓按鈕置中 */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 200px;
}

table {
  table-layout: fixed;
  
}

table th, table td {
   /* 可以自行調整各欄位的寬度百分比 */
  text-align: center; /* 如果您希望文字居中對齊，加上這個屬性 */
  padding: 8px; /* 設定內距，可以自行調整 */
}

</style>
