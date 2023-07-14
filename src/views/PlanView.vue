<script setup>

const loadProducts = async (e)=>{
    console.log(e)
     const res = await fetch(`https://localhost:7127/api/Plan/${e}`)
     const datas = await res.json()
     plan.value = datas.planResult
      console.log(products.value)

   }


    

</script>
    
<template>
    <div class="container p-0 " style="height: 100vh;background-color: var(--primary)">
        <!-- 內容  -->
        <div class="row" style="margin-top: 100px;">
            <div class="col-lg-6" >
                <button type="button" :click="loadProducts()">AJAX測試</button>
            </div>
        </div>
    </div>
</template>

<style></style>