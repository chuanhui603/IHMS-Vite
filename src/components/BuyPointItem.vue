<template>
    <div class="container mt-5">
      <div class="row">
        <!-- 圖片與金額 -->
        <div class="col-md-6">
          <div class="coin-card">
            
            <img src="img/coin.jpg" class="coin-img" alt="Coin Image">
            <div class="coin-amount">500元</div>
            
          </div>
        </div>
  
        <!-- 訂單數量表單 -->
        <div class="col-md-6">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="quantity" class="form-label">數量：</label>
              <input type="number" id="quantity" class="form-control" v-model="quantity" min="1" required>
            </div>
            <div class="mb-3">
              <label for="total" class="form-label">總數量：</label>
              <input type="text" id="total" class="form-control" :value="totalQuantity" readonly>
            </div>
            <button type="submit" class="btn btn-primary certain" @click="submitForm" >提交</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // 購買點數表單的組件
  const quantity = ref(1);
  const currentPoints = ref(150); // 假設目前的點數為 $150
  
  // 計算屬性用來計算總數量
  const totalQuantity = computed(() => 500 * quantity.value);

  function submitForm() {
  // 可以在這裡處理表單提交後的操作
  // 使用context.emit發送自定義事件 'updatePoints'，並將新的點數傳遞給父組件
  const newPoints = currentPoints + totalQuantity.value;
  context.emit('updatePoints', newPoints);
}
  </script>
  
  <style scoped>
  .coin-card {
    position: relative;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .coin-img {
    max-width: 100%;
  }
  
  .coin-amount {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .certain{
    margin: 10px;
    padding: 8px;

  }
  
  
  </style>
  