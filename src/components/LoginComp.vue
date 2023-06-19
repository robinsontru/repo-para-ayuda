<template>
  <div>


    <html lang="en">

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
      <meta name="generator" content="Hugo 0.104.2">
      <title>Signin Template · Bootstrap v5.2</title>

      <link href="css/bootstrap.min.css" rel="stylesheet">


      <!-- Custom styles for this template -->
      <link href="css/signin.css" rel="stylesheet">
    </head>

    <body class="text-center">

      <main class="form-signin w-100 m-auto text-center shadow-lg p-3 mb-5">



        <form @submit=postLogin() autocomplete="off">
          <img class="mb-4" src="@/assets/images/Logo1.png" alt="" width="100" height="67">
          <h1 class="h3 mb-3 fw-normal">Ingresar</h1>

          <div class="form-floating  mb-2">
            <input type="text" class="form-control rounded-4" id="idnumber" placeholder="Usuario"
              v-model="persona.n_documento">
            <label for="floatingInput" class="color-form"> <i class="bi bi-file-earmark-person-fill"></i>
              Documento</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control rounded-4" id="password" placeholder="Contraseña"
              v-model="persona.contrasena">
            <label for="floatingPassword" class="color-form"><i class="bi-lock"></i> Contraseña</label>
          </div>

          <div class="checkbox mb-3">

          </div>
          <button class="w-100 btn btn-lg btn-bd-primary mb-2 rounded-4" type="submit">Login</button>
          <br>
          <a href="/registro" class="w-100 btn btn-lg btn-bd-primary rounded-4">Registrarse</a>
        </form>

        <p class="mt-5 mb-3 text-muted">&copy; Sintapujos 2023</p>
      </main>


    </body>

    </html>

  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  name: 'LoginComp',
  data() {
    return {
      persona: {
        n_documento: '',
        contrasena: '',
      }
    }
  },
  methods: {
    postLogin() {
      axios.post('http://localhost:4000/login', this.persona)
        .then((response) => {
          if (response.data.code === 201) {
            localStorage.setItem('token', response.data.token); // Guardar el token en el Local Storage
            localStorage.setItem('persona', JSON.stringify(this.persona)); // Guardar los datos persona en el Local Storage
            // this.$router.push('/inicio');
          }
          Swal.fire({
            position: 'center',
            icon: response.data.icon,
            title: response.data.message,
            showConfirmButton: false,
            timer: 5000,
          });
        });
    }
  }
};
</script>
<style scoped>
.btn-bd-primary {
  font-weight: 600;
  color: #fff;
  background-color: #52b357;
  border-color: #20a754;
}

.btn-bd-primary:hover,
.btn-bd-primary:active {
  color: #fff;
  background-color: #61428f;
  border-color: #61428f;
}

.btn-bd-primary:focus {
  box-shadow: 0 0 0 3px rgba(121, 82, 179, 0.25)
}

.color-form {
  color: #20a754;
}
</style>