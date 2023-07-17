<template >
    <!-- 此元件外部最好有row -->
    <div class="col-lg-3" style="height: 100vh;;background-color: blue;">
        <div class="memberimg">
            <img src="../img/testimonial-1.jpg" alt="">
            <p><a href="">Judy Lin</a></p>
        </div>
     


    </div>
</template>
<script>

</script>
<style scoped>
.memberimg{
   display: flex;
   flex-direction: column;
   align-items: center;
}
.memberimg img {
    width: 60%;
    height: 60%;
    background-color: aliceblue;
    margin-top: 1rem;
    border-radius: 100%;
    object-position:center;
}
.memberimg p a{
    font-size: 1.3rem;
    margin-top: 1.2rem;
    color: white;
    font-family: "Font Awesome 5 Free";   
}
</style>