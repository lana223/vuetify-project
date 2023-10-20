<template>

      <v-col cols="4">
          <v-card class="text-center"  height="300" :title="title"  :subtitle="Subtitle" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam">
            <v-img
                  :src="imgsrc"
                  class="rounded-circle mx-auto"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="90px"
                  width="90px"
                  cover></v-img>
          <v-card-actions class="text-center">
            <v-btn  >Click me</v-btn>
          </v-card-actions>
          </v-card>
      </v-col>

</template>

<script>
export default{
props:{
    title:String,
    subtitle:String,
    imgsrc:String
    
}

}

</script>