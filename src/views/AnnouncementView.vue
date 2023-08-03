<template>
    <div class="container" style="margin-top: 100px;background-color: #fff">
      <h1>{{ announcement.title }}</h1>
      <p>{{ formatTime(announcement.time) }}</p>
      <p>{{ announcement.contents }}</p>
      <img v-if="announcement.image" :src="getImageUrl(announcement.image)" alt="Announcement Image" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['announcementId'],
    data() {
      return {
        announcement: {}
      };
    },
    mounted() {
      this.fetchAnnouncement();
    },
    methods: {
      async fetchAnnouncement() {
        try {
          const response = await axios.get(`https://backstage.ihms.club:8080/api/announcements/${this.announcementId}`);
          this.announcement = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      formatTime(time) {
        const dateTime = new Date(time);
        return dateTime.toLocaleString();
      },
      getImageUrl(image) {
        if (image) {
          return `https://backstage.ihms.club:8080/api/image/${image}`;
        } else {
          return ''; // 如果沒有圖片，返回空字串或預設圖片的 URL
        }
      }
    }
  };
  </script>
  
  <style>
  
  </style>
  