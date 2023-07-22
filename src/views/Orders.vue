<template>    
    <div  class="container" style="margin-top: 100px;">
      <h1>訂單</h1><br>
        <div class="row">           
          <div class="col-9">
            <OrderItems :orders="orders"></OrderItems> <!-- 通过props传递order属性 -->
            <!-- <router-link class="nav-link active" to="/detail">Detail</router-link> -->
            <!-- <Detail></Detail > -->
          </div>
          
          <div class="col-3">

          </div>
        </div>
    </div>
</template>
    
<script setup >
  import { ref } from 'vue';

  const plans = ref([])

  import OrderItems from '../components/OrderItems.vue';
  // import Detail from '../components/Detail.vue';
  const orders = ref([]);
  const loadOrders = async ()=>{  
    const res = await fetch(`https://localhost:7127/api/OrdersDTO`)
    const datas = await res.json()
    orders.value = datas;  
    for (const order of orders.value) {
      const coachData = await fetch(`https://127.0.0.1:7127/api/CoachesDTO/GetCoachByOrderid/${order.orderId}`);
      const coach = await coachData.json();
      order.coach = coach
      // const orderDetailData = await fetch(`https://127.0.0.1:7127/api/OrderDetailsDTO/${order.orderId}`);
      // const orderDetails = await orderDetailData.json();
      // for (const orderDetail of orderDetails){
      //   const scheduleData = await fetch(`https://127.0.0.1:7127/api/SchedulesDTO/${orderDetail.scheduleId}`)
      //   const schedules = await scheduleData.json()
      //   for (const schedule of schedules){
      //   const getcoachByOrderid = await fetch(`https://localhost:7127/api/CoachesDTO/${schedule.courseId}`)
      //   const courses = await courseData.json()

      //   order.schedule = schedules
      //   }
      // }
    }
    console.log(orders.value)
  };

 
  loadOrders();
  

    
</script>

    
<style scoped>
    
</style>