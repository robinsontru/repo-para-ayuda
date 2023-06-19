<template>
  <div class="encabezado" form="">

  </div>
  <div>
    <h1>Comentarios</h1>
    <div class="container">
      <form @submit="postcomentarios()">
        <div class="mb-4">
          <label for="nombre" class="form-label">Nombre</label>
          <tr v-for="usuario in usuarios" v-bind:key="usuario.id_persona">
            <td class="form-control" id="comentarios" rows="4">
              {{ usuario.n_documento }}
            </td>
          </tr>
        </div>
     
        <div class="mb-4">
          <label for="nombre" class="form-label">correo eletronico</label>
          <tr v-for="usuario in usuarios" v-bind:key="usuario.id_persona">
            <td class="form-control" id="comentarios" rows="4">
              {{ usuario.contrasena }}
            </td>
          </tr>
        </div>
        <div class="mb-4">
          <label for="comentario" class="form-label">Comentario</label>
          <textarea class="form-control" v-model="newcomen.comentario">Comentario</textarea>
          <p></p>
          <button type="submit" class="btn btn-primary">
            Enviar Comentario
          </button>
        </div>
        <p></p>
      </form>

        <div class="mb-5">
          <label for="comentarios" class="form-label">Comentario Publicado</label>
        
          <tr v-for="comentario in comentarios" v-bind:key="comentario.id_Comentarios">
            <td class="form-control" id="comentarios" rows="4">
              {{ comentario.n_documento }} : {{ comentario.comentario }}
            </td>
          </tr>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {
  name: 'ComentariosComp',
  data() {
    return {
      usuarios: null,
      comentarios: [],
      newcomen: { comentario: "", n_documento: ""  },
      name: null,
    };
  },
  mounted() {
    this.fetchUserData();
    this.getuser();
  },
  methods: {
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
    getuser() {
      axios.get("http://localhost:4000/api/comentario")
        .then(response => {
          this.comentarios = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
   
  postcomentarios() {
    if (!this.newcomen.comentario ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos.",
      });
      this.getuser();
    } else {
      // Asigna el número de documento a newcomen.n_documento antes de enviarlo al servidor
      this.newcomen.n_documento = this.numeroDocumento;

      axios.post("http://localhost:4000/api/comentario", this.newcomen)
        .then(response => {
          console.log(response.data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Comentario creado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getuser();
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo crear el comentario correctamente.",
          });
        });
    }
  },

  },

  computed: {
  numeroDocumento() {
    if (this.usuarios && this.usuarios.length > 0) {
      return this.usuarios[0].n_documento;
    }
    return null;
  },
}

};
</script>

<style scoped></style>