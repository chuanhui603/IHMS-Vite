<script setup>
import 'bootstrap/dist/js/bootstrap.min.js'
import './js/main.js'
import { WOW } from 'wowjs/dist/wow.min.js'
import NavBar from './components/NavBar.vue'
import {onMounted} from 'vue'
    name: 'app',
    onMounted(()=>{
        this.$nextTick(() => {
            new WOW().init()
        })
      })
</script>
<style lang="css" src="./css/bootstrap.min.css"></style>
<style lang="css" src="./css/style.css"></style>
<style lang="css" src="wowjs/css/libs/animate.css"></style>

<template>
    <div class="backimg">
         <!-- Spinner start -->
        <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" role="status"></div>
        </div>
        <!-- Spinner End -->
        <!-- Navbar Start -->
        <NavBar></NavBar>
        <!-- Navbar End -->
        <!-- 內容 -->
        <router-view></router-view>           

        <!-- Footer Start -->
        <div class="container-fluid bg-dark footer mt-5 p-3 wow fadeIn" data-wow-delay="0.1s">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mt-3 mb-md-0">
                        &copy; 僅供學術使用 如有版權問題 請聯繫Chuanhui603@gmail.com
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Loaction: 資展國際
                        <br>Designed By IHMS小組
                    </div>
                </div>
            </div>
            <!-- Footer End -->
        </div>

        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top pt-2"><i
                class="bi bi-arrow-up"></i></a>
        <!-- Back to Top -->

    </div>
</template>

