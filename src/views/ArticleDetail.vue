<template>
    <div class="container" style="margin-top: 100px;">
      <div class="card" v-if="article">
        <div class="card-body">
            <h5 class="card-title">標題:{{ article.title }}</h5>
            <p class="card-text">{{ article.contents }}</p>
        </div>
        <div v-for="(img, index) in article.images" :key="index">
          <img :src="'https://localhost:7127' + img" class="card-img-top" alt="Article image">
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      article: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`https://localhost:7127/api/article/${this.$route.params.id}`);
      this.article = response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style scoped>
.card-img-top {
  max-width: 80%;
  max-height: 1000px;
}
.card-title{
    font-size: 300%;
}
.card-text{
    font-size: 150%;
}
</style>
