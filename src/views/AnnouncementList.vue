<template>
  <div class="container" style="margin-top: 100px;">
    <h1>公告列表</h1><br>
    <ul>
      <li v-for="announcement in sortedAnnouncements" :key="announcement.announcemet_id">
        <div class="announcement-wrapper">
          <router-link :to="`/announcements/${announcement.announcemet_id}`">
            <h3>{{ announcement.title }}</h3>
          </router-link>
          <p class="time">{{ formatTime(announcement.time) }}</p>
        </div>
        <hr class="announcement-divider" />
      </li>
    </ul>
  </div>
</template>

  
  
  
<style>
.announcement-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  margin-left: 20px;
}

.announcement-divider {
  border: none;
  border-top: 1px dashed #ccc;
  margin: 20px 0;
}
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      announcements: []
    };
  },
  computed: {
    sortedAnnouncements() {
      return this.announcements.sort((a, b) => new Date(b.time) - new Date(a.time));
    }
  },
  mounted() {
    this.fetchAnnouncements();
  },
  methods: {
    async fetchAnnouncements() {
      try {
        const response = await axios.get('https://localhost:7127/api/announcements');
        console.log(response.data); // 使用 console.log 確認回應資料
        this.announcements = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    formatTime(time) {
      const dateTime = new Date(time);
      return dateTime.toLocaleString();
    }
  }
};
</script>
  
  