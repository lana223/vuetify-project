<template>
    <v-app>
      <v-footer class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({
        links: [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Blog',
          'Contact Us',
        ],
      }),
    }
  </script>

  <style scoped>
.v-footer {
margin-top:  200px !important;
}
</style>