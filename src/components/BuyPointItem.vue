<template>
    <div class="container mt-3">
      <div class="row">
        <!-- 圖片與金額 -->
        <div class="col-md-6">
          <div class="coin-card">
            
            <img src="../img/coin.jpg" class="coin-img" alt="Coin Image">
            <!-- <img src="src/img/coin_image.jpg" class="coin-img" alt="Coin Image"> -->
            <div class="coin-amount">500元 / 張</div>
            
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
            <button type="submit" class="btn btn-primary certain"  >提交</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  // 購買點數表單的組件
  const quantity = ref(1);
  const currentPoints = ref(150); // 假設目前的點數為 $150
  
  // 計算屬性用來計算總數量
  const totalQuantity = computed(() => 500 * quantity.value);

  async function submitForm() {
  try {
    // 假設您有一個名為formData的物件，包含要提交的資料
    // const formData = {
    //   quantity: quantity.value, // 使用者輸入的數量
    //   totalQuantity: totalQuantity.value, // 計算後的總數量
    // };

    const formData = ref({
      Count:quantity,
      MemberId:6,
      
})
    
    // 使用fetch API將資料提交到後端API
    const response = await fetch('https://localhost:7127/api/PointRecordsDTO', {
      method: 'POST', // 或 'PUT' 或其他HTTP請求方法，根據您的需求
      headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData.value),// 將資料轉換為JSON格式並放入body中
    });
    router.push('/PointRecord')
    // window.location.href = 'https://localhost:7127/CreditCard'
  
  } catch (error) {
    // 處理其他錯誤情況
    // 在這裡您可以處理其他可能的錯誤，例如網絡錯誤等
  }
}

 
  </script>
  
  <style scoped>
  .coin-card {
    position: relative;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    
  }
  
  .coin-img {
    max-width: 100%;
  }
  
  .coin-amount {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: pink;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .certain{
    margin: 10px;
    padding: 8px;

  }
  
  
  </style>
  