<template>
   <v-container>
    <h1 class="text-center mb-5">Our Team</h1>
   <v-row>
       <OurtamInfo v-for="info in infos" :imgsrc="imgsrc" :title="info.name" :subtitle="info.username" :key="info.id"></OurtamInfo>
   </v-row>
   </v-container>
</template>

<script >
import OurtamInfo from '@/components/OurteamInfo.vue'
export default{
    components:{
        OurtamInfo,
    },
    created(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( Res => Res.json())
        .then(json => this.infos = json.filter(t=>t.id<=6)) 
       
      },
      data(){
        return{
            infos:[],
            imgsrc:'../../public/avatar.png'
        }
      }
}
</script>