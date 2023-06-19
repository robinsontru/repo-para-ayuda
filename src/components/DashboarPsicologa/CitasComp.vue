<template>

    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"  >
      <h1 class="h2">Citas</h1>
      <div class="btn-toolbar mb-2 mb-md-0" >
        <div class="btn-group me-2">
          <button type="button" class="btn1 btn-sm btn-outline-secondary">Cancelar</button>
          <button type="button" class="btn1 btn-sm btn-outline-secondary">
            <router-link class="nav-link active" to="/"> Salir</router-link></button>
        </div>
      
      </div>
      
    </div>

    <div>
      <p>tus cita creadas para le dia de hoy</p>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <th scope="col">Eliminar cita</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td> <button type="button" @click="eliminarCitaAceptada(imagen.cita_id)" class="btn btn-primary"> eliminar</button> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

    
     
</template>

<script>
import Swal from 'sweetalert2';
import axios from "axios";
export default {
name: 'CitasComp',
data() {
    return {
      tiempo_cita: {
        fecha: "",
        hora_id: "",
        descripcion: "",
      },
      imagenes: [],
      citasAceptadas: [],
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
        const response = await axios.get("http://localhost:4000/citas/");
        this.imagenes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async eliminarCita(cita_id) {
      try {
        const response = await axios.delete(`http://localhost:4000/citas/${cita_id}`);
        if (response.status === 200) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Evento eliminado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getuser(); // Actualizar la lista de citas después de eliminar una
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "acptada cita de cita exitosamnete",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  }
}
</script>

<style scoped>
.btn1 {
display: inline-block;
font-weight: 400;
line-height: 1.5;
height: 7vh;
}
</style>
