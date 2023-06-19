 <template>
    
    <div class="calendary  col-12 col-med-12 mt-4 ">
        <div class="container">
          
          <VDatePicker v-model="date"   />
          
        </div>
        <div class="div2 col-6 ">
          <span class="fecha">{{ FechaAgenda(date) }}</span>
        </div>
      </div>
    </template>
    <script setup>
    
    
   
   
    import { ref } from 'vue';

    const date = ref(new Date());
    
    const FechaAgenda = (date) => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return date.toLocaleString('es-ES', options)
    };
    </script>
    <style scoped>
    .calendary {
      display: flex;
      background-image: url(@/assets/images/calendario4.png);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      height: 90hv;
      width: 80%;
      margin: 0 auto;
      border-radius: 20px;
    }
    @media (max-width: 575px) {
      .calendary {
        justify-content: center;
        width: 100%;
        background-image: none;
        background-color: #e6ddf1;
        padding: none;
        display: block;
        height: 100vh;
        position: relative;
      }
      .calendary h1 {
        color: rgb(0, 68, 255);
      }
      .container {
        padding: none;
        height: 35vh;
      }
    }
    @media (max-width: 768px) {
      .calendary {
        width: 100%;
        height: 80vh;
        background-repeat: no-repeat;
      }
      .div2 {
        width: 200%;
        height: 26.5vh;
      }
    }
    @media (max-width: 575px) {
      .div2 {
        position: absolute;
        width: 20%;
      }
      .fecha {
        color: rgb(97, 31, 219);
      }
    }
    .container {
      justify-content: left;
      display: flex;
      width: max-content;
      padding: 20px;
    }
    .div2 {
      border-radius: 20px;
      min-width: 60%;
      text-align: right;
      background: linear-gradient(50deg, #abc2ec, transparent);
      padding: 150px;
      margin: 1em auto;
      position: relative;
    }
    .fecha {
      display: flex;
      vertical-align: top;
      align-items: flex-start;
      font-family: Arial, Helvetica, sans-serif;
      width: 100;
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
    }
    </style>