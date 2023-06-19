<template>
  <div
    class=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0 pb-0 mb-0 border-bottom p-0">
    <h1 class="h2">Agenda tu cita ap</h1>
    <div class="btn-toolbar mb-2 mb-md-0" id="agenda">
      <div class="btn-group me-2">
        <button type="button" class="btn btn-sm btn-outline-secondary rounded-4  me-2">Cancelar</button>
        <button type="button" class="btn btn-sm btn-outline-secondary rounded-4">

          <router-link class="nav-link active" to="/"> Salir</router-link></button>
      </div>
    </div>
  </div>
  <div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <th scope="col">Aceptar cita</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td> <button type="button" @click="eliminarCitaAceptada(imagen.cita_id)" class="btn btn-primary"> Aceptar cita
              </button> </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mb-4">
      <label for="nombre" class="form-label">Nombre</label>
      <tr v-for="usuario in usuarios" v-bind:key="usuario.id_persona">
        <td class="form-control" id="comentarios" rows="4">
          {{ usuario.n_documento }}
        </td>
      </tr>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: 'CitasAprendizComp',

  data() {
    return {
      tiempo_cita: {
        fecha: "",
        hora_id: "",
        descripcion: "",
        n_documento: ""
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
    this.fetchUserData();
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
    fetchUserData() {
  const persona = JSON.parse(localStorage.getItem('persona'));
  if (persona && persona.n_documento) {
  this.tiempo_cita.n_documento = persona.n_documento;
  this.usuarios = [persona];
} else {
  this.name = null;
  this.usuarios = [];
}
    },

    async eliminarCitaAceptada(cita_id) {
      try {
    const response = await axios.delete(`http://localhost:4000/cita/${cita_id}`);
    if (response.status === 200) {
      const userData = JSON.parse(localStorage.getItem('persona'));
      this.tiempo_cita.fecha = userData.fecha;
      this.tiempo_cita.hora_id = userData.hora_id;
      this.tiempo_cita.descripcion = userData.descripcion;
      this.tiempo_cita.n_documento = userData.n_documento;

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Cita confirmada correctamente.",
        showConfirmButton: false,
        timer: 1500,
      });

      // Eliminar la cita aceptada de citasAceptadas
      this.citasAceptadas = this.citasAceptadas.filter(imagen => imagen.cita_id !== cita_id);

      // Crear una nueva cita con el número de n_documento
      const nuevaCita = {
        cita_id: cita_id,
        fecha: this.tiempo_cita.fecha,
        hora_id: this.tiempo_cita.hora_id,
        descripcion: this.tiempo_cita.descripcion,
        n_documento: this.tiempo_cita.n_documento
      };
      // Actualizar el n_documento en el localStorage
      localStorage.setItem('n_documento', this.tiempo_cita.n_documento);
      // Agregar la nueva cita a citasAceptadas
      this.citasAceptadas.push(nuevaCita);
      console.log(nuevaCita);
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: "Error al eliminar la cita.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
},
async aceptarCita(cita_id) {
  try {
    const response = await axios.get(`http://localhost:4000/cita/${cita_id}`);
    if (response.status === 200) {
      const cita = response.data;
      this.citasAceptadas.push(cita);
      this.eliminarCitaAceptada(cita_id);
      this.mostrarMensaje('success', 'Cita aceptada correctamente. :)');
      console.log(response.data, 'hoalksbcjfvbuf');
    }
    console.log(response.data, 'hoalksbcjfvbuf');
  } catch (error) {
    console.log(error);
    this.mostrarMensaje('error', 'Error al aceptar la cita.');
  }
}


  },
}
</script>
