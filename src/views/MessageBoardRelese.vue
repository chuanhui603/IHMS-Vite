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
            <div class="form-group">
                <br />
                <label for="images">上傳圖片</label>
                <input type="file" id="images" ref="images" @change="onFileChange" multiple>
            </div>
            <br />
            <div v-if="message.images.length > 0">
                <h5>已選擇的圖片檔案：</h5>
                <ul>
                    <li v-for="(image, index) in message.images" :key="index">{{ image.name }}</li>
                </ul>
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
                category: '飲食',
                member_id: 1,
                images: []
            }
        };
    },
    methods: {
    onFileChange(event) {
        this.message.images = [...event.target.files];
    },
    async submitMessage() {
        try {
            const formData = new FormData();
            formData.append('title', this.message.title);
            formData.append('contents', this.message.contents);
            formData.append('category', this.message.category);
            formData.append('member_id', this.message.member_id);

            this.message.images.forEach((image) => {
                formData.append('images', image);
            });

            await axios.post('https://localhost:7127/api/MessageBoard/CreateMessage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            this.$router.go(-1);
        } catch (error) {
            console.error('發布留言失敗：', error);
        }
    }
}
};
</script>
  