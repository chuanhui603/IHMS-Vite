<script setup >
import { ref } from 'vue'
const wholeGrains = [
    { name: "大麥", calories: 100, image: '/大麥.jpg' },
    { name: "小麥", calories: 120, image: '/小麥.jpg' },
    { name: "糙米", calories: 110, image: '/糙米.jpg' },
    { name: "燕麥片", calories: 90, image: '/燕麥.jpg' },
    { name: "玉米", calories: 80, image: '/玉米.jpg' },
    { name: "蕎麥麵", calories: 95, image: '/蕎麥麵.jpg' },
    { name: "黑麥", calories: 115, image: '/黑麥.jpg' },
    { name: "高梁", calories: 105, image: '/高粱.jpg' },
]
const proteinFoods = [
    { name: "豆腐", calories: 50 },
    { name: "鮭魚", calories: 180 },
    { name: "雞蛋", calories: 70 },
    { name: "綠豆", calories: 65 },
    { name: "牛肉", calories: 150 },
    { name: "豬肉", calories: 130 },
    { name: "羊肉", calories: 160 },
    { name: "雞胸肉", calories: 110 },
]
const dairyProducts = [
    { name: "牛奶", calories: 120 },
    { name: "優格", calories: 80 },
    { name: "起司", calories: 90 },
    { name: "奶酪", calories: 100 },
    { name: "酸奶", calories: 70 },
    { name: "脫脂奶", calories: 90 },
    { name: "芝士", calories: 110 },
    { name: "乳酪", calories: 85 },
]
const iswholeGrains = ref(true)
const isproteinFoods = ref(false)
const isdairyProducts = ref(false)

const pageChange = (value) => {
    console.log(value)
    if (value == 'wholeGrains') {
        iswholeGrains.value = true
        isproteinFoods.value = false
        isdairyProducts.value = false
    } else if (value == 'proteinFoods') {
        iswholeGrains.value = false
        isproteinFoods.value = true
        isdairyProducts.value = false
    } else {
        iswholeGrains.value = false
        isproteinFoods.value = false
        isdairyProducts.value = true
    }
    console.log(iswholeGrains.value, isproteinFoods.value, isdairyProducts.value)
}

</script>
<template>
    <!-- Carousel Start -->
    <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="../img/background.jpg" alt="Image" style="height: 100vh;">
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-7">
                                    <h1 class="display-2 lightcolor mb-5 animated slideInDown">To Be Better</h1>
                                    <RouterLink to="/plan" style="margin-left: 20%;"
                                        class=" btn btn-outline-warning rounded-pill  px-sm-5">開始計畫</RouterLink>
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
    <div class="container-fluid blackbg">
        <div class="container-xxl py-5 container-Shadow"
            style="background-color: aliceblue; box-shadow: 0 0 12px rgba(255,255,255,0.6)">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class=" text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                            <h1 class="display-5 mb-3 graycolor">熱量一覽</h1>
                        </div>
                    </div>

                    <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <div class="d-inline-flex justif-content-end">
                            <button @click="pageChange('wholeGrains')" class="custom-btn btn-animate-orange m-2"
                                style="width: 120px;"><span>五穀根莖類</span></button>
                            <button @click="pageChange('proteinFoods')" class="custom-btn btn-animate-orange m-2"
                                style="width: 120px;"><span>蛋豆魚肉類</span></button>
                            <button @click="pageChange('dairyProducts')" class="custom-btn btn-animate-orange m-2"
                                style="width: 120px;"><span>乳製品</span></button>
                        </div>

                    </div>
                </div>
                <div class="tab-content">
                    <div v-if="iswholeGrains" class="fade show p-0 ">
                        <div class="row g-4">
                            <div class="col-xl-3 col-lg-4  col-md-6 container-Shadow wow fadeInUp"
                                style=" box-shadow: 0 0 12px rgba(0,0,0,0.3) " data-wow-delay="0.1s"
                                v-for="{ name, calories, image } in wholeGrains" :key="name">
                                <div class="product-item">
                                    <div class="position-relative bg-light overflow-hidden">
                                        <img class="img-fluid w-100 " style="height: 200px;" :src="image">

                                    </div>
                                    <div class="text-center p-4">
                                        <p class="d-block h5 mb-2 graycolor" style="font-size: 28px; color: burlywood;">{{ name }}</p>
                                        <span class="graycolor me-1" >熱量消耗: <span style="font-size: 32px;color: red;">{{ calories }}</span> 卡路里</span>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tab-2" v-else-if="isproteinFoods" class="tab-pane fade show p-0">
                        <div class="row g-4">
                            <div class="col-xl-3 col-lg-4 col-md-6" v-for="{ name, calories } in proteinFoods">
                                <div class="product-item">
                                    <div class="position-relative bg-light overflow-hidden">
                                        <img class="img-fluid w-100" src="../img/product-1.jpg" >

                                    </div>
                                    <div class="text-center p-4">
                                        <a class="d-block graycolor h5 mb-2" href="">{{ name }}</a>
                                        <span class="graycolor text-decoration-line-through">熱量消耗: {{ calories }} 卡路里</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tab-3" v-else class="tab-pane fade show p-0">
                        <div class="row g-4">
                            <div class="col-xl-3 col-lg-4 col-md-6" v-for="  { name, calories }   in   dairyProducts  ">
                                <div class="product-item">
                                    <div class="position-relative bg-light overflow-hidden">
                                        <img class="img-fluid w-100" src="../img/product-1.jpg" alt="">

                                    </div>
                                    <div class="text-center p-4">
                                        <a class="d-block graycolor h5 mb-2" href="">{{ name }}</a>
                                        <span class="graycolor me-1">{{ calories }}</span>
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

    </div>

    <!-- Product End -->

    <!-- Blog Start -->
    <div class="container-xxl py-5" style="background-color: aliceblue; box-shadow: 0 0 12px rgba(255,255,255,0.6)">
        <div class="container ">
            <div class="pt-3 text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <h1 class="display-5 mb-3 graycolor">最新 討論</h1>

            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img class="img-fluid" src="../img/rice.jpg" style="height: 300px;">
                    <div class="bg-light p-4">
                        <a class="d-block h5 lh-base mb-4" style="height: 100px;" href="#">糙米飯比較硬、不好吃？其實是妳煮錯了！營養師教你「糙米飯」美味3秘訣：洗完米後「這動作」是關鍵</a>
                        <div class="text-muted border-top pt-4">
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>04 Aug, 2023</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img class="img-fluid" src="../img/food.jpg" style="height: 300px; width: 100%; object-fit:contain;">
                    <div class="bg-light p-4" >
                        <a class="d-block h5 lh-base mb-4" style="height: 100px;" href="#">1個月瘦3公斤？研究：隔日斷食助減肥還能降壞膽固醇</a>
                        <div class="text-muted border-top pt-4">
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>03 Aug, 2023</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img class="img-fluid" src="../img/food2.jpg" style="height: 300px;">
                    <div class="bg-light p-4">
                        <a class="d-block h5 lh-base mb-4" style="height: 100px;" href="#">這些食物超傷皮膚少吃！醫：尤其甜食，易使真皮層退化</a>
                        <div class="text-muted border-top pt-4">
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>02 Aug, 2023</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog End -->
</template>
    
<style scoped>
.p-absolute {
    position: absolute;
}

.custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

.btn-animate-orange {
    background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
    line-height: 42px;
    padding: 0;
    border: none;
}

.btn-animate-orange {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.btn-animate-orange:before,
.btn-animate-orange:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow:
        -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
    transition: all 0.3s ease;
}

.btn-animate-orange:before {
    height: 0%;
    width: 2px;
}

.btn-animate-orange:after {
    width: 0%;
    height: 2px;
}

.btn-animate-orange:hover {
    color: rgba(251, 75, 2, 1);
    background: transparent;
}

.btn-animate-orange:hover:before {
    height: 100%;
}

.btn-animate-orange:hover:after {
    width: 100%;
}

.btn-animate-orange span:before,
.btn-animate-orange span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow:
        -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
    transition: all 0.3s ease;
}

.btn-animate-orange span:before {
    width: 2px;
    height: 0%;
}

.btn-animate-orange span:after {
    height: 2px;
    width: 0%;
}

.btn-animate-orange span:hover:before {
    height: 100%;
}

.btn-animate-orange span:hover:after {
    width: 100%;
}
</style>