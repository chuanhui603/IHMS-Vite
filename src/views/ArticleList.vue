<template>
    <div class="container" style="margin-top: 100px;">
        <div class="container mt-5">
            <h1 class="mb-4">所有文章</h1>
            <div class="row">
                <div class="col-lg-6" v-for="article in articles" :key="article.article_id">
                    <div class="card mb-4">
                        <img :src="'https://localhost:7127' + article.image" class="card-img-top preview-image" alt="Article image">
                        <div class="card-body">
                            <h5 class="card-title">{{ article.title }}</h5>
                            <p class="card-text">{{ article.contents }}</p>
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
            const response = await axios.get('https://localhost:7127/api/article');
            this.articles = response.data;
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        goToArticleDetail(articleId) {
            this.$router.push(`/article/${articleId}`);
        },
    },
};
</script>

<style scoped>
.preview-image {
    max-width: 80%;
    max-height: 600px;
}
</style>
