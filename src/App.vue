<template>
  <div class="container">
    <v-app>
      <v-app-bar
        app
        absolute
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        color="#bd1569"
        dark
        
      >
          <v-toolbar-title class="text-center">My Wallet</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <homeView></homeView>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import homeView from './components/mainView.vue'

export default {
  name: 'App',
  components :{
    homeView,
  }, 
};
</script>
<style >
  @media only screen and (min-width: 450px){
    .container{
      max-width: 450px;
    }
  }
</style>
