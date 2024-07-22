<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
    if (router.currentRoute.value.path !== '/') {
        router.push('/');
    }
}

</script>
<template>

    <div>
        <ul>
            <li>
                <a href="#" @click.prevent="goToHome"> Calculo de Calificaciones </a>
        
            </li>

            <li>
                <router-link to="/Formulario_de_Registro">
                    Formulario de Registro
                </router-link>

            </li>
        </ul>

    </div>
</template>