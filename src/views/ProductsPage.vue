<template>
  <v-container>
      <h1 class="text-center">Products</h1>
        <v-row>
            <products-item v-for="Product in Products"  :key="Product.Id" :img="Product.image">
            
                <template v-slot:Title>{{  Product.title }}</template>
                <template v-slot:description>{{  Product.description }}</template>
                <template v-slot:price> Price : {{  Product.price }}</template> 
            </products-item>
        </v-row>
  </v-container>
</template>
<script >
import ProductsItem from "../components/ProductsItem.vue"
export default {
    components:{
        ProductsItem ,
    },
    data(){
        return{
            Products:[],
           
        }
    },
    created(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>this.Products=json)
            
    }
}
</script>