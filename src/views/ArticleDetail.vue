<template>
    <div class="container" style="margin-top: 100px;background-color: #fff">
      <div class="card" v-if="article">
        <div class="card-body">
            <h5 class="card-title">標題:{{ article.title }}</h5>
            <p class="card-text" v-html="formatText(article.contents)"></p>
        </div>
        <div v-for="(img, index) in article.images" :key="index">
          <img :src="'http://4.216.224.225:81' + img" class="card-img-top" alt="Article image">
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
      const response = await axios.get(`http://4.216.224.225:81/api/article/${this.$route.params.id}`);
      this.article = response.data;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    formatText(text) {
        // 將 "\r\n" 替換為 HTML 的換行符 "<br>"
        return text.replace(/\r\n/g, '<br>');
    },
},
};
</script>

<style scoped>
.card-img-top {
  width: 40%;
    height: auto;
}
.card-title{
    font-size: 300%;
}
.card-text{
    font-size: 150%;
}
</style>
