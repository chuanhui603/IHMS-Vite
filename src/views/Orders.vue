<template>    
    <div  class="container" style="margin-top: 100px;">
      <h1>訂單</h1><br>
        <div class="row">           
            <div class="col-9">
                <h3>讀取分類編號{{ $route.params.orderId}}的產品</h3>
                <!-- <Items :products="products"></Items> -->
                <Paging :totalPage="totalPage" @childClick="childHandler"></Paging>
 
            </div>
            <div class="col-3">
              <Detail></Detail>
            </div>
        </div>
    </div>
</template>
    
<script setup >
  import Detail from '../components/Detail.vue';
//   import Items from '../components/Items.vue';
   import Paging from '../components/Paging.vue';
//   import { ref } from 'vue';
//   import { useRoute, onBeforeRouteUpdate } from 'vue-router';
//   const route = useRoute();
//   //console.log(route.params.categoryId);

//   const thePage = ref(1);
//   const categoryId = ref(1);
//   const totalPage = ref(1);
//   const products = ref([]);


   const loadProducts = async ()=>{
    
     const res = await fetch(`https://localhost:7127/api/OrdersDTO/category/${OrdersId.value}/page/${thePage.value}`)
     const datas = await res.json()
     Orders.value = datas.productsResult
     totalPage.value = datas.totalPages
     console.log(Orders.value)

   }

//    //由子元件來呼叫，傳遞過來資料
//    const childHandler = page =>{
//     console.log(page)
//     thePage.value = page
//     loadProducts()
//    }

//    onBeforeRouteUpdate(to =>{
//     categoryId.value = to.params.categoryId
//     console.log("routeUpdate")
//     thePage.value = 1
//     loadProducts()
//    })
//    loadProducts()




    
</script>
    
<style scoped>
    
</style>