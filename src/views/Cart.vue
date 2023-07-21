<template>
    <div class="container"      style="margin-top: 100px;">
      <h1 >購物車</h1><br>
        <div class="row">           
          <div class="col-9">
            <CartItem :cart="cart"></CartItem> <!-- 通过props传递order属性 -->
            
          </div>         
          
        </div>
    </div>
</template>
    
<script setup >
  import { ref } from 'vue';
  import CartItem from '../components/CartItem.vue';
  const cart = ref([]);
   const loadCarts = async ()=>{    
     const res = await fetch(`https://localhost:7127/api/CartsDTO`)
     const datas = await res.json()
     cart.value = datas;  
    //  console.log(datas)
   };
   
   loadCarts();
    
</script>
    
<style scoped>
    
</style>