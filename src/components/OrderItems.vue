<template>
    <table class="table table-bordered">
<thead><tr><th>訂單ID</th><th>訂單編號</th><th>訂單價格</th><th>訂單狀態</th><th>已取消原因</th></tr></thead>
<tbody>
<tr v-for="{OrderId, Ordernumber, Pointstotal, State, Reason} in products" :key="productId">
<td>{{OrderId}}</td>
<td>{{Ordernumber}}</td>
<td>{{Pointstotal}}</td>
<td>{{State}}</td>
<td>{{Reason}}</td>
</tr>

</tbody>
</table>
</template>

<script setup>
//接收父元件傳進來的資料
const props = defineProps({
    products: Array     
})
console.log(props.Order)
</script>

<style scoped>

</style>