<script setup>
import {useRouter} from 'vue-router'
const router =useRouter()
const prop = defineProps({
    isLogin:Boolean
})
const memberLogOut =() =>{
    localStorage.removeItem('currentMember')
    router.push('/')
}

</script>

<template>
       <!-- Navbar Start -->
       <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <!-- <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
                <div class="col-lg-6 px-5 text-start">
                    <small><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                    <small class="ms-4"><i class="fa fa-envelope me-2"></i>info@example.com</small>
                </div>
                <div class="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <a class="text-body ms-3" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="text-body ms-3" href=""><i class="fab fa-twitter"></i></a>
                    <a class="text-body ms-3" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="text-body ms-3" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div> -->

            <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <RouterLink to="/" class="navbar-brand ms-4 ms-lg-0">
                    <h1 class="fw-bold text-warning m-0">I<span class="text-secondary ">H</span>MS</h1>
                </RouterLink>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav p-4 p-lg-0">
                        <RouterLink to="/" class="nav-item nav-link active">首頁</RouterLink>
                        <RouterLink to="/announcements" class="nav-item nav-link active">公告</RouterLink>
                    <RouterLink to="/MessageBoardList" class="nav-item nav-link active">討論區</RouterLink>
                    <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">客服</a>
                            <div class="dropdown-menu m-0">
                                <RouterLink to="/custom-service" class="dropdown-item">回報客服</RouterLink>
                                <RouterLink to="/custom-service-List" class="dropdown-item">客服回應</RouterLink>
                            </div>
                        </div>
                    
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">會員專區</a>
                            <div class="dropdown-menu m-0">
                                <RouterLink to="/plan/chart" class="dropdown-item">計畫總覽</RouterLink>
                                <a href="feature.html" class="dropdown-item">購買紀錄</a>
                                <a href="testimonial.html" class="dropdown-item">點數紀錄</a>
                                <a href="404.html" class="dropdown-item">會員設定</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">課程專區</a>
                            <div class="dropdown-menu m-0">
                                <a href="blog.html" class="dropdown-item">欄位1</a>
                                <a href="feature.html" class="dropdown-item">欄位2</a>
                                <a href="testimonial.html" class="dropdown-item">欄位3</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">討論區</a>
                    </div>
                    <div class="d-none d-lg-flex ms-auto">
                        <a v-if="isLogin" class="btn-sm-square bg-white rounded-circle ms-3" href="#">
                            <small class="fa fa-search text-body"></small>
                        </a>
                        
                        <a href="#" v-if="isLogin"  class="btn-sm-square bg-white rounded-circle ms-3" > <small class="fa fa-user text-body"></small></a>
                           
                        <a class="btn-sm-square bg-white rounded-circle ms-3" href="#">
                            <small class="fa fa-shopping-bag text-body"></small>
                        </a>

                        <!--登入前展示 登入後隱藏 -->

                        <router-link to="/login" v-if="!isLogin" class="ms-3 p-1 text-body">登入</router-link> 
                        <router-link to="/" v-if="isLogin" @click="memberLogOut" class="ms-3 p-1 text-body">登出</router-link> 
                        <!--登入前隱藏 登入後展示 -->
                        <div v-if="isLogin" class=" ms-3 p-1">點數: <span>$150.00</span></div>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Navbar End -->   
</template>  
<style>
    
</style>