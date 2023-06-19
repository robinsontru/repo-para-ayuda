<template>
    <section class="page-about">
        <main id="main">

            <!-- ======= Breadcrumbs ======= -->
            <div class="breadcrumbs d-flex align-items-center" style="">
                <div class="container position-relative d-flex flex-column align-items-center">

                    <h2>Derechos Sexuales y Reproductivos</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>About</li>
                    </ol>

                </div>
            </div><!-- End Breadcrumbs -->

            <!-- ======= About Section ======= -->
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4" data-aos="fade-up">
                        <div class="col-lg-4">
                            <img src="../assets/images/imgvivi/derechsexuaimg1.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-8">
                            <div class="content ps-lg-5">
                                <h3>¿Cuáles son tus derechos sexuales y cuáles son
                                    tus derechos reproductivos?
                                </h3>
                                <p>
                                    Los derechos sexuales y derechos reproductivos son los más humanos de los derechos, ya
                                    que entienden la sexualidad como parte inherente del ser humano para garantizar su
                                    desarrollo integral, su finalidad es garantizar que todas las personas
                                    puedan vivir libres de discriminación, riesgos, amenazas, coerciones y violencia en el
                                    campo de la sexualidad y la reproducción.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>                <!-- ======= Derechos sexuales Section ======= -->
                <section id="why-us" class="why-us">
                    <div class="container" data-aos="fade-up">
                        <div class="row g-0 " data-aos="fade-up" data-aos-delay="200">
                            <div class="div-sex col-xl-6 ">
                                <div class="section-header">
                                    <h3>Derechos Sexuales</h3>
                                    <div class="contenidoderesexu">
                                        <ul>
                                            <li>
                                                Derecho a fortalecer la autonomía y la
                                                autoestima en el ejercicio de la sexualidad.
                                            </li>
                                            <li>
                                                Derecho a explorar y a disfrutar de una
                                                vida sexual placentera.
                                            </li>
                                            <li>
                                                Derecho a elegir las parejas sexuales.
                                            </li>
                                            <li>
                                                Derecho a vivir la sexualidad sin ningún
                                                tipo de violencia.
                                            </li>
                                            <li>
                                                Derecho a tener relaciones sexuales
                                                consensuadas.
                                            </li>
                                            <li>
                                                Derecho a decidir libre y autónomamente
                                                cuándo y con quién se inicia la vida sexual.
                                            </li>
                                            <li>
                                                Derecho a decidir sobre la unión con otras
                                                personas.
                                            </li>
                                            <li>
                                                Derecho a vivir y expresar libremente la
                                                orientación sexual e identidad de género.
                                            </li>
                                            <li>
                                                Derecho a la protección y prevención de
                                                infecciones de transmisión sexual o
                                                embarazos no deseados.
                                            </li>
                                            <li>
                                                Derecho a recibir información y al acceso a
                                                servicios de salud de calidad sobre todas las
                                                dimensiones de la sexualidad, sin ningún
                                                tipo de discriminación.
                                               
                                            </li>
                                          
                                        </ul>
                                      
                                    </div>

                                </div>
                            </div>

                            <div class="div-repr col-xl-6  ">
                                <div class="section-header">
                                    <h3>Derechos Reproductivos</h3>
                                    <div class="contenidoderepro">
                                        <ul>
                                            <li>
                                                Derecho a tomar decisiones sobre la
                                                reproducción sin sufrir discriminación,
                                                coerción, ni violencia.
                                            </li>
                                            <li>
                                                Derecho a decidir libremente si se desea o no
                                                tener hijas o hijos.
                                            </li>
                                            <li>
                                                Derecho a decidir sobre el número de hijas o
                                                hijos que se desean y el espacio de tiempo
                                                entre un embarazo y otro.
                                            </li>
                                            <li>
                                                Derecho a decidir sobre el tipo de familia que
                                                se quiere formar.
                                            </li>
                                            <li>
                                                Derecho a ejercer la maternidad con un trato
                                                equitativo en la familia, espacios de educación
                                                y trabajo.
                                            </li>
                                            <li>
                                                Derecho a una educación integral para la
                                                sexualidad a lo largo de la vida.
                                            </li>
                                            <li>
                                                Derecho a acceder a métodos de
                                                anticoncepción modernos, incluida la
                                                anticoncepción de emergencia.
                                            </li>
                                            <li>
                                                Derecho al acceso a los servicios integrales de
                                                salud y atención médica para garantizar la
                                                maternidad segura.
                                            </li>
                                            <li>
                                                Derecho a aceder a los beneficios de los
                                                avances científicos en la salud sexual y
                                                reproductiva.
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="videoderechos">
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/lJjZ4wa3Emc"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>

                    </div>

                </section><!-- End About Section -->

            </section>





        </main>


    </section>
</template>

<script>
export default {
    name: 'DerechosComp'

}
</script>




<style scoped>
.page-about {
    background-color: #f0f8ff;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
    padding: 140px 0 60px 0;
    min-height: 30vh;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../assets/images/imgvivi/derecheader.jpg");

}

.breadcrumbs:before {
    content: "";
    background-color: rgba(27, 64, 103, 0.7);
    position: absolute;
    inset: 0;

}

.breadcrumbs h2 {
    font-size: 50px;
    font-weight: 500;
    color: #fff;
    font-family: var(--font-secondary);
}


.breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 0 10px 0;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #55c6fa;
}

.breadcrumbs ol a {
    color: rgba(255, 255, 255, 0.8);
    transition: 0.3s;
}

.breadcrumbs ol a:hover {
    text-decoration: underline;
}

.breadcrumbs ol li+li {
    padding-left: 10px;
}

.breadcrumbs ol li+li::before {
    display: inline-block;
    padding-right: 10px;
    color: #fff;
    content: "/";
}

/*--------------------------------------------------------------

# About Section
--------------------------------------------------------------*/
.about .content h3 {
    font-weight: 700;
    font-size: 30px;
    font-family: var(--font-secondary);
   /* color: var(--color-secondary);*/
}

.about {
    padding: 20px;
    margin-top: 30px;
}

.about .container {
    box-shadow: 0 4px 16px rgba(90, 89, 89, 0.1);
    padding: 30px;
}

.about .content p {
    margin: 30px 0;
    color: #0e0f0f;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}


/*section */
.why-us {
    padding: 20px;
    margin-top: 5px;
    display: flex;


}

.section-header {
    text-align: center;
    padding-bottom: 30px;
    background-color: #e3ecfc;
    box-shadow: 0 4px 16px rgba(90, 89, 89, 0.1);

}

.section-header h3 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    padding: 10px;

}

.section-header h3:after {
    content: "";
    position: absolute;
    display: block;
    width: 60px;
    height: 2px;
    background: rgb(205, 104, 249);
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.section-header ul li {
    text-align: justify;
     padding: 4px;/*para darle espacio al listado de derechos*/
}

.section-header .contenidoderesexu {
    padding:20px 30px 11px 30px ;  /*el tercer px es el le da espacio de abajo*/
}

.section-header .contenidoderepro {
    padding: 20px 30px 18px 10px ;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
}

.videoderechos {
    text-align: center;
    padding: 30px 0 0 0;
}

iframe {
    border-radius: 5%;
}
</style>