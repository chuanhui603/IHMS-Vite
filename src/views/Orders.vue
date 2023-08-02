<template>    
    <div  class="container" style="margin-top: 79px;  background-color: #fff">
      <h1>訂單</h1><br>
        <div class="row">           
          <div class="col-13">
            <OrderItems :member="member"></OrderItems> <!-- 通过props传递order属性 -->
            
          </div>         
          
        </div>
    </div>
</template>
    
<script setup >
  import { ref } from 'vue';
  import OrderItems from '../components/OrderItems.vue';
  
  const { memberId } = JSON.parse(localStorage.getItem('currentMember'))
  const member =ref([])
  const loadOrders = async ()=>{  
        //MembersDTO找出教練名字
      
          const memberData = await fetch(`https://localhost:7127/api/MembersDTO/GetMemberByOrderid/${memberId}`);
          member.value = await memberData.json();
          console.log(member.value)
     

    // for (const order of orders.value) {
    //   const scheduleData = await fetch(`https://localhost:7127/api/SchedulesDTO/GetOrderDetailByOrderid/${order.orderId}`);
    //   const schedule = await scheduleData.json();
    //   order.schedule = schedule

    //   for (const order of orders.value) {
    //   const courseData = await fetch(`https://localhost:7127/api/CoursesDTO/GetCourseByOrderid/${order.orderId}`);
    //   const course = await courseData.json();
    //   order.course = course

    //     //CoachesDTO
    //     for (const order of orders.value) {
    //     const coachData = await fetch(`https://localhost:7127/api/CoachesDTO/GetCoachByOrderid/${order.orderId}`);
    //     const coach = await coachData.json();
    //     order.coach = coach
        
    //       //MembersDTO找出教練名字
    //       for (const order of orders.value) {
    //       const memberData = await fetch(`https://localhost:7127/api/MembersDTO/GetMemberByOrderid/${order.orderId}`);
    //       const member = await memberData.json();
    //       order.member = member

    //       }      
    //     }
      
    //   }   
    // }

  
  }; 
  loadOrders();

    
</script>

    
<style scoped>
    
</style>