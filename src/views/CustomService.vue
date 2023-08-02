<template>
    <div class="container" style="margin-top: 100px;background-color: #fff">
        <h1>回報客服</h1>
        <form @submit.prevent="submitRequest">
            <div class="form-group">
                <label for="title">主旨</label>
                <input type="text" id="title" v-model="request.title" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="content">內容</label>
                <textarea id="content" v-model="request.contents" class="form-control" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">提交</button>
            <button type="button" class="btn btn-secondary" @click="cancelRequest">取消</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            request: {
                title: '',
                contents: '',
                member_id: '',
            }
        };
    },
    created() {
        const currentMember = JSON.parse(localStorage.getItem('currentMember'));
        console.log(currentMember); // 這將在控制台打印當前會員的資訊
        if (currentMember && currentMember.memberId) {
            this.request.member_id = currentMember.memberId;
        } else {
            alert('您尚未登入，無法回報客服！');
            this.$router.push('/login');
        }
    },
    methods: {
        cancelRequest() {
            this.$router.go(-1);
        },
        async submitRequest() {
            console.log('submitRequest 被調用了，member_id 的值為：', this.request.member_id);
            console.log('將要傳送給後端的 JSON：', JSON.stringify(this.request));
            try {
                await axios.post('http://4.216.224.225:81/api/CustomService', this.request, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                this.$router.go(-1);
            } catch (error) {
                console.error('回報客服失敗：', error);
            }
        }
    }
};
</script>
