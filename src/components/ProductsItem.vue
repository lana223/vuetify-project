<template>
 <v-col cols="4">
    <v-card class="text-center">
       <v-card-item>
         <v-img :src="img" width="200"
         height="200"
         class="mx-auto">
         </v-img>
          <v-card-title class="my-4"><slot name="Title"></slot></v-card-title>
          <v-card-subtitle><slot name="description"></slot></v-card-subtitle>
          <v-card-text><slot name="price">Price : </slot></v-card-text>
          <v-rating
  hover
  :length="5"
  :size="32"
  :model-value="3"
  active-color="primary"
 />
       </v-card-item>
    </v-card>
 </v-col>
</template>
<script >
export default{
   props:{
      img:String
   }
}

</script>