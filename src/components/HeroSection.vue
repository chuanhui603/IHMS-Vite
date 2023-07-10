<script setup>
import NavSide from '@/components/NavSide.vue'
import HeroImage from '@/components/HeroImage.vue'
</script>


<template>
    <section class="hero">
        <div class="container">
            <div class="row">
                <NavSide />
                <HeroImage/>
            </div>
        </div>
    </section>
</template>
<style>
     @import "../../css/bootstrap.min.css";
</style>
