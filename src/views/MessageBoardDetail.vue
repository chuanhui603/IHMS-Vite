<template>
    <div class="container" style="margin-top: 100px;">
        <h1>{{ message.title }}</h1>
        <p>分類：{{ message.category }}</p>
        <p>時間：{{ formatDate(message.time) }}</p>
        <p>內容：{{ message.contents }}</p>
        <h2>相關圖片：</h2>
        <div v-if="images.length > 0">
            <img v-for="(image, index) in images" :key="index" :src="getImageUrl(image)" :alt="'Image ' + index" />

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            message: {},
            images: []
        };
    },
    methods: {
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
        getImageUrl(imageName) {
            console.log(`https://localhost:7127/api/Image/${this.message.message_id}/images/${imageName}`); // 在控制台輸出圖片URL
            if (imageName) {
                return `https://localhost:7127/api/Image/${this.message.message_id}/images/${imageName}`;
            } else {
                return ''; // 如果沒有圖片，返回空字串或預設圖片的 URL
            }
        }

    },
    async created() {
        console.log("created method started");  //新增
        let messageId = this.$route.params.messageId;
        try {
            let response = await axios.get(`https://localhost:7127/api/MessageBoard/${messageId}`);
            console.log("Message response received: ", response);  //新增
            this.message = response.data;

            // 確保 message 已經被設置，再獲取圖片
            if (this.message.message_id) {  // 注意此處改動
                console.log("Getting images for message with ID: ", this.message.message_id);  // 注意此處改動
                let imageResponse = await axios.get(`https://localhost:7127/api/Image/${this.message.message_id}/images`);
                console.log("Image response received: ", imageResponse);  //新增
                this.images = imageResponse.data;
                console.log("Images: ", this.images); // 將此行放在獲取圖片數據之後
            }
        } catch (error) {
            console.error('取得留言板資料失敗：', error);
        }
    }
};
</script>
