<template>
   <div >
   <html lang="en">
  <head >
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
   <body class="text-center" >
   <main class="form-signin w-100 m-auto text-center shadow-lg p-3 mb-5"   >
   <form  >
    <img class="mb-4" src="@/assets/images/Logo1.png" alt="" width="100" height="67">
    <h1 class="h3 mb-3 fw-normal">Registro</h1>
       <div class="form-floating" >
      <input type="text" class="form-control rounded-4 mb-1" id="nombre"  name="name" placeholder="Nombres" v-model="persona.nombre" required>
      <label for="floatingInput" class="color-form">Nombres</label>
    </div>
    <div class="form-floating  ">
      <input type="text" class="form-control rounded-4 mb-1" id="lastname"  name="name2" placeholder="Apellidos" v-model="persona.apellido" required >
      <label for="floatingInput" class="color-form">Apellidos</label>
    </div>
    <div class="form-floating " >
      <select  class= " color-form form-select pt-1 rounded-4 mb-1 "  id="docu" name="docu" v-model.lazy="persona.tipo_documento"  required >
      <option disabled value = "" >Seleccione su Documento</option>
      <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
      <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
      <option value="Cedula de Extrenjeria">Cedula de Extrenjeria</option>
      </select>
   
   </div>

    <div class="form-floating">
      <input type="text" class="form-control rounded-4 mb-1" id="numerdocu"  name="numerdocu" placeholder="Numero de documento" v-model="persona.n_documento" required>
      <label for="floatingInput" class="color-form">Numero de documento</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control rounded-4 mb-1" id="ficha"  name="ficha" placeholder="Ficha" v-model="persona.n_ficha" required>
      <label for="floatingInput " class="color-form">Ficha</label>
    </div>
    
     <div class="form-floating">
      <input type="number" class="form-control rounded-4 mb-1" id="tel"  name="tel" placeholder="Telefono" v-model="persona.telefono" required>
      <label for="floatingPassword" class="color-form">Telefono</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control rounded-4 mb-1" id="email"  name="email" placeholder="Correo" v-model="persona.email" required>
      <label for="email" class="color-form">Correo Electronico</label>
    </div>
    

    <div class="form-floating">
      <input type="password" class="form-control rounded-4 mb-1" id="pass"  name="pass" placeholder="Contraseña" v-model="persona.contrasena" required>
      <label for="floatingPassword" class="color-form">Contraseña</label>

    </div>
    <div class="form-floating " >
      <select  class= " color-form form-select pt-1 rounded-4 mb-1 "  id="rol" name="rol" v-model.lazy="persona.rol"  required >
      <option disabled value = "" >Seleccione su rol</option>
      <option value="Aprendiz">Aprendiz</option>
      <option value="Enfermera">Enfermera</option>
      <option value="Psicologa">Psicologa</option>
      </select>
   </div>
    <br>
    <div>
      <button  type="submit" href="/" class="w-100 btn btn-lg btn-bd-primary mb-2" @click="postRegister(persona.id_persona)" >Registrarse</button>
      <button href="/login" class="w-100 btn btn-lg btn-bd-primary">Cancelar</button>
    </div> 
  </form>
   <p class="mt-5 mb-3 text-muted">&copy; Sintapujos 2023</p>
</main>
  </body>
</html>

   </div>
        
    
</template>

<script>
import axios from 'axios';
export default {
    name:'RegisterComp',
  data(){
    return{

      persona:{
        nombre:'',
      apellido:'',
      tipo_documento:'',
      n_documento:'',
      n_ficha:'',
      telefono:'',
      email:'',
      rol:'',
      contrasena:''
      }


    }
  },
  methods:{
    postRegister(){
      console.log(this.persona)
      axios.post('http://localhost:4000/persona',this.persona)
          .then((response)=>console.log(response))
    }
  }
   
}
</script>

<style scoped>
  .color-form{
      color: #20a754;
     }
    .btn-bd-primary{
        font-weight: 600;
        color: #fff;
        background-color: #52b357;
        border-color: #20a754;
    }
    .btn-bd-primary:hover,.btn-bd-primary:active{
        color: #fff;
        background-color: #61428f;
        border-color: #61428f;
    }
    .btn-bd-primary:focus{
        box-shadow:0 0 0 3px rgba(121,82,179, 0.25)
    }


   .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

    

    
</style>