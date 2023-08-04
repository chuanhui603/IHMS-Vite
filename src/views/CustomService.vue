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
            <p></p>
            <div class="edit-button">
            <button type="submit" class="btn btn-primary">提交</button>
            <button type="button" class="btn btn-secondary button-margin-left" @click="cancelRequest">取消</button>
            </div>
            <br>
            <br>
        </form>
        <div>
    <h2>如何回報客服？</h2>
    <p>首先，登入您的帳號，然後進入到"客服"。</p>
    <p>在出現的畫面中，填寫"主旨"以及"內容"。請將您的問題詳細描述，包括遇到問題的時間、使用的設備和瀏覽器資訊。</p>
    <p>最後，點選"提交"按鈕，我們的客服團隊將會收到您的回報並儘快處理。</p>

    <h2>回報注意事項：</h2>
    <p>請提供完整且準確的資訊，這會幫助我們更快地瞭解您的問題並找到解決方案。</p>
    <p>若是涉及帳號或個人資訊的問題，請不要公開您的敏感資訊。我們的客服人員在需要時會透過安全的方式聯絡您。</p>
    <p>在我們處理您的問題時，請耐心等待並避免重複提交相同的問題。當您收到我們的回覆時，如果問題已經解決，請關閉服務單，如果問題還未解決，請繼續在客服回覆，幫助我們更好地追蹤問題。</p>
    <p>希望這些信息對您有所幫助！</p>
</div>
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
                await axios.post('https://backstage.ihms.club:8080/api/CustomService', this.request, {
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
<style scoped>
.button-margin-left {
    margin-left: 10px;  
}</style>