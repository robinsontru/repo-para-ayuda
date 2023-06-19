<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Mis Citas app</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <button type="button" class="btn btn-sm btn-outline-secondary">Cancelar</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">
          <router-link class="nav-link active" to="/"> Salir</router-link></button>
      </div>
    </div>
  </div>
  <div>
    <div class="container">
      <h2>Citas Aceptadas</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <th scope="col">descripcion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td>{{ imagen.descripcion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <hr>
    <div v-if="citasAceptadas.length === 0">
      <p>No tienes citas.</p>
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <th scope="col">descripcion</th>
            <th scope="col">Eliminar cita</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td>{{ imagen.descripcion }}</td>
            <td>
            </td>
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
  name: 'MisCitasComp',
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
        const response = await axios.get("http://localhost:4000/cita/");
        this.imagenes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async eliminarCitaAceptada(cita_id) {
      try {
        const response = await axios.delete(`http://localhost:4000/cita/${cita_id}`);
        if (response.status === 200) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Cita eliminada correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
          this.citasAceptadas = this.citasAceptadas.filter(imagen => imagen.cita_id !== cita_id);
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error al eliminar la cita.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    openModal(imagen) {
      this.tiempo_cita.descripcion = imagen.descripcion;
      this.modal = true;
    },
    async aceptarCita(cita_id) {
      try {
        const response = await axios.get(`http://localhost:4000/citas/${cita_id}`);
        if (response.status === 200) {
          const cita = response.data;
          this.citasAceptadas.push(cita);
          this.eliminarCita(cita_id);
          this.mostrarMensaje('success', 'Cita aceptada correctamente.');
        }
      } catch (error) {
        console.log(error);
        this.mostrarMensaje('error', 'Error al aceptar la cita.');
      }
    },
    limiteCitasPorDia(date) {
      const currentDate = new Date();
      const selectedDate = new Date(date);
      const diffTime = Math.abs(selectedDate - currentDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const limiteCitas = this.limiteCitasIniciales + (8 * diffDays);
      return limiteCitas;
    }
  },
}
</script>


<style scoped></style>