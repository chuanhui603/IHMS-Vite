<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>點數ID</th>
                <th>點數數量</th>               
                <th>付款碼</th>
                <th>購買時間</th>
            </tr>
        </thead>
    <tbody>
        <tr v-for="{pointrecordId, count, bankNumber,createtime} in PointRecords" :key="PointrecordId">
                    
            <td>{{ pointrecordId }}</td>
            <td>{{ count*500}}</td>
            <td>{{ bankNumber}}</td>
            <td>{{ formatDate(createtime)}}</td>
        </tr>
        </tbody>
    </table>
</template>
    
<script setup >
    const prop = defineProps({    
        PointRecords: Array
        
    });

    const formatDate = (timestamp) => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    return new Intl.DateTimeFormat('zh-TW', options).format(new Date(timestamp));
};
    // console.log(prop);
    
</script>
    
<style scoped>

table th, table td {
   /* 可以自行調整各欄位的寬度百分比 */
  text-align: center; /* 如果您希望文字居中對齊，加上這個屬性 */
  padding: 8px; /* 設定內距，可以自行調整 */
}

    
</style>