<script setup>
import { ref } from 'vue'
const prop = defineProps({
    plans: Array
})
const list =ref(prop.plans) 
const search = ref('')

//動態搜尋變更plan
const listsearch = async (id) => {
    if (search.value != '') {
        const res = await fetch(`https://localhost:7127/api/plans/member/${id}/search/${search.value}`)
        const datas = await res.json()
        list.value = datas

    } else {
        const res = await fetch(`https://localhost:7127/api/plans/member/${id}/5`)
        const datas = await res.json()
        list.value = datas
    }
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
                    <input type="text" v-model="search" placeholder="search" @input="listsearch(6)">
                </div>
                <el-scrollbar height="400px">
                    <div>
                        <ul class="menulist nav mt-2">
                            <li v-for="{ pname, planId } in list" :key="planId" class="mt-2 mb-2">
                                <router-link class="linkBox" :to="`/plan/${planId}`">
                                    <el-button color="#626aef" plain>{{pname }}</el-button>
                                </router-link>
                                
                            </li>
                        </ul>
                    </div>
                    <p style="width: 100%; text-align: center;"><el-link >more</el-link></p>
                </el-scrollbar>

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
    padding: 3px;
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
    border-radius: 8%;
}

.menulist li button{
    width: 100%;
}

.linkBox{
    display: block;
    width: 100%;
}

</style>