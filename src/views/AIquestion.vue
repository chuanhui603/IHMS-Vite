<template>
    <div class="container" style="margin-top: 100px;">
      <div class="chat-container">
        <!-- 聊天框 -->
        <div class="chat-box">
          <!-- 顯示對話內容 -->
          <div v-for="message in messages" :key="message.id" class="message-item">
            <div
              :class="['message', { 'user-message': message.isUser, 'ai-message': !message.isUser }]"
            >
              {{ message.content }}
            </div>
          </div>
        </div>
  
        <!-- 預設的 AI 問答項目按鈕 -->
        <div class="ai-options">
          <button v-for="option in aiOptions" :key="option.id" @click="sendMessage(option.text)">
            {{ option.text }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [], // 聊天訊息陣列
        aiOptions: [
          // 預設的 AI 問答項目
          { id: 1, text: '你好' },
          { id: 2, text: '請問你是誰？' },
          { id: 3, text: '天氣如何？' },
          // 可以根據需要增加更多的問答項目
        ],
      };
    },
    methods: {
      // 發送訊息
      sendMessage(text) {
        // 將使用者的訊息加入到聊天訊息陣列中
        this.messages.push({ id: Date.now(), content: text, isUser: true });
  
        // 假設這裡需要向後端的 API 發送訊息，獲得 AI 的回覆
        // 為了示範，我們假設 AI 回覆為固定文字
        const aiReply = '這是 AI 的回覆';
  
        // 將 AI 的回覆加入到聊天訊息陣列中
        this.messages.push({ id: Date.now() + 1, content: aiReply, isUser: false });
      },
    },
  };
  </script>
  
  <style>
  /* 根據需要自訂樣式 */
  .chat-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .chat-box {
    height: 400px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .message-item {
    margin-bottom: 5px;
  }
  
  .message {
    padding: 8px 12px;
    border-radius: 8px;
    margin: 5px;
    display: block; 
    max-width: 80%;
    text-align: right; 
}
  
  .user-message {
    text-align: right;
    /* 將使用者的訊息對齊到右邊 */
    background-color: #cce5ff;
  }
  
  .ai-message {
    text-align: left;
    /* 將 AI 的回覆對齊到左邊 */
    background-color: #f1f1f1;
  }
  
  .ai-options button {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 12px 20px;
    /* 調整按鈕大小 */
    border-radius: 8px;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  </style>
  