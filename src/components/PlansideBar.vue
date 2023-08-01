<script setup>
import { ref } from 'vue'
import { Edit, CloseBold, Select } from '@element-plus/icons-vue'
import SportDetail from '../views/SportDetail.vue'

//設定跳出視窗
const dialogCreateVisible = ref(false)
const dialogEditVisible = ref(false)
const DetailId =ref(0)
const search = ref('')
const sportdatas = ref('')
const isdoneclass=ref('competed')
const dialogLoadUpdate = async (Id) => {
    const API_URL = `https://localhost:7127/api/plans/Sportdetail/${Id}`
    const res = await fetch(API_URL)
    if(res.ok){
        sportdatas.value = res.json()  
        console.log(sportdatas.value) 
        dialogEditVisible.value = true  
    }  
}
DetailId.value = sportdatas.value.sportDetailId
console.log(DetailId.value)
const detailDelete = async (id) => {
    const check = confirm(`確定刪除行程?`)
    if (check) {
        const API_URL = `https://localhost:7127/api/plans/sportdetail/delete/${id}`
        const res = await fetch(API_URL, { method: 'Delete' })  
        onload()     
    }
}
const detailComplete = async (id) => {   
        const API_URL = `https://localhost:7127/api/plans/sportdetail/complete/${id}`
        const res = await fetch(API_URL, { method: 'PUT' })  
        isdoneclass.value = 'uncompeted'
        onload()     
  
}
const dialogEditUpdate = async (bool) => {
    dialogEditVisible.value = bool
    onload()
    console.log(sportdatas.value)
}
const dialogCreateUpdate = (bool) => {
    dialogCreateVisible.value = bool
}

//讀取事件
const list = ref('')
const onload = async (sportid) => {
    const res = await fetch(`https://localhost:7127/api/plans/sportdetail/list/1`)
    const datas = await res.json()
    list.value = datas
    console.log(list.value)
}
onload()


//動態搜尋變更plan
const listsearch = async (sportid) => {
    if (search.value != '') {
        const res = await fetch(`https://localhost:7127/api/plans/sportdetail/1/search/${search.value}`)
        const datas = await res.json()
        list.value = datas
    } else {
        onload()
    }
}

</script>

<template >
    <!-- 此元件外部最好有row -->
    <div class="nav nav-pills">
        <div class="planmenu">
            <div class="memberimg">
                <img src="../img/testimonial-1.jpg" alt="hahaha">
                <p><a href="#">Judy Lin</a></p>
            </div>
            <div class="row m-3 ">
                <div class="col-7 offset-lg-2 text-center menutitle" style="padding-left: 5px;">
                    <p>今日 行程</p>
                </div>
                <div class="col-1 menubtn">
                    <el-button :icon="Edit" @click="dialogEditVisible = true"></el-button>
                </div>
                <div class="menusearch">
                    <input type="text" v-model="search" placeholder="search" @input="listsearch">
                </div>
                <el-scrollbar height="400px">
                    <div>
                        <ul class="menulist nav mt-2">

                            <li v-for="{ sname, sportDetailId,time } in list" :key="sportDetailId" >
                                <el-button color="#626aef" :class="isdoneclass"  @click="dialogLoadUpdate(sportDetailId)">
                                    {{ sname }}{{time}}
                                </el-button>
                                <div id="changebtn">
                                    <el-button type="primary" @click="detailComplete(sportDetailId)" :icon="Select" />
                                    <el-button type="primary" @click="detailDelete(sportDetailId)" :icon="CloseBold" />
                                </div>
                            </li>
                          
                        </ul>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </div>
    <el-dialog v-model="dialogEditVisible" title="更改設定" width="30%">
                                <SportDetail :id="DetailId" :dialogEditVisible="dialogEditVisible"
                                    @dialogEditUpdate="dialogEditUpdate(value)">
                                </SportDetail>
                            </el-dialog>
    <el-dialog v-model="dialogCreateVisible" title="更改設定" width="30%">
        <SportDetail :dialogEditVisible="dialogCreateVisible" @dialogEditUpdate="dialogCreateUpdate(value)">
        </SportDetail>
    </el-dialog>
</template>
<style scoped>

.competed{
    background-color: #ccc;
}
.uncompeted{
    background-color: #626aef;
}

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
    border-radius: 8%;
}

.menulist li button {
    width: 100%;
}

.linkBox {
    display: block;
    width: 100%;
}

#changebtn {
    display: flex;
    justify-content: center;
}

#changebtn button {
    width: 15%;
    border-radius: 100%;
}
</style>