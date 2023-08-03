<template>
    <div class="container message-container" style="margin-top: 100px;background-color: #fff">
        <h1 v-if="!isEditing">{{ message.title }}</h1>
        <input v-else v-model="message.title" type="text" class="form-control" />
        <p>作者：{{ message.name }}</p>
        <p v-if="!isEditing">分類：{{ message.category }}</p>
        <select v-else v-model="message.category" class="form-control">
            <option v-for="category in ['飲食', '閒聊', '器材', '場地', '健身']" :key="category" :value="category">
                {{ category }}
            </option>
        </select>
        <p>時間：{{ formatDate(message.time) }}</p>
        <p v-if="!isEditing">內容：<span v-html="formatContent(message.contents)"></span></p>
        <textarea v-else v-model="message.contents" class="form-control"></textarea>
        <div v-if="memberId === message.member_id" class="edit-button">
            <button class="btn btn-primary" @click="editMessage">{{ isEditing ? '保存' : '編輯' }}</button>
            <button class="btn btn-danger button-margin-left" @click="deleteMessage">{{ '刪除' }}</button>
        </div>

        <div v-if="images.length > 0">
            <img v-for="(image, index) in images" :key="index" :src="getImageUrl(image)" :alt="'Image ' + index" />
        </div>
    </div>
    <!-- 留言區塊 -->
    <div class="container comments-section " style="background-color: #fff">
        <h2>留言</h2>
        <div v-for="(comment, index) in comments" :key="index" class="comment">
            <p>
                {{ (index + 1) + 'F' }} 作者：{{ comment.authorName }}
                <span class="time">{{ formatDate(comment.time) }}</span><!-- 顯示樓層時間 -->
            </p>
            <p v-html="formatContent(comment.contents)"></p>
        </div>
        <h3>新增留言</h3>
        <textarea v-model="newComment"></textarea>
        <button @click="postComment">提交留言</button>
        <p></p>
        <br /><br />
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
            memberId: null,
            isEditing: false, // 新增的屬性
        };
    },
    methods: {
        formatContent(content) {
            return content.replace(/\r?\n/g, '<br>');
        },
        formatDate(datetime) {
            const date = new Date(datetime);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });
        },
        getImageUrl(imageName) {
            console.log(`https://backstage.ihms.club:8080/api/Image/${this.message.message_id}/images/${imageName}`);
            if (imageName) {
                return `https://backstage.ihms.club:8080/api/Image/${this.message.message_id}/images/${imageName}`;
            } else {
                return '';
            }
        },
        postComment() {
            if (this.newComment) {
                this.submitComment();
            }
        },
        async submitComment() {
            try {
                let commentData = {
                    message_id: this.message.message_id,
                    Contents: this.newComment,
                    member_id: this.memberId //從 data 中取得的會員 id
                };

                console.log('Submitting comment:', commentData);

                await axios.post(`https://backstage.ihms.club:8080/api/MessageBoardDetails`, commentData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                this.newComment = '';
                this.fetchComments();
            } catch (error) {
                console.error('留言提交失敗：', error);
            }
        },
        async fetchComments() {
            try {
                const response = await axios.get(`https://backstage.ihms.club:8080/api/MessageBoardDetails/${this.message.message_id}`);
                console.log("Fetch Comments Response: ", response);
                this.comments = response.data;
            } catch (error) {
                console.error('獲取留言失敗：', error);
            }
        },
        editMessage() {
            if (this.isEditing) {
                this.saveChanges();
            }
            this.isEditing = !this.isEditing;
        },
        deleteMessage() {
            confirm("確定要刪除嗎?")
        },
        async saveChanges() {
            try {
                let messageData = {
                    message_id: this.message.message_id,
                    title: this.message.title,
                    category: this.message.category,
                    contents: this.message.contents,
                    member_id: this.memberId
                };

                console.log('PUT JSON:', JSON.stringify(messageData, null, 2));

                await axios.put(`https://backstage.ihms.club:8080/api/MessageBoardDetails/${this.message.message_id}`, messageData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                this.fetchMessage();
            } catch (error) {
                console.error('更新失敗：', error);
            }
        },
        async fetchMessage() {
            try {
                let messageId = this.$route.params.messageId;
                let response = await axios.get(`https://backstage.ihms.club:8080/api/MessageBoard/${messageId}`);
                this.message = response.data;
            } catch (error) {
                console.error('獲取留言失敗：', error);
            }
        },
    },
    async created() {
        console.log("created method started");
        let messageId = this.$route.params.messageId;

        let currentMember = JSON.parse(localStorage.getItem('currentMember')); //從 localStorage 取得會員資訊
        if (currentMember && currentMember.memberId) {
            this.memberId = currentMember.memberId; //從會員資訊中取得會員 id
        }

        try {
            let response = await axios.get(`https://backstage.ihms.club:8080/api/MessageBoard/${messageId}`);
            console.log("Message response received: ", response);
            this.message = response.data;

            if (this.message.message_id) {
                console.log("Getting images for message with ID: ", this.message.message_id);
                let imageResponse = await axios.get(`https://backstage.ihms.club:8080/api/Image/${this.message.message_id}/images`);
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
.button-margin-left {
    margin-left: 10px;  
}
.message-container {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

.comment p {
    margin-bottom: 6px;
    /* 設定段落間的下方間距 */
}

.comment .time {
    margin-left: 12px;
    /* 設定時間與樓層之間的左邊間距 */
}
</style>
