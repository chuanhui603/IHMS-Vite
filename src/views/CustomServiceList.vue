<template>
    <div class="container" style="margin-top: 100px;background-color: #fff">
        <h1>客服回報列表</h1>
        <br>
        <ul class="customerService-list">
            <li v-for="report in displayedReports" :key="report.customer_service_id">
                <router-link :to="`/customerService/${report.customer_service_id}`">
                    <div class="customerService-wrapper">
                        <h3 class="title">{{ report.title }}</h3> 
                        <p>{{ formatTime(report.updated_time) }}</p>
                        <!-- 回覆狀態顯示 -->
                        <p v-if="new Date(report.updated_time) > new Date(report.created_time)">已回覆</p>
                        <p v-else>未回覆</p>
                    </div>
                </router-link>
                <hr class="customerService-divider" />
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            reports: [],
            currentPage: 1,
            perPage: 10,
            userId: ''  // localStorage獲得用戶ID
        };
    },
    created() {
        const currentMember = JSON.parse(localStorage.getItem('currentMember'));
        if (currentMember && currentMember.memberId) {
            this.userId = currentMember.memberId;
        } else {
            alert('您尚未登入，無法瀏覽回報！');
            this.$router.push('/login');
        }
    },
    computed: {
        displayedReports() {
            const userReports = this.reports.filter(report => report.member_id == this.userId);
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            const sortedReports = userReports.slice().sort((a, b) => new Date(b.updated_time) - new Date(a.updated_time));
            return sortedReports.slice(start, end);
        },
    },
    mounted() {
        this.fetchCustomerServiceReports();
    },
    methods: {
        async fetchCustomerServiceReports() {
            try {
                const response = await axios.get('https://backstage.ihms.club:8080/api/CustomService');  // Update API path
                console.log('Response data:', response.data);
                this.reports = response.data;
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

  <!-- Styles... -->
