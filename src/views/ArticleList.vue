<template>
    <div class="container" style="margin-top: 100px;background-color: #fff">
        <div class="container mt-5">
            <h1 class="mb-4">所有文章</h1>
            <div class="row">
                <div class="col-lg-6" v-for="article in articles" :key="article.article_id">
                    <div class="card mb-4">
                        <div class="image-wrapper">
                            <img :src="'https://backstage.ihms.club:8080' + article.image" class="card-img-top preview-image" alt="Article image">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ article.title }}</h5>
                            <p class="card-text">{{ limitText(article.contents) }}</p>
                            <button class="btn btn-primary" @click="goToArticleDetail(article.article_id)">閱讀更多</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            articles: [],
        };
    },
    async mounted() {
    try {
        const response = await axios.get('https://backstage.ihms.club:8080/api/article');
        this.articles = response.data;
        
        // 對 articles 進行排序，最新的在前面
        this.articles.sort((a, b) => {
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);

            // 降序排序，最新的日期在前面
            return dateB - dateA;
        });
    } catch (err) {
        console.error(err);
    }
},
    methods: {
        goToArticleDetail(articleId) {
            this.$router.push(`/article/${articleId}`);
        },
        limitText(text) {
        return text.length > 80 ? text.slice(0, 80) + '...' : text;
    },
    goToArticleDetail(articleId) {
        this.$router.push(`/article/${articleId}`);
    },
    },
};
</script>

<style scoped>
.image-wrapper {
    width: 100%; 
    height: 400px; 
    overflow: hidden;
}

.preview-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; 
}
</style>
