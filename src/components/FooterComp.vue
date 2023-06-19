<template>
    
    <div>
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
    
</template>
<script>
export default {
    name:'FooterComp'
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
         border-color: #4BB5E7;
         
     }
     .btn-bd-primary:hover,.btn-bd-primary:active{
         color: #fff;
         background-color: #61428f;
         border-color: #61428f;
     }
     .btn-bd-primary:focus{
         box-shadow:0 0 0 3px rgba(179, 82, 174, 0.25)
     }
 

</style>