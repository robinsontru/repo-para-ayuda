import { createRouter, createWebHashHistory } from 'vue-router'

import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import  QuienesSomosView from '../views/QuienesSomosView.vue'
import ConoyCuidateView from '../views/ConoyCuidateView.vue'
import InicioView from '../views/InicioView.vue'
import HomeComp from '../components/HomeComp.vue'
import ComentariosView from  '../views/ComentariosView.vue'
import AgendacitaView from  '../views/AgendacitaView.vue'
import EventosView from '../views/EventosView.vue'
import ItsView from '../views/ItsView.vue'
import VistaderechosView from '../views/VistaderechosView.vue'
import VistainformacionView from '../views/VistainformacionView.vue' 
import DashboardView from '../views/DashboardView.vue'

import AprendizView from '../views/AprendizView.vue'
import  EnfermeraView from '../views/EnfermeraView.vue'


const routes = [


  {
    path: '/',
    name: 'home',
    component: HomeComp
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: InicioView
  },


  {
    path: '/registro',
    name: 'registro',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/quienessomos',
    name: 'quienesSomos',
    component: QuienesSomosView
  },
  {
    path: '/conoceteycuidate',
    name: 'conoceteycuidate',
    component: ConoyCuidateView
  },
  {
    path: '/comentarios',
    name: 'comentarios',
    component: ComentariosView
  },
  {
    path: '/agendacita',
    name: 'agendacita',
    component: AgendacitaView
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: EventosView
  },
  {
    path: '/psicologa',
    name: 'psicologa',
    component: AgendacitaView
  },
  {
    path: '/its',
    name: 'its',
    component: ItsView
  },
  {
    path: '/derechos',
    name: 'derechos',
    component: VistaderechosView
  },
  {
    path: '/informacion',
    name: 'informacion',
    component: VistainformacionView
  },
  //aqui  van los hijos del dashboard
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    children:[
      {
        path: '/agendar',
        name: 'agendar',
        component:() => import('../components/DashboarPsicologa/AgendarComp.vue'),
      }
      ,
      {
        path: '/citas',
        name: 'citas',
        component:() => import('../components/DashboarPsicologa/CitasComp.vue'),
       
      },
      {
        path: '/agendapsi',
        name: 'agendapsi',
        component:() => import ('../components/DashboarPsicologa/AgendarComp.vue') 
      },
      {
        path: '/reporte',
        name: 'reporte',
        component:() => import('../components/DashboarPsicologa/ReporteComp.vue')
      },
    ]
  },
  {
    path: '/enfermera',
    name: 'enfermera',
    component: EnfermeraView,
    children: [
      {
        path: '/evento',
        name: 'evento',
        component:() => import ('../components/DashboardaprendizEnfermera/EventosEnfermeraComp.vue')
      }
    ]
  },

  {

    path: '/aprendiz',
    name: 'aprendiz',
    component: AprendizView,
    children: [
      {
        path: '/citaaprendiz',
        name: '/citaaprendiz',
        component:() => import ('../components/DashboardaprendizEnfermera/CitasAprendizComp.vue'),
        // children: [ 
        //   {
        //    path: 'agendaaprendiz',
        //    name: 'agenda',
        //    component:() => import ('../components/DashboardaprendizEnfermera/AgendaLFcom.vue')


        //   }

        // ]

       
      },
    

      
      
      {
        path: '/miscitas',
        name: 'miscitas',
        component:() => import ('../components/DashboardaprendizEnfermera/MisCitasComp.vue') 
      },
     
      
     
    ]
   
  },
 
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
