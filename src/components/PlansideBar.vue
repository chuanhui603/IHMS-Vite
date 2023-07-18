<script setup>
const props = defineProps({
    plans: Array
})
let searchstr =`search`
const listsearch=async (value)=>{
    const res = await fetch(`https://localhost:7127/api/plans/member/${id}/${search}`)
    const datas = await res.json()
}

</script>

<template >
    <!-- 此元件外部最好有row -->
    <div class="nav nav-pills">
        <div class="planmenu">
            <div class="memberimg">
                <img src="../img/testimonial-1.jpg" alt="">
                <p><a href="">Judy Lin</a></p>
            </div>
            <div class="row m-3 ">
                <div class="col-9 menutitle">
                    <p>最近 計畫</p>
                </div>
                <div class="col-3 menubtn">
                    <router-link to="/plan/create" class="btn btn-primary">New</router-link>
                </div>
                <div class="menusearch">
                    <input type="text" :value="searchstr" @input="listsearch(value)">
                </div>
                <div>
                    <ul class="menulist nav mt-2">
                        <li v-for="{pname,planId} in plans" :key="planId" class=" mt-2 mb-2 btn">
                            <router-link :to="`/plan/${planId}`">{{pname}}</router-link>
                        </li>
                    </ul>
                </div>
                <p style="width: 100%; text-align: center;"><a href="">more</a></p>
            </div>

        </div>


    </div>
</template>
<style scoped>
.memberimg {
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
    object-position: center;
}

.memberimg p a {
    font-size: 1.3rem;
    margin-top: 1.2rem;
    color: black;
    font-family: "Font Awesome 5 Free";
}

.menutitle p {
    font-size: 1.1rem;
    line-height: 2.2rem
}

.menubtn button {
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 10%;
}

.menusearch input {
    width: 100%;
    border-radius: 5%;
    color: #ccc;
}

.menulist {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.menulist li {
    width: 100%;
    text-align: center;
    border: 1px solid;
}
</style>