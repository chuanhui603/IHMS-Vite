<template>
    <div class="container message-container" style="margin-top: 100px;">
        <h1>{{ message.title }}</h1>
        <p>分類：{{ message.category }}</p>
        <p>時間：{{ formatDate(message.time) }}</p>
        <p>內容：{{ message.contents }}</p>
        <h2>相關圖片：</h2>
        <div v-if="images.length > 0">
            <img v-for="(image, index) in images" :key="index" :src="getImageUrl(image)" :alt="'Image ' + index" />
        </div>
    </div>
    <!-- 留言區塊 -->
    <div class="container comments-section">
        <h2>留言</h2>
        <div v-for="(comment, index) in comments" :key="index" class="comment">
            <p>{{ formatDate(comment.time) }}</p>
            <p>{{ comment.contents }}</p>
            
        </div>
        <h3>新增留言</h3>
        
        <textarea v-model="newComment"></textarea>
        <button @click="postComment">提交留言</button>
        <p></p>
        <input type="file" @change="onFileChange">
        
        <br/><br/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            message: {},
            images: [],
            comments: [],
            newComment: '',
            newImage: null,
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
            console.log(`https://localhost:7127/api/Image/${this.message.message_id}/images/${imageName}`); 
            if (imageName) {
                return `https://localhost:7127/api/Image/${this.message.message_id}/images/${imageName}`;
            } else {
                return ''; 
            }
        },
        onFileChange(event) {
            this.newImage = event.target.files[0];
        },
        async postComment() {
    if (this.newComment) {
        try {
            const formData = new FormData();
            formData.append('message_id', this.message.message_id);
            formData.append('Contents', this.newComment);
            formData.append('member_id', 2);
            if (this.newImage) {
                formData.append('image', this.newImage);
            }
            
            console.log('Submitting comment:', formData);
            await axios.post(`https://localhost:7127/api/MessageBoardDetails`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            this.newComment = '';
            this.newImage = null;
            await this.fetchComments();
        } catch (error) {
            console.error('留言提交失敗：', error);
        }
    }
},
        async fetchComments() {
            try {
                const response = await axios.get(`https://localhost:7127/api/MessageBoardDetails/${this.message.message_id}`);
                this.comments = response.data;
            } catch (error) {
                console.error('獲取留言失敗：', error);
            }
        },
    },
    async created() {
        console.log("created method started");  
        let messageId = this.$route.params.messageId;
        try {
            let response = await axios.get(`https://localhost:7127/api/MessageBoard/${messageId}`);
            console.log("Message response received: ", response);
            this.message = response.data;

            if (this.message.message_id) {
                console.log("Getting images for message with ID: ", this.message.message_id);  
                let imageResponse = await axios.get(`https://localhost:7127/api/Image/${this.message.message_id}/images`);
                console.log("Image response received: ", imageResponse);
                this.images = imageResponse.data;
                console.log("Images: ", this.images);

                await this.fetchComments();
            }
        } catch (error) {
            console.error('取得留言板資料失敗：', error);
        }
    },
};
</script>

<style scoped>
.message-container {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.message-container h1 {
    margin-top: 0;
}

.message-container img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
    margin-top: 20px;
}

.comments-section {
    margin-top: 30px;
}

.comments-section textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

.comments-section button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #0099cc;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.comments-section button:disabled {
    background-color: #ccc;
}

.comment {
    border: 1px solid #ddd;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
}
</style>
