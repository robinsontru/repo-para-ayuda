<template>
    <body id="section_1" class="$Success">
    <div>
        <header class="site-header" id="mificoencab">
        <div class="container">

            <div class="row">

                <div class="col-lg-8 col-12 d-flex flex-wrap ">
                    <p class="d-flex me-4 mb-0">
                        <i class="bi-geo-alt me-2"></i>
                        <a href="https://goo.gl/maps/YDaNsaeH6fuv5xUi7"> Sena CTPI reginal cauca, Popayan.</a>
                    </p>

                    <p class="d-flex mb-0">
                        <i class="bi-envelope me-2"></i>

                        <a href="mailto:info@company.com">
                            SinTapujos@misena.edu.com
                        </a>
                    </p>
                </div>

                <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                    <ul class="social-icon">

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-twitter"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="https://www.facebook.com/login" class="social-icon-link bi-facebook"></a>
                        </li>
                        <!--ESTAS REDES POR EL MOMENNTO NO HAY
                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-instagram"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-youtube"></a>
                        </li>
                        -->
                        <li class="social-icon-item">
                            <a href="https://web.whatsapp.com" class="social-icon-link bi-whatsapp"></a>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
     </header>
     
        <nav class="navbar navbar-expand-lg bg-light shadow-lg mb-4 sticky-top  rounded-top " >
        <div class="container p-0 ">
            <a class="navbar-brand" href="index.html">
                <img src="../assets/images/Logo1.png" class="" width="150" id="logonav" >
                <span>

                    <small></small>
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>


          

            <div class="collapse navbar-collapse  " id="navbarNav">
                <ul class="navbar-nav ms-auto  " >
                    <li class="nav-item ">
                        
                        <router-link to="/" class="nav-link click-scroll ">Inicio</router-link>
                    </li>
                    
                    <li class="nav-item">
                       
                        <router-link to="/quienessomos" class="nav-link click-scroll">Quienes Somos</router-link>
                    </li >

                    <li class="nav-item">
                        
                        <router-link to="/conoceteycuidate" class="nav-link click-scroll">Conocete y cuidate</router-link>

                        <!-- CON ESTA ETIQUETA NAVEGO EN ESCROLL
                        <a class="nav-link click-scroll" href="#section_3">Conocete y cuidate</a>-->
                    </li>

                   <!-- <li class="nav-item">
                        <a class="nav-link " href="#section_aprender">Juegos</a>
                         CON ESTA ETIQUETA NAVEGO EN ESCROLL
                        <a class="nav-link click-scroll" href="#section_4">Juegos</a>
                    </li> -->

                    <li class="nav-item dropdown">
                        <!--class="nav-link click-scroll dropdown-toggle" EN ESTE CLASE QUITO dropdown-toggle PARA QUE NO DEPLIEGUE 
                        ADEMES -->

                        

                            <router-link to="/comentarios" class="nav-link click-scroll">Comentarios</router-link>

                            
                        <!--ESTE DESPLEGABLE EN EL MOMEMNTO NO

                        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                            <li><a class="dropdown-item" href="news.html">Comentarios</a></li>

                            <li><a class="dropdown-item" href="news-detail.html">News Detail</a></li>
                        </ul>
                        -->
                    </li>
                    

                    <li class="nav-item">
                        
                        <router-link to="/agendacita" class="nav-link click-scroll">Agenda tu cita </router-link>
                        <!-- <a class="nav-link click-scroll" href="#section_6">Agenda tu cita </a>-->
                    </li>

                    <li class="nav-item">
                        <router-link to="/enfermera" class="nav-link click-scroll">Eventos  </router-link>
               
                    </li>
                    <li class="nav-item">
                        
                        <router-link to="/dashboard" class="nav-link click-scroll">Psicologa  </router-link>
                        <!-- <a class="nav-link click-scroll" href="#section_6">Agenda tu cita </a>-->
                    </li>
                </ul>

                   <!--BOTON INICIO DE SESION Y NODAL -->
                   <button type="button" class="btn btn-outline-success ms-1 btn-bd-primary    " data-bs-toggle="modal"
                            data-bs-target="#modalinicio">Inicio sesion</button>
                
                       
                    <!--BOTON INICIO DE Registro Y NODAL -->
                    <button type="button" class="btn btn-outline-success ms-4 btn-bd-primary " data-bs-toggle="modal"
                            data-bs-target="#modalregistro" >Registro</button>

                          
                     
                    
                   
                
            </div>
        </div>
    </nav>
    <div class="modal fade" id="modalregistro"  data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"></h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <!--INGRESO CODIGO DE REGISTRO EN ESTE DIV -->
                <div class="modal-body">
                    <RegisterComp></RegisterComp>
                </div>
                <!--TERMINA CODIGO DE REGISTRO-->

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button>-->
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalinicio"  data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"></h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <!--INGRESO CODIGO DE REGISTRO EN ESTE DIV -->
                <div class="modal-body">
                    <login-comp></login-comp>
                </div>
                <!--TERMINA CODIGO DE REGISTRO-->

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button>-->
                </div>
            </div>
        </div>
    </div>




    <main>
        <section class="hero-section hero-section pb-5 mt-4">
            <div class="container-fluid">
                <div class="row">
                    
                    <!--EMPIEZA CARRUSEL-->
                    <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner ">
   
    <div class="carousel-item active" v-for="imagen in imagenes" :key="imagen.id" >
        <img :src="imagenUrl(imagen)" alt="" width="70" height="70">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
                  
      
                    <!--TERMINA CARRUSEL-->

                </div>
            </div>
        </section>

        <section class="section-padding section-bg mb-1 pt-1  pb-0" id="section_aprender" >
            <div class="container">
                <div class="row">

                    <div class="col-lg-10 col-12 text-center mx-auto">
                        <h2 class="mb-5">Bienvenido a SinTapujos</h2>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <div class="featured-block d-flex justify-content-center align-items-center">
                            <a href="#" class="d-block custom-link">
                                <img src="../assets/images/icons/libro.png" class="featured-block-image img-fluid" alt="">

                                <p class="featured-block-text" >Aumenta <strong>tu conocimiento</strong></p>

                                
                    
                                
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div class="featured-block d-flex justify-content-center align-items-center">
                            <a href="#" class="d-block custom-link">
                                <img src="../assets/images/icons/educacion-sexual.png" class="featured-block-image img-fluid"
                                    alt="">

                                <p class="featured-block-text"><strong>Fomenta</strong> tu responsabilidad</p>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div class="featured-block d-flex justify-content-center align-items-center">
                            <a href="#" class="d-block custom-link">
                                <img src="../assets/images/icons/salud-mental.png" class="featured-block-image img-fluid" alt="">

                                <p class="featured-block-text">Conectate <strong>Con profesionales </strong></p>
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <div class="featured-block d-flex justify-content-center align-items-center">
                            <a href="#" class="d-block custom-link">
                                <img src="../assets/images/icons/rompecabezas.png" class="featured-block-image img-fluid" alt="">

                                <p class="featured-block-text"><strong>Diviertete</strong> Aprendiendo</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="section-padding section-bg d-flex justify-content-center" id="section_2">
            <div class="container d-flex justify-content-center">
                <div class="row d-flex justify-content-center ">
                    <!--DIVISION DE LA PARTE QUIENES SOMOS -->

                    <div class="col-lg-6 col-12">
                        <div class="custom-text-box">
                            <h2 class="mb-2">Quienes somos :</h2>

                            <h5 class="mb-3">SinTapujos</h5>

                            <p class="mb-0 text-start">Es una App que pretende contribuir a la educacion
                                sexual , con articulos educativos sobre anatomia , metodos anticonseptivos, enfermedades
                                de transmicion sexual, ademas encontraras un test que evaluará tus conocimientos sobre
                                sexualidad .
                                Tambien tendrá la oportunidad de divertirte jugando y aprendiendo, todo con el fin de
                                hacer más agradable , responsable y educativa la forma de aprender de sexulidad.</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="custom-text-box mb-lg-0">
                                    <h5 class="mb-3">Mision</h5>

                                    <p class="text-start">Crear una App web y móvil para los aprendices SENA en su etapa de adolescencia
                                        con contenido educativo, servicios de calidad (psicología) y contribuir al
                                        ejercicio responsable de la sexualidad y reproducción en forma satisfactoria y
                                        con los menores riesgos posibles.</p>


                                     <!--<ul class="custom-list mt-2">
                                        <li class="custom-list-item d-flex">
                                            <i class="bi-check custom-text-box-icon me-2"></i>
                                            Charity Theme
                                        </li>

                                        <li class="custom-list-item d-flex">
                                            <i class="bi-check custom-text-box-icon me-2"></i>
                                            Semantic HTML
                                        </li>
                                       </ul>-->
                                    
                                </div>
                            </div>


                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="custom-text-box mb-lg-0">
                                    <h5 class="mb-3">Vision</h5>

                                    <p class="text-start">Crear una App web y móvil para los aprendices SENA en su etapa de adolescencia
                                        con contenido educativo, servicios de calidad (psicología) y contribuir al
                                        ejercicio responsable de la sexualidad y reproducción en forma satisfactoria y
                                        con los menores riesgos posibles.</p>


                                     <!--<ul class="custom-list mt-2">
                                        <li class="custom-list-item d-flex">
                                            <i class="bi-check custom-text-box-icon me-2"></i>
                                            Charity Theme
                                        </li>

                                        <li class="custom-list-item d-flex">
                                            <i class="bi-check custom-text-box-icon me-2"></i>
                                            Semantic HTML
                                        </li>
                                       </ul>-->
                                    
                                </div>
                            </div>

                        
                        </div>
                    </div>

                </div>
            </div>
        </section>

        
       



        <section class="about-section section-padding pb-2">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-md-5 col-12 ">
                        <img src="../assets/images/avatar/Logosimbolo-SENA-PRINCIPAL.png" class="about-image ms-lg-auto bg-light shadow-lg img-fluid"
                            id="logosen" alt="80%">
                    </div>

                    <div class="col-lg-5 col-md-7 col-12">
                        <div class="custom-text-block">
                            <h2 class="mb-0">Sena C.T.P.I Popayan</h2>

                            <p class="text-muted mb-lg-4 mb-md-4">ADSI 2452442</p>

                            <p class="text-start">El SENA Popayan en la región Cauca se caracteriza por una complejidad por su enclave
                                industrial en la zona norte y un desarrollo del sector terciario en el centro. Estas
                                zonas tienen un índice de educación bajos por eso, la regional SENA Popayán ofrece
                                muchos servicios para satisfacer todas las necesidades. Sus esfuerzos se basan en buscar
                                oportunidades de empleo y mejorar la calidad de vida de los habitantes.
                            </p>



                          
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>

    <footer class="site-footer" id="antesdpie">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-12 mb-4" href="">
                    <a href="#"> <img src="../assets/images/Logo1.png" class="img-footer" alt="" id="logopie" width="400"></a>
                </div>
                <!--    
                <div class="col-lg-4 col-md-6 col-12 mb-4" id="antesdpie">
                    <h5 class="site-footer-title mb-3">Quick Links</h5>

                    <ul class="footer-menu">
                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Our Story</a></li>

                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Newsroom</a></li>

                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Causes</a></li>

                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Become a volunteer</a></li>

                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Partner with us</a></li>
                    </ul>
                </div>-->

                <div class="col-lg-4 col-md-6 col-12 mx-auto   ">
                    <div class="d-flex justify-content-start">
                        <h5 class="site-footer-title mb-2 text-dark fs-bold">Contactos de Infomacion</h5>
                    </div>
                    

                    <p class="text-white d-flex mb-2  ">
                        <i class="bi-telephone me-2 text-dark  fw-bold"></i>

                        <a href="tel: 320-654-6472" class="site-footer-link text-dark  fw-bold ">
                            320-654-6472
                        </a>
                    </p>

                    <p class="text-white d-flex">
                        <i class="bi-envelope me-2 text-dark"></i>

                        <a href="mailto:info@yourgmail.com" class="site-footer-link  text-dark fw-bold">
                            SinTapujos@misena.edu.com
                        </a>
                    </p>

                    <p class="text-dark d-flex mt-3  fw-bold">
                        <i class="bi-geo-alt me-2 "></i>
                         Sena CTPI reginal cauca, Popayan.
                    </p>
                    
                    <div class="d-flex justify-content-start mt-2 pt-3">
                        <a href="#" class="btn btn-outline-success ms-4 btn-bd-primary">Volver a inicio</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="site-footer-bottom mt-0" id="divdepie">
            <div class="container">
                <div class="row">



                    <div class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                        <ul class="social-icon">
                            <li class="social-icon-item">
                                <a href="https://twitter.com/" class="social-icon-link bi-twitter"></a>
                            </li>

                            <li class="social-icon-item">
                                <a href="/inicio" class="social-icon-link bi-facebook"></a>
                            </li>

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link bi-instagram"></a>
                            </li>


                            <li class="social-icon-item">
                                <a href="https://www.bing.com/videos/search?q=El+Sena&&view=detail&mid=A59273358E9A8CE43153A59273358E9A8CE43153&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3DEl%2BSena%26FORM%3DVRMHRS"
                                    class="social-icon-link bi-youtube"></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    </div>
</body>
</template>

<script>
import LoginComp from './LoginComp.vue';
import RegisterComp from './RegisterComp.vue';

export default {
    name: 'HomeComp',
    components:{
        LoginComp,RegisterComp,
    },
    data() {
    return {
      imagenes: []
    };
  },
  methods: {
    async obtenerImagenes() {
      try {
        const response = await fetch('http://localhost:4000/imagenes');
        if (response.ok) {
          const data = await response.json();
          this.imagenes = data;
        } else {
          console.error('Error al obtener las imágenes');
        }
      } catch (error) {
        console.error(error);
      }
    },
    imagenUrl(imagen) {
      if (imagen && imagen.imagen && imagen.imagen.data) {
        const imageBuffer = new Uint8Array(imagen.imagen.data);
        const base64Image = btoa(String.fromCharCode.apply(null, imageBuffer));
        return `data:image/jpg;base64,${base64Image}`;
      }
      return ''; // Devuelve una cadena vacía si no hay imagen o datos de imagen válidos
    }
  },
  mounted() {
    this.obtenerImagenes();
  }
}
</script>

<style scoped>
.btn-outline-success{
    border-radius: 20px;
}
.btn-bd-primary{
         font-weight: 600;
         color: #fff;
         background-color: #4BB5E7;
         border-color:#4BB5E7;
         
     }
     .btn-bd-primary:hover,.btn-bd-primary:active{
         color: #fff;
         background-color: #61428f;
         border-color: #61428f;
     }
     .btn-bd-primary:focus{
         box-shadow:0 0 0 3px rgba(179, 82, 174, 0.25)
     }

     .custom-link {
  text-decoration: none;
}
 
 


</style>