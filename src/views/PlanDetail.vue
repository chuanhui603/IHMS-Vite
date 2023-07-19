<script setup>
import { useRoute } from 'vue-router'
import { useRouter} from 'vue-router';
const route = useRoute()
const router =useRouter()
const {planID} = route.params
console.log(planID)
const planDelete = async (id) => {
    const API_URL = `https://localhost:7127/api/Plans/${id}`
    const res = await fetch(API_URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    )
    router.push({
        path:`/plan/chart`,
    })
}

</script>

<template>
    <div>
        <button @click="planDelete(planID)">刪掉這筆計畫</button>
    </div>
</template>

<style scoped></style>