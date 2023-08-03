<template>
    <div class="container" style="margin-top: 100px;background-color: #fff">
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
                    <option value="健身">健身</option>
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
                member_id: '',
                images: []
            }
        };
    },
    created() {

        const currentMember = JSON.parse(localStorage.getItem('currentMember'));
        console.log(currentMember); 
        if (currentMember && currentMember.memberId) {
            this.message.member_id = currentMember.memberId;
        } else {
            alert('您尚未登入，無法發布留言！');
            this.$router.push('/login');
        }
    },
    methods: {
        cancelRelease() {
            this.$router.go(-1);
        },
        onFileChange(event) {
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            const selectedImages = [...event.target.files];

            for (let image of selectedImages) {
                if (!validImageTypes.includes(image.type)) {
                    alert('檔案格式必須為 GIF, JPEG, or PNG');
                    this.$refs.images.value = null;  
                    return;
                }
            }

            this.message.images = selectedImages;
        },
        async submitMessage() {
            console.log('submitMessage 被調用了，member_id 的值為：', this.message.member_id);
            try {
                const formData = new FormData();
                formData.append('title', this.message.title);
                formData.append('contents', this.message.contents);
                formData.append('category', this.message.category);
                formData.append('member_id', this.message.member_id);

                this.message.images.forEach((image) => {
                    formData.append('images', image);
                });

                await axios.post('https://backstage.ihms.club:8080/api/MessageBoard/CreateMessage', formData, {
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
