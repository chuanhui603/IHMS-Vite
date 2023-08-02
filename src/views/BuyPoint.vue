<template>
    <div class="container"      style="margin-top:79px;  background-color: #fff">
      <h1 >購買點數</h1><br>
        <div class="row">           
          <div class="col-9">
            <BuyPointItem :BuyPoint="BuyPoint"></BuyPointItem> <!-- 通过props传递order属性 -->
            
          </div>        
          
        </div>
    </div>
</template>
    
<script setup >
  import { ref } from 'vue';
  import BuyPointItem from '../components/BuyPointItem.vue';
  // const cart = ref([]);
  //  const loadCarts = async ()=>{    
  //    const res = await fetch(`https://localhost:7127/api/CartsDTO`)
  //    const datas = await res.json()
  //    cart.value = datas;  
  //   //  console.log(datas)
  //  };
   
  //  loadCarts();
    
</script>
    
<style scoped>
    
</style>