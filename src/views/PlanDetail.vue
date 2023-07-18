<script setup>
import { useRouter } from 'vue-router'
const router = useRouter
const {planId} =props.planId
    const planDelete =async (id)=>{
        const API_URL = `https://localhost:7127/api/Plans/${planId}`
        const res = await fetch(API_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }       
        )
        router.push({
        path:`/plan`,
        params: {planId}
    })
    router.push({
        path:`/plan/${planId}`,
        params: {planId}
    })
    }

</script>

<template>
    <div>
        <button @click="planDelete()">刪掉這筆計畫</button>
    </div>
</template>

<style scoped>
    
</style>