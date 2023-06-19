<template>
    <div>
        <input type="file" @change="subirImagen">
        <button @click="obtenerImagenes">Obtener Imágenes</button>
    </div>
    <div>
        <h1>Imágenes</h1>

        <div class="container">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Img</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="imagen in imagenes" :key="imagen.id">
                        <th>{{ imagen.idEvento }}</th>
                        <td>{{ imagen.nombre }}</td>
                        <th> <img :src="imagenUrl(imagen)" alt="" width="70" height="70"> </th>
                        <td>
                            <input type="button" value="eliminar" class="btn btn-secondary"
                                @click="eliminarImagen(imagen.idEvento)">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'
export default {
    name: 'EventosEnfermeraComp',
    data() {
        return {
            imagenes: []
        };
    },
    methods: {
        async subirImagen(event) {
            const file = event.target.files[0];
            // Verificar si se seleccionó un archivo y si es una imagen
            if (file && file.type.startsWith('image/')) {
                const formData = new FormData();
                formData.append('imagen', file);

                try {
                    const response = await fetch('http://localhost:4000/imagen', {
                        method: 'POST',
                        body: formData
                    });

                    if (response.ok) {
                        // Procesar la respuesta si es necesario
                        // Por ejemplo, mostrar un mensaje de éxito y actualizar la lista de imágenes llamando a obtenerImagenes()


                    } else {
                        console.error('Error al subir la imagen');

                    }
                } catch (error) {
           console.log(error);
                }
            }
        },
        async obtenerImagenes() {
            try {
                const response = await fetch('http://localhost:4000/imagenes');
                if (response.ok) {
                    const data = await response.json();
                    this.imagenes = data;
                    

                }

            } catch (error) {
           console.log(
            error
           );
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        async eliminarImagen(idEvento) {
            await axios.delete('http://localhost:4000/evento/' + idEvento)
                .then((response) => {
                    console.log(response);
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "evento eliminado correctamente.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
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
