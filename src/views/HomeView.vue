<script setup >
import {ref} from 'vue'
    const wholeGrains=[
    { name: "大麥", calories: 100 },
    { name: "小麥", calories: 120 },
    { name: "糙米", calories: 110 },
    { name: "燕麥片", calories: 90 },
    { name: "玉米", calories: 80 },
    { name: "蕎麥", calories: 95 },
    { name: "黑麥", calories: 115 },
    { name: "高梁", calories: 105 },
]
const proteinFoods=[
{ name: "豆腐", calories: 50 },
    { name: "鮭魚", calories: 180 },
    { name: "雞蛋", calories: 70 },
    { name: "綠豆", calories: 65 },
    { name: "牛肉", calories: 150 },
    { name: "豬肉", calories: 130 },
]
const dairyProducts=[
{ name: "牛奶", calories: 120 },
    { name: "優格", calories: 80 },
    { name: "起司", calories: 90 },
    { name: "奶酪", calories: 100 },
    { name: "酸奶", calories: 70 },
    { name: "脫脂奶", calories: 90 },
]
    const isVegetable = ref(true)
    const isFruit = ref(false)
    const isMeat = ref(false)
    const pageChange = (value)=>{
        if(value=='vegetable'){
            isVegetable.value=true
            isFruit.value =false
            isMeat.value = false
        }else if(value=='fruit'){
            isVegetable.value=false
            isFruit.value =true
            isMeat.value = false
        }else{
            isVegetable.value=false
            isFruit.value =false
            isMeat.value = true
        }
    }
    
</script>
<template>
        
        <!-- Carousel Start -->
        <div class="container-fluid p-0 mb-5  wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="../img/background.jpg" alt="Image" style="height: 100vh;">
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-lg-7">
                                        <h1 class="display-2 lightcolor mb-5 animated slideInDown">擁有更好的體態</h1>
                                        <a href="" class="btn btn-outline-warning rounded-pill py-sm-3 px-sm-5">開始計畫</a>
                                        <a href="" class="btn btn-outline-secondary rounded-pill py-sm-3 px-sm-5 ms-3">查詢計畫</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="carousel-item">
                        <img class="w-100" src="img/carousel-2.jpg" alt="Image">
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-lg-7">
                                        <h1 class="display-2 mb-5 animated slideInDown">Natural Food Is Always Healthy</h1>
                                        <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                        <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> -->
            </div>
        </div>
        <!-- Carousel End -->



        <!-- Product Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s"
                            style="max-width: 500px;">
                            <h1 class="display-5 mb-3 graycolor">熱量一覽</h1>
                        </div>
                    </div>
                    <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li class="nav-item me-2">
                                <a class="btn btn-outline-warning border-2 active" data-bs-toggle="pill"
                                    :click="pageChange('vegetable')">Vegetable</a>
                            </li>
                            <li class="nav-item me-2">
                                <a class="btn btn-outline-warning border-2" data-bs-toggle="pill" href="#tab-2" :click="pageChange('vegetable')">Fruits </a>
                            </li>
                            <li class="nav-item me-0">
                                <a class="btn btn-outline-warning border-2" data-bs-toggle="pill" href="#tab-3" :click="pageChange('vegetable')">Fresh</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="tab-content">
                    <div id="tab-1" v-if="isVegetable" class="tab-pane fade show p-0 active" >
                        <div class="row g-4">
                            <div class="col-xl-3 col-lg-4  col-md-6 wow fadeInUp" style="border: 1px solid white;" data-wow-delay="0.1s" v-for="{name,calories} in wholeGrains">
                                <div class="product-item">
                                    <div class="position-relative bg-light overflow-hidden">
                                        <img class="img-fluid w-100" src="../img/product-1.jpg" >
                                        <div
                                            class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                            New</div>
                                    </div>
                                    <div class="text-center p-4">
                                        <p class="d-block h5 mb-2 graycolor" href="">{{ name }}</p>
                                        <span class="graycolor me-1">{{calories}}</span>
                                       
                                    </div>
                         
                                </div>
                            </div>
                            <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <!-- <a class="btn btn-primary rounded-pill py-3 px-5" href="">瀏覽更多資訊</a> -->
                                <el-button type="info" class="rounded-pill py-3 px-5" style="height: 50px;" plain>瀏覽更多資訊</el-button>
                            </div>
                        </div>
                    </div>

                    <div id="tab-2"  v-else-if="isFruit" class="tab-pane fade show p-0">
                        <div class="row g-4">
                            <div class="col-xl-3 col-lg-4 col-md-6" v-for="{name,calories} in proteinFoods">
                                <div class="product-item">
                                    <div class="position-relative bg-light overflow-hidden">
                                        <img class="img-fluid w-100" src="../img/product-1.jpg" alt="">
                                        <div
                                            class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                            New
                                        </div>
                                    </div>
                                    <div class="text-center p-4">
                                        <a class="d-block h5 mb-2" href="">{{ name }}</a>
                                        <span class="text-body text-decoration-line-through">{{calories }}</span>
                                    </div>
                             
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <a class="btn btn-primary rounded-pill py-3 px-5" href="">瀏覽更多資訊</a>
                            </div>
                        </div>
                    </div>

                <div id="tab-3" v-else class="tab-pane fade show p-0">
                        <div class="row g-4">
                            <div class="col-xl-3 col-lg-4 col-md-6" v-for="{name,calories} in dairyProducts">
                                <div class="product-item">
                                    <div class="position-relative bg-light overflow-hidden">
                                        <img class="img-fluid w-100" src="../img/product-1.jpg" alt="">
                                        <div
                                            class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                            New</div>
                                    </div>
                                    <div class="text-center p-4">
                                        <a class="d-block h5 mb-2" href="">{{ name }}</a>
                                        <span class="text-primary me-1">{{ calories }}</span>
                                    </div>
                                
                                </div>
                            </div>
                            <div class="col-12 text-center">
                         
                                <!-- <a class="btn btn- rounded-pill py-3 px-5" href=""></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product End -->

        <!-- Blog Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"
                    style="max-width: 500px;">
                    <h1 class="display-5 mb-3 graycolor">最新 討論</h1>
                   
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" v-for="blog in 3">
                        <img class="img-fluid" src="../img/blog-1.jpg" alt="">
                        <div class="bg-light p-4">
                            <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own
                                firm</a>
                            <div class="text-muted border-top pt-4">
                                <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>
                                <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog End -->

</template>
    
<style>
    .p-absolute{
        position: absolute;
    }
</style>