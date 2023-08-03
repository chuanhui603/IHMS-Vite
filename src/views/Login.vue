<template >
    <header>
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">登入</h2>
                                    <p class="text-white-50 mb-5">請輸入您的帳號與密碼!</p>
                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="Account" v-model="LoginData.Account"
                                            class="form-control form-control-lg" @input="deletemsg"/>
                                        <label class="form-label" for="Account">帳號</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="Password" v-model="LoginData.Password"
                                            class="form-control form-control-lg" @input="deletemsg"/>
                                        <label class="form-label" for="Password">密碼</label>
                                    </div>
                                    <p v-if="isinput==true" style="color: red;">請輸入帳號與密碼</p>

                                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#">忘記了密碼?</a></p>

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit"
                                        @click="Login">Login</button>

                                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p class="mb-0">還沒有帳號嗎? <a clichref="https://localhost:7127/Members/SignIn"
                                            class="text-white-50 fw-bold">註冊</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>
<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
const isinput=ref(false)
const LoginData ={
    Account: '',
    Password: ''
}

const deletemsg=()=>{
    if(LoginData.Account!=""){
        isinput.value=false
    }
    if(LoginData.Password!=""){
        isinput.value=false
    }
}
const Router = useRouter()
const Login = async () => {
    if (LoginData.Account == '' || LoginData.Password == '') {
        isinput.value=true
    }
    else{
        try {
        const baseAddress = `https://localhost:7127/api/Members/Login`;
        //const baseAddress = `backstage.ihms.club:8080/api/Members/Login`;
        const res = await fetch(baseAddress, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(LoginData),
        });
        if (res.ok) {
            const member = await res.json();
            // 登入成功
            alert(`歡迎來到IHMS健康管理平台，${member.name}！`);
            // 將會員資訊存入 localStorage
            localStorage.setItem('currentMember', JSON.stringify(member));
            // 回到首頁    
            if (localStorage.getItem('currentMember')) {
                Router.push('/')
            }

        } else {
            // 登入失敗
            alert('帳號或密碼不正確，請重新登入！');
        }
    } catch (error) {
        alert('發生錯誤，請稍後再試！');
    }
    }  
}
</script>
<style></style>