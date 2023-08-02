<template>
  <div class="container" style="margin-top: 100px;background-color: #fff">
    <h1>公告列表</h1>
    <br>
    <ul class="announcement-list">
      <li v-for="announcement in displayedAnnouncements" :key="announcement.announcemet_id">
        <router-link :to="`/announcements/${announcement.announcemet_id}`">
          <div class="announcement-wrapper">
            <h3 class="title">{{ announcement.title }}</h3>
            <p class="time">{{ formatTime(announcement.time) }}</p>
          </div>
        </router-link>
        <hr class="announcement-divider" />
      </li>
    </ul>

    <!-- 使用 Bootstrap 的 Pagination 元件 -->
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li v-for="page in visiblePages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style >


.announcement-list {
  list-style-type: none;
  padding: 0;
}

.announcement-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  flex: 1;
}

.time {
  margin-left: 20px;
}

.announcement-divider {
  border: none;
  border-top: 1px dashed #ccc;
  margin: 20px 0;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.pagination button {
  margin-right: 5px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      announcements: [],
      currentPage: 1,
      perPage: 10
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.announcements.length / this.perPage);
    },
    displayedAnnouncements() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      const sortedAnnouncements = this.announcements.slice().sort((a, b) => new Date(b.time) - new Date(a.time));
      return sortedAnnouncements.slice(start, end);
    },
    visiblePages() {
      const totalVisiblePages = 5; // 顯示五個頁碼按鈕
      const halfVisiblePages = Math.floor(totalVisiblePages / 2);
      const startPage = Math.max(1, this.currentPage - halfVisiblePages);
      const endPage = Math.min(this.totalPages, startPage + totalVisiblePages - 1);
      const visiblePages = [];

      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }

      return visiblePages;
    }
  },
  mounted() {
    this.fetchAnnouncements();
  },
  methods: {
    async fetchAnnouncements() {
      try {
        const response = await axios.get('http://4.216.224.225:81/api/announcements');
        console.log(response.data); // 使用 console.log 確認回應資料
        this.announcements = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    formatTime(time) {
      const dateTime = new Date(time);
      return dateTime.toLocaleString();
    },
    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>
