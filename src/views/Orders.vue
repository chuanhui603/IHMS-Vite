<template>    
    <div  class="container" style="margin-top: 100px;">
      <h1>訂單</h1><br>
        <div class="row">           
          <div class="col-9">
            <OrderItems :orders="orders"></OrderItems> <!-- 通过props传递order属性 -->
            
          </div>         
          
        </div>
    </div>
</template>
    
<script setup >
  import { ref } from 'vue';

  const plans = ref([])

  import OrderItems from '../components/OrderItems.vue';
  
  const orders = ref([]);
  const loadOrders = async ()=>{  
    const res = await fetch(`https://localhost:7127/api/OrdersDTO`)
    const datas = await res.json()
    orders.value = datas;  

    for (const order of orders.value) {
      const courseData = await fetch(`https://127.0.0.1:7127/api/CoursesDTO/GetCourseByOrderid/${order.orderId}`);
      const course = await courseData.json();
      order.course = course

      //CoachesDTO
      for (const order of orders.value) {
      const coachData = await fetch(`https://127.0.0.1:7127/api/CoachesDTO/GetCoachByOrderid/${order.orderId}`);
      const coach = await coachData.json();
      order.coach = coach
      
        //MembersDTO找出教練名字
        for (const order of orders.value) {
        const memberData = await fetch(`https://127.0.0.1:7127/api/MembersDTO/GetMemberByOrderid/${order.orderId}`);
        const member = await memberData.json();
        order.member = member

        }      
      }
    
    }    
    console.log(orders.value)
  }; 
  loadOrders();

    
</script>

    
<style scoped>
    
</style>