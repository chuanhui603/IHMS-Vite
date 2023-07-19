<template>
    <div class="container" style="margin-top: 100px;">
      <h1>發布留言板</h1>
      <form @submit.prevent="submitMessage">
        <div class="form-group">
          <label for="title">留言標題</label>
          <input type="text" id="title" v-model="message.title" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="content">留言內容</label>
          <textarea id="content" v-model="message.contents" class="form-control" required></textarea>
        </div>
        <div class="form-group">
          <label for="category">留言分類</label>
          <select id="category" v-model="message.category" class="form-control" required>
            <option value="飲食">飲食</option>
            <option value="閒聊">閒聊</option>
            <option value="器材">器材</option>
            <option value="場地">場地</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">發布</button>
        <button type="button" class="btn btn-secondary" @click="cancelRelease">取消</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        message: {
          title: '',
          contents: '',
          category: '飲食', // 預設為飲食分類
          member_id: 1 // 預設為會員ID為1
        }
      };
    },
    methods: {
        async submitMessage() {
  try {
    // 取得目前的時間
    const currentTime = new Date().toISOString();

    // 更新留言的發布時間
    this.message.time = currentTime;

    // 在發送前先輸出要發送的 JSON 資料到控制台
    console.log('要發送的資料:', this.message);

    // 使用 axios 發送 POST 請求，將留言資料傳送至後端儲存
    await axios.post('https://localhost:7127/api/MessageBoard', this.message);

    // 發布成功後，導向留言列表頁面或其他目標頁面
    // this.$router.push('/message-board'); // 可自行指定目標頁面

    // 以下為暫時示範：返回上一頁
    this.$router.go(-1);
  } catch (error) {
    console.error('發布留言失敗：', error);
  }
},
    }
  };
  </script>
  
  <style>
  /* 根據需求自行設計樣式 */
  </style>
  