<template>
    <div class="container" style="margin-top: 100px;">
        <div class="message-board-container">
            <div class="category-sidebar">
            <h3>分類</h3>
            <ul>
                <li>
                    <button @click="selectCategory('全部文章')" class="btn btn-outline-secondary category-button"
                            :class="{ 'btn-primary': selectedCategory === '全部文章', 'btn-outline-secondary': selectedCategory !== '全部文章' }">查看全部文章</button>
                </li>
                <li>
                    <button @click="selectCategory('飲食')" class="btn btn-outline-secondary category-button"
                            :class="{ 'btn-primary': selectedCategory === '飲食', 'btn-outline-secondary': selectedCategory !== '飲食' }">飲食</button>
                </li>
                <li>
                    <button @click="selectCategory('閒聊')" class="btn btn-outline-secondary category-button"
                            :class="{ 'btn-primary': selectedCategory === '閒聊', 'btn-outline-secondary': selectedCategory !== '閒聊' }">閒聊</button>
                </li>
                <li>
                    <button @click="selectCategory('器材')" class="btn btn-outline-secondary category-button"
                            :class="{ 'btn-primary': selectedCategory === '器材', 'btn-outline-secondary': selectedCategory !== '器材' }">器材</button>
                </li>
                <li>
                    <button @click="selectCategory('場地')" class="btn btn-outline-secondary category-button"
                            :class="{ 'btn-primary': selectedCategory === '場地', 'btn-outline-secondary': selectedCategory !== '場地' }">場地</button>
                </li>
            </ul>
        </div>

            <div class="content">
                <div class="header-section">
                    <h2>目前分類：{{ selectedCategory }}</h2>
                    <router-link to="/message-board-release" class="btn btn-info publish-button">發布文章</router-link>
                </div>
                <div v-for="message in paginatedMessages" :key="message.message_id" class="message-item">
                    <p class="message-divider"></p>
                    <div class="message-info">
                        <div class="content-section">
                            <router-link :to="`/message-board/${message.message_id}`" class="message-title">
                                {{ message.category }}．{{ message.title }}
                            </router-link>
                            <p>內容預覽：{{ message.contents.slice(0, 50) }}{{ message.contents.length > 50 ? '...' : '' }}</p>
                        </div>
                        <div class="meta">
                            <p>發布者：{{ message.name }}  日期:{{ formatDate(message.time) }}</p>
                        </div>
                    </div>
                </div>

                <!-- Bootstrap 分頁 -->
                <nav>
                    <ul class="pagination">
                        <li class="page-item" :class="{ 'active': currentPage === page }" v-for="page in totalPages"
                            :key="page">
                            <a class="page-link" @click="changePage(page)">{{ page }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            selectedCategory: '全部文章',
            messages: [],
            currentPage: 1,
            pageSize: 10,
        };
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category;
            this.currentPage = 1; // 切換分類時，將目前頁數重設為第1頁
        },
        formatDate(datetime) {
            const date = new Date(datetime);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            });
        },
        changePage(page) {
            // 切換頁面
            this.currentPage = page;
        },
        getPaginatedMessages() {
            // 分頁處理：取得目前頁面應該顯示的留言資料
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            const paginatedMessages = this.filteredMessages.slice(startIndex, endIndex);

            console.log(paginatedMessages);
            return this.filteredMessages.slice(startIndex, endIndex);
        },
    },
    computed: {
        filteredMessages() {
            if (this.selectedCategory === '全部文章') {
                return this.messages;
            } else {
                return this.messages.filter((message) => message.category === this.selectedCategory);
            }
        },
        paginatedMessages() {
            // 使用分頁處理後的留言資料
            return this.getPaginatedMessages();
        },
        totalPages() {
            // 計算總頁數
            return Math.ceil(this.filteredMessages.length / this.pageSize);
        },
    },
    created() {
        // 使用 axios 發送 GET 請求取得留言板資料
        axios
            .get('https://localhost:7127/api/MessageBoard')
            .then((response) => {
                this.messages = response.data;
            })
            .catch((error) => {
                console.error('取得留言板資料失敗：', error);
            });
    },
};
</script>
  
<style scoped>
.my-btn-selected {
    background-color: #007bff;  
    border-color: #007bff;     
    color: #fff;              
}
.my-btn-unselected {
    background-color: #28a745; 
    border-color: #28a745;     
    color: #fff;               
}
.my-btn-unselected:hover {
    background-color: #218838;  
    color: #fff;                
}
.category-button {
    margin-bottom: 10px; /* 增加按鈕之間的垂直距離 */
}
.message-board-container {
    display: flex;
    margin-top: 100px;
}

.message-divider {
    border: none;
    border-top: 1px dashed #ccc;
    margin: 10px 0;
}

.category-sidebar {
    flex: 0 0 200px;
}

.content {
    flex: 1;
}

.message-title {
    color: black;
    font-size: 18px;
    margin-bottom: 8px;
}

.message-time {
    color: black;
    font-size: 16px;
    text-align: right;
}



.publish-button {
    max-width: 150px;
    /* 發布文章按鈕寬度 */
}

.header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* 使元素在垂直方向上居中對齊 */
}

.message-info {
    display: flex;
    justify-content: space-between;
}

.content-section {
    flex-grow: 1;
}

.message-title {
    margin-right: 10px; /* or any value you prefer */
}
.meta {
    text-align: right;
    flex-shrink: 0;
    padding-left: 20px; /* for a little spacing, adjust to your preference */
}
</style>
  