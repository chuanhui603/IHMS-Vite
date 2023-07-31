<template>
    <br><br><br><br>
    <div>
      <h1>目前登入的會員資訊：</h1>
      <p v-if="currentMember">會員編號: {{ currentMember.MemberId }}</p>
      <p v-if="currentMember">會員姓名: {{ currentMember.Name }}</p>
      <p v-if="currentMember">會員信箱: {{ currentMember.Email }}</p>
      <!-- 其他會員資訊，可以根據需要顯示更多欄位 -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentMember: null, // 存放目前登入的會員資訊
      };
    },
    created() {
      // 在 Vue 的 created 生命週期鉤子中呼叫後端登入 API
      this.login();
    },
    methods: {
      async login() {
        try {
          // 使用 fetch 或其他方式呼叫後端的登入 API
          const response = await fetch('https://localhost:7127/api/Members/Login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Account: 'your-account', Password: 'your-password' }),
          });
  
          if (response.ok) {
            // 登入成功，將會員資訊存入 localStorage
            const data = await response.json();
            localStorage.setItem('currentMember', JSON.stringify(data));
            this.currentMember = data;
          } else {
            // 登入失敗，顯示錯誤訊息
            console.error('登入失敗');
          }
        } catch (error) {
          console.error('發生錯誤', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* 根據需要自訂樣式 */
  </style>
  