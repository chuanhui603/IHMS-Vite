<template>
  <div class="text-end">
    <!-- Add the search input field -->
    <form @submit.prevent="searchOrders">
      <input v-model="searchText" placeholder="搜索..." style="margin: 10px;" />
      <!-- 将 type 改为 "submit"，将按钮与表单关联 -->
      <input type="submit" value="查詢" class="btn btn-primary" />
    </form>
    <table class="table table-bordered">
      <thead>
        <tr>
          <!-- <th style="width: 50px">訂單ID</th> -->
          <th style="width: 120px;">訂單編號</th>
          <th style="width: 50px">會員id</th>
          <th style="width: 80px">訂單價格</th>
          <th style="width: 100px">訂單狀態</th>
          <!-- <th>已取消原因</th> -->
          <th style="width: 150px">訂單時間</th>
          <th style="width: 180px">明細</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ordernumber, memberId,pointstotal, state, createtime, coach, course, member, schedule}
        in orders" :key="orderId">
        
          <!-- <td>{{ orderId }}</td> -->
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
          
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script setup>
  import { defineProps , ref, computed} from 'vue';     
  
 
  const prop = defineProps({    
      orders: Array, // 聲明 orders 的類型
  });

  const searchText = ref('');

  const searchOrders = () => {
  // 已经在 computed 中定义了 filteredOrders，无需额外的操作，搜索结果会自动更新
  };

  const filteredOrders = computed(() => {
    const searchQuery = searchText.value.toLowerCase().trim();
    if (!searchQuery) {
      return prop.orders; // 如果搜索文本为空，则返回所有订单。
    }
    // 根据搜索文本過濾订单
    return prop.orders.filter((order) => {
      return (
        order.ordernumber.toLowerCase().includes(searchQuery) ||
        order.memberId.toString().includes(searchQuery) ||
        course.coursename.toString().includes(searchQuery) 

        // 如果需要，可以添加更多属性进行搜索
        // order.anyOtherProperty.toLowerCase().includes(searchQuery)
       ) ;
    });
  });
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
