<template>
    <!--Reporte generado solo por el profesional psicologo en cuanto a los aprendices que han asisitido a las citas-->
    <div class="col-12 col-md-12 col-xl-12">
      <div class=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Reporte</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Cancelar</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              <router-link class="nav-link active" to="/">Salir</router-link></button>
          </div>
        </div>
      </div>
      <div class="table-responsive" id="reporte">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">N° Documento</th>
              <th scope="col">Nombres</th>
              <th scope="col">fecha</th>
              <th scope="col">hora</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Ficha</th>
              <th scope="col">reporte</th>
              <th scope="col">descripcion</th>
            </tr>
          </thead>
          <tbody>
           <tr v-for="imagen in imagenes" :key="imagen.id">
             <th>{{ imagen.cita_id }}</th>
             <th>{{ imagen.n_documento }}</th>
             <th>{{ imagen.nombre }}</th>
             <td>{{ imagen.fecha }}</td>
             <td>{{ imagen.hora_id }}</td>
             <th>{{ imagen.apellido }}</th>
             <th>{{ imagen.ficha }}</th>
             <td>{{ imagen.descripcion }}</td>
             <td>
              <button type="button" @click="openModal(imagen)" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                reseña
              </button>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" :class='{ show: modal }'
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">{{ titleModal }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div>
                        <label for="descripcion">
                          <input type="text" v-model="tiempo_cita.descripcion" />
                        </label>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button @click="closeModal()" type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Cerrar</button>
                      <button @click="guardarResena(imagen.cita_id)" type="button" class="btn btn-primary">Guardar
                        reseña</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>  
           </tr>
          </tbody>
        </table>
      </div>
      <div class="boton">
        <button type="button" class="btn btn-sm btn-outline-secondary">Imprimir</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Swal from 'sweetalert2';
  export default {
    name: 'ReporteComp',
    data() {
    return {
      tiempo_cita: {
        fecha: "",
        hora_id: "",
        descripcion: "",
        n_documento:""
      },
      imagenes: [],
      contadoresCitas: {},
      horasAgendadas: [],
      titleModal: "",
      modal: false,
      limiteCitasIniciales: 1,
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    async getuser() {
      try {
        const response = await axios.get("http://localhost:4000/cita/");
        this.imagenes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async guardarResena(cita_id) {
      try {
        const response = await axios.put(`http://localhost:4000/cita/${cita_id}`, this.tiempo_cita);
        if (response.status === 200) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Evento editado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getuser();
          this.closeModal();
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error al editar el evento.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    openModal(imagen) {
      this.tiempo_cita.descripcion = imagen.descripcion;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  }
}
  
  </script>
  
  <style scoped>
  @media (max-width: 576.98px) {
    .table-responsive {
      top: 5rem;
    }
  }
  
  @media (max-width: 576.98px) {
    .table {
      top: 5rem;
    }
  }
  
  .btn-group {
    display: inline-block;
  
  }
  
  button {
  
    font-weight: 400;
    line-height: 1.5;
    height: 7vh;
  }
  
  .boton .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    height: 7vh;
  }
  </style>
  
  
  
  