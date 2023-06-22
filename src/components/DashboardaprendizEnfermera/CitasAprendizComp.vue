
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
            <th scope="col">n_documento</th>

            <th scope="col">Aceptar cita</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id_cita">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td>
              {{ imagen.n_documento }}
            </td>
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
      if (persona) {
        this.name = persona.n_documento;
        this.usuarios = [persona];
      } else {
        this.name = null;
        this.usuarios = [];
      }
    },
    async eliminarCitaAceptada(cita_id) {
  try {
    const userData = JSON.parse(localStorage.getItem('persona'));
    // Obtener los datos de la cita de la base de datos
    const appointmentResponse = await axios.get(`http://localhost:4000/citas/${cita_id}`);
    const appointmentData = appointmentResponse.data;
    
    if (appointmentData && appointmentData.fecha && appointmentData.hora_id) {
     // Borra la cita de la base de datos
      const response = await axios.delete(`http://localhost:4000/citas/${cita_id}`);
      
      if (response.status === 200) {
     // Crear una nueva cita con los datos de la base de datos y el ID de la cita a borrar
        const citaEliminada = {
          cita_id: cita_id,
          fecha: appointmentData.fecha,
          hora_id: appointmentData.hora_id,
          descripcion: appointmentData.descripcion,
          n_documento: userData.n_documento
        };
        
 // Guarda la cita borrada en la base de datos
        await axios.post('http://localhost:4000/cita/', citaEliminada);
        
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Cita eliminada correctamente.",
          showConfirmButton: false,
          timer: 1500,
        });
        
        console.log(citaEliminada);
        
        this.citasAceptadas = this.citasAceptadas.filter(imagen => imagen.cita_id !== cita_id);
      } else {
        // Mostrar un mensaje de error en caso de que no se pueda eliminar la cita
        console.log('Error al eliminar la cita');
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error al eliminar la cita.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      // Mostrar un mensaje de error o manejar la situación de falta de datos
      console.log('Error: Datos de cita faltantes');
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Error al eliminar la cita. Datos faltantes.",
        showConfirmButton: false,
        timer: 1500,
      });
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
}

,

async aceptarCita(cita_id) {
  try {
    const response = await axios.get(`http://localhost:4000/cita/${cita_id}`);
    if (response.status === 200) {
      const citaEliminada = response.data;
      this.citasAceptadas.push(citaEliminada);
      this.mostrarMensaje('success', 'Cita aceptada correctamente. :)');
      console.log(this.citasAceptadas);
    }
  } catch (error) {
    console.log(error);
    this.mostrarMensaje('error', 'Error al aceptar la cita.');
  }
}




  },
}
</script>
