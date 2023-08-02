<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const prop = defineProps({
    isLogin: Boolean,
})


const memberLogOut = () => {
    localStorage.removeItem('currentMember')
    router.push('/')
}

const MemberId = ref()
if (localStorage.getItem('currentMember')) {
    const { memberId } = JSON.parse(localStorage.getItem('currentMember'))
    console.log(memberId)
    MemberId.value = memberId
}


const currentPoint = ref();
const loadPointRecord = async () => {
    if (MemberId) {
        const res = await fetch(`https://localhost:7127/api/PointRecordsDTO/${MemberId.value}`)
        const datas = await res.json()
        currentPoint.value = datas;
    }
};

if(localStorage.getItem('currentMember')){
    router.afterEach(loadPointRecord);
}


</script>

<template>
    <!-- Navbar Start -->
    <div class="container-fluid blackbg fixed-top  px-0 wow fadeIn" data-wow-delay="0.1s">
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
               <img src="../img/logo.png" width="78">
            </RouterLink>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav p-4 p-lg-0">
                    <RouterLink to="/" class="nav-link">首頁</RouterLink>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">會員專區</a>
                        <div class="dropdown-menu m-0">
                            <RouterLink to="/plan" class="dropdown-item">計畫總覽</RouterLink>
                            <RouterLink to="/orders" class="dropdown-item">購買紀錄</RouterLink>
                            <RouterLink to="/PointRecord" class="dropdown-item">點數紀錄</RouterLink>
                            <a href="https://localhost:7127/Members/MemberEdit/6" class="dropdown-item">會員設定</a>
                        </div>
                    </div>
                    <a href="https://localhost:7127/Student/CoachList" class="nav-link">課程總覽</a>
                    <RouterLink to="/announcements" class="nav-item nav-link">公告</RouterLink>
                    <RouterLink to="/MessageBoardList" class="nav-item nav-link">討論區</RouterLink>
                    <div class="nav-item dropdown">
                        <div class="nav-item dropdown">
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">客服</a>
                                <div class="dropdown-menu m-0">
                                    <RouterLink to="/custom-service" class="dropdown-item">回報客服</RouterLink>
                                    <RouterLink to="/custom-service-List" class="dropdown-item">客服回應</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-none d-lg-flex ms-auto">
                    <a v-if="isLogin" class="btn-sm-square bg-white rounded-circle ms-3" href="#">
                        <small class="fa fa-search text-body"></small>
                    </a>

                    <a href="https://localhost:7127/Members/MemberEdit/6" v-if="isLogin"
                        class="btn-sm-square bg-white rounded-circle ms-3"> <small class="fa fa-user text-body"></small>
                    </a>

                    <a class="btn-sm-square bg-white rounded-circle ms-3" v-if="isLogin">
                        <RouterLink to="/BuyPoint" small class="fa fa-shopping-bag text-body"></RouterLink>
                    </a>

                    <!--登入前展示 登入後隱藏 -->

                    <router-link to="/login" v-if="!isLogin" class="ms-3 p-1 graycolor">登入</router-link>
                    <router-link to="/" v-if="isLogin" @click="memberLogOut" class="ms-3 p-1 graycolor">登出</router-link>
                    <!--登入前隱藏 登入後展示 -->
                    <div v-if="isLogin" class="graycolor ms-3 p-1">點數: <span class="goldcolor">${{ currentPoint }}</span></div>


                </div>
            </div>
        </nav>
    </div>
    <!-- Navbar End -->
</template>  
<style></style>