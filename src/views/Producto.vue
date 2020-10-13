<template>
<div style="margin: 0 auto; width: 80%">
  <Panel header="Gestion de Productos">
      <Menubar :model="items" />
      <br />
      <DataTable :value="productos" :paginator="true" :rows="10">
        <Column field="descripcion" header="Descripcion"></Column>
        <Column field="cantidad" header="Cantidad"></Column>
        <Column field="valor" header="Valor"></Column>
        <Column field="imgurl" header="Imagen"></Column>
      </DataTable>
    </Panel>
    <Dialog header="Crear Producto" :visible.sync="displayModal" :modal="true">
      <span class="p-float-label">
        <InputText id="descripcion" type="text" v-model="producto.descripcion" style="width: 100%" />
        <label for="descripcion">Descripcion</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="cantidad" type="text" v-model="producto.cantidad" style="width: 100%" />
        <label for="cantidad">Cantidad</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="valor" type="text" v-model="producto.valor" style="width: 100%" />
        <label for="valor">Valor Unitario</label>
      </span>
      <br />
      <span class="p-float-label">
        <InputText id="imagen" type="text" v-model="producto.imgurl" style="width: 100%" />
        <label for="imagen">Imagen</label>
      </span>
      <template #footer>
        <Button label="Guardar" icon="pi pi-check" @click="save" />
        <Button label="Cancelar" icon="pi pi-times" @click="closeModal" class="p-button-secondary" />
      </template>
    </Dialog>
</div>
</template>
<script>
import ProductoServices from "../service/ProductoServices";
export default {
  name: "producto",
  data() {
    return {
      productos: null,
      producto: {
        descripcion: null,
        cantidad: null,
        valor: null,
        imgurl: null
      },
      items: [
        {
          label: "Nuevo",
          icon: "pi pi-fw pi-plus",
          command: () => {
            this.showSaveModal();
          }
        },
        {
          label: "Editar",
          icon: "pi pi-fw pi-pencil"
        },
        {
          label: "Eliminar",
          icon: "pi pi-fw pi-trash"
        },
        {
          label: "Refrescar",
          icon: "pi pi-fw pi-refresh",
          command: () => {
            this.getAll();
          }
        }
      ],
      displayModal: false
    };
  },
  productoServices: null,
  created() {
    this.productoServices = new ProductoServices();
  },
  mounted() {
    this.getAll();
  },
  methods: {
    showSaveModal() {
      this.displayModal = true;
    },
    getAll() {
      this.productoServices.getAll().then(data => {
        this.productos = data.data;
      });
    },
    save() {
      this.productoServices.save(this.producto).then(data => {
        if (data.status === 200) {
          this.displayModal = false;
          this.producto = {
            descripcion: null,
            cantidad: null,
            valor: null,
            imgurl: null
          };
          this.getAll();
        }
      });
    },
    closeModal() {
      this.displayModal = false;
    }
  }
};
</script>