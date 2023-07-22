<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>點數數量</th>
                <th>會員id</th>
                <th>付款碼</th>
                <th>購買時間</th>
            </tr>
        </thead>
    <tbody>
        <tr v-for="{cartId, count, memberId, bankNumber,createtime} in cart" :key="cartId">
                    
            <td>{{cartId}}</td>
            <td>{{count}}</td>
            <td>{{memberId}}</td>
            <td>{{bankNumber}}</td>
            <td>{{createtime}}</td>
        </tr>
        </tbody>
    </table>    
</template>
    
<script setup>
    const prop = defineProps({    
        cart: Array,
  });
</script>
    
<style scoped>
    
</style>