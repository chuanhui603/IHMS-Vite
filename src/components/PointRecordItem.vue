<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>點數ID</th>
                <th>點數數量</th>
                <th>會員id</th>
                <th>付款碼</th>
                <th>購買時間</th>
            </tr>
        </thead>
    <tbody>
        <tr v-for="{pointrecordId, count, memberId, bankNumber,createtime} in PointRecords" :key="PointrecordId">
                    
            <td>{{ pointrecordId }}</td>
            <td>{{ count}}</td>
            <td>{{ memberId}}</td>
            <td>{{ bankNumber}}</td>
            <td>{{ createtime}}</td>
        </tr>
        </tbody>
    </table>
</template>
    
<script setup >
    const prop = defineProps({    
        PointRecords: Array
        
    });
    
</script>
    
<style scoped>
    
</style>