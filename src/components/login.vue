<template>
  <div style="margin: 0 auto; width: 35%">
    <Panel>
      <div>
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <br />
      <div>
        <span class="p-input-icon-left">
          <i class="pi pi-user" />
          <InputText type="text" v-model="value1" placeholder="Usuario" />
        </span>
      </div>
      <br />
      <div>
      <span class="p-input-icon-left">
        <i class="pi pi-key" />
        <InputText type="password" v-model="value1" placeholder="Contraseña" />
      </span>
      </div>
      <br />
      <div>
      <Button label="Ingresar" icon="pi pi-check" />
      </div>
      <br />
    </Panel>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>
 
 <style scoped>
</style>