<template>
  
    <div class="home">
		<HelloWorld msg="Bienvenido a Soft Variedades Tobar" />

        <router-link to="/producto">
        <img alt="Vue logo" src="../assets/logo.png"/>
        </router-link>

        <router-link to="/producto">
        <img alt="Vue logo" src="../assets/logo.png"/>
        </router-link>

        <br>

        <router-link to="/producto">
        <img alt="Vue logo" src="../assets/logo.png"/>
        </router-link>

        <router-link to="/producto">
          <img alt="Vue logo" src="../assets/logo.png"/>
        </router-link>
      </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};


</script>

<style>
img{
  margin: 20px;
}
</style>