<template>
  <div class="home">
    <HelloWorld msg="Soft Variedades Tobar"/>
    <router-link  to="/producto"><img alt="Vue logo" src="../assets/logo.png"></router-link> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
