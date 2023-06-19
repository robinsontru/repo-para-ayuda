<template>
  <div class=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0 pb-0 mb-0 border-bottom">
        <h1 class="h2"> Abrir Agenda</h1>
        <div class="btn-toolbar mb-2 mb-md-0" id="agenda">
            <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary rounded-4  me-2">Cancelar</button>
                <button type="button" class="btn btn-sm btn-outline-secondary rounded-4">
                    <router-link class="nav-link active" to="/"> Salir</router-link></button>
            </div>
        </div>
    </div>
 
   <div> 
        <h2>Calendario</h2>
        <hr>
        <div class="date-picker">



          <label for="">calendario
            <input type="date" name="calendario"  v-model="tiempo_cita.fecha" @change="updateEndDate"/>
          </label>
          <label for="">hora de cita
            <input type="time" v-model="tiempo_cita.hora_id" />
          
          </label>
          <hr>
        </div>
        <button @click="postComentarios">Guardar</button>
      </div>

   
    
</template>



<script>
import axios from "axios";
import Swal from 'sweetalert2';
export default {
    name: 'AgendarComp',
   
    data() {
    return {
      tiempo_cita: {
        fecha: "",
        hora_id: "",
        descripcion: "",
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
          this.$swal.fire({
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
        this.$swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error al eliminar el evento.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    async guardarResena(cita_id) {
      try {
        const response = await axios.put(`http://localhost:4000/citas/${cita_id}`, this.tiempo_cita);
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
    postComentarios() {
      const currentDate = new Date().toISOString().split("T")[0];
      if (this.tiempo_cita.fecha < currentDate) {
        Swal.fire({

          position: "top-center",
          icon: "warning",
          title: "La fecha de la cita no puede ser anterior a la fecha actual.",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      if (this.horasAgendadas.includes(this.tiempo_cita.hora_id)) {
        Swal.fire({
          position: "top-center",
          icon: "warning",
          title: "La hora seleccionada ya está agendada. Por favor, elija otra hora.",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      const limiteCitas = this.limiteCitasPorDia(this.tiempo_cita.fecha);
      if (this.imagenes.length >= limiteCitas) {
        this.$swal.fire({
          position: "top-center",
          icon: "warning",
          title: "Se ha alcanzado el límite de citas permitidas para la fecha actual.",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      axios.post('http://localhost:4000/citas/', this.tiempo_cita)
        .then((response) => {
          console.log(response.data);
          console.log('Fecha de inicio:', this.tiempo_cita);
          this.horasAgendadas.push(this.tiempo_cita.hora_id);
          this.mostrarMensaje('success', 'Comentario creado correctamente.', '', () => {
            this.getuser();
          });
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            this.mostrarMensaje('warning', 'Límite de citas alcanzado', 'Se ha alcanzado el límite de citas permitidas para la fecha actual.');
          } else {
            console.log(error);
            this.mostrarMensaje('error', 'Oops...', 'No se pudo crear la cita correctamente.');
          }
        });
    },

    mostrarMensaje(icon, title, text, callback) {
      Swal.fire({
        icon: icon,
        title: title,
        text: text,
        position: 'top-center',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        if (callback && typeof callback === 'function') {
          callback();
        }
      });
    },

    limiteCitasPorDia(date) {
      const currentDate = new Date();
      const selectedDate = new Date(date);
      const diffTime = Math.abs(selectedDate - currentDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const limiteCitas = this.limiteCitasIniciales + (6 * diffDays);
      return limiteCitas;
    }
  },
}
</script>

<style scoped>
@media (max-width: 767.98px) {
    #agenda {
        top: 5rem;
    }
}

.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    height: 7vh;
}
</style>