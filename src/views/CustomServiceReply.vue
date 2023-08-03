<template>
    <div class="container" style="margin-top: 100px;background-color: #fff">
        <div class="customerService-reply-container">
            <h1>客服回報詳情</h1>
            <div class="customerService-reply-details">
                <h2>{{ report.title }}</h2>
                <p>{{ report.contents }}</p>
                <p>回報時間: {{ formatTime(report.created_time) }}</p>
                <p>回覆時間: {{ formatTime(report.updated_time) }}</p>
            </div>
            <div class="customerService-reply-response">
                <h2>客服回覆</h2>
                <p v-if="report.reply">{{ report.reply }}</p>
                <p v-else>客服還沒回答，請稍等。</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            report: {}
        };
    },
    created() {
        this.fetchReportDetails();
    },
    methods: {
        async fetchReportDetails() {
            const { id } = this.$route.params;
            try {
                const response = await axios.get(`https://backstage.ihms.club:8080/api/CustomService/${id}`);
                console.log('Response data:', response.data);
                this.report = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        formatTime(timestamp) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);
            const hour = ("0" + date.getHours()).slice(-2);
            const minute = ("0" + date.getMinutes()).slice(-2);
            const second = ("0" + date.getSeconds()).slice(-2);
            return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        }
    }
};
</script>

<style scoped>
    /* Styles... */
</style>
