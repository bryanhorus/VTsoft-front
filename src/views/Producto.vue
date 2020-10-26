<template>
<div style="margin: 0 auto; width: 80%">
  <Toast />
  <Panel header="Gestion de Productos">
      <Menubar :model="items" />
      <br />
      <DataTable :value="productos" :paginator="true" :rows="10" :selection.sync="selectproducto" :filters="filters" selectionMode="single"  dataKey="idProducto" :metaKeySelection="false">
  
        <Column field="idProducto" header="ID"></Column>
        <Column field="descripcion" header="Descripcion"> <template #filter>
            <InputText type="text" v-model="filters['descripcion']" class="p-column-filter" placeholder="Buscar producto"/>
        </template> </Column>
        <Column field="cantidad" header="Cantidad"></Column>
        <Column field="valor" header="Valor"></Column>
        <Column header="Imagen">
            <template #body="slotProps">
            <img :src="slotProps.data.imgurl" :alt="slotProps.data.imgurl" class="product-image" />
        </template>
    </Column>
      </DataTable>
    </Panel>
    <Dialog header="Crear Producto" :visible.sync="displayModal" :modal="true" >
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

    <Dialog header="Editar Producto" :visible.sync="editModal" :modal="true" >
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
        <Button label="Guardar" icon="pi pi-check" @click="update" />
        <Button label="Cancelar" icon="pi pi-times" @click="closeEdit" class="p-button-secondary" />
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
      selectedProducts: null,
      filters: {},
      producto: {
        idProducto: null,
        descripcion: null,
        cantidad: null,
        valor: null,
        imgurl: null
      },
      selectproducto: {
        idProducto: null,
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
          icon: "pi pi-fw pi-pencil",
          command: () => {
            if(this.selectproducto.idProducto != null){
              this.showEditModal();
              }else{
               this.$toast.add({severity:'error', summary: 'Error!', detail:'Seleccione un producto de la lista para ejecutar la accion.', life: 3000});
            }

          }
        },
        {
          label: "Eliminar",
          icon: "pi pi-fw pi-trash",
          command: () => {
            if(this.selectproducto.idProducto != null){
            this.delete();
            }else{
               this.$toast.add({severity:'error', summary: 'Error!', detail:'Seleccione un producto de la lista para ejecutar la accion.', life: 3000});
            }
          }
        },
        {
          label: "Refrescar",
          icon: "pi pi-fw pi-refresh",
          command: () => {
            this.getAll();
            location.reload();
          }
        }
      ],
      displayModal: false,
      editModal: false
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
    showEditModal(){

    this.producto = this.selectproducto;
    this.editModal = true;

    },
    getAll() {
      this.productoServices.getAll().then(data => {
        this.productos = data.data;
      });
    },
    delete(){
      if(confirm("desea eliminar el registro?")){
      this.productoServices.delete(this.selectproducto.idProducto).then(data =>{
        if(data.status === 200){
           this.$toast.add({severity:'success', summary: 'Eliminado!', detail:'El registro se elimino correctamente.', life: 3000});
          this.getAll();
          location.reload();
        }
      });
      }
    },
    save() {
      this.productoServices.save(this.producto).then(data => {
        if (data.status === 200) {
          this.displayModal = false;
          this.editModal = false;
          this.producto = {
            descripcion: null,
            cantidad: null,
            valor: null,
            imgurl: null
          };
          this.$toast.add({severity:'success', summary: 'Creado!', detail:'El registro se creo correctamente.', life: 3000});
          this.getAll();
          location.reload();
        }
      });
    },
    update() {
      this.productoServices.save(this.producto).then(data => {
        if (data.status === 200) {
          this.editModal = false;
          this.producto = {
            descripcion: null,
            cantidad: null,
            valor: null,
            imgurl: null
          };
          this.$toast.add({severity:'success', summary: 'Actualizacion!', detail:'Registro actualizado correctamente.', life: 3000});
          this.getAll();
          location.reload();
        }
      });
    },
    closeModal() {
      this.displayModal = false;
    },
    closeEdit() {
      this.editModal = false;
    }
  }
};
</script>

<style>
.product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
.p-column-filter{
  width: 160px;
}
</style>