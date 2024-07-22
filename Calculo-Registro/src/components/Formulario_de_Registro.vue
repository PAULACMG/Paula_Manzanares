<script setup>
import exportedform from '@/components/exportedform.vue';
</script>

<template>
    <h1>Programación Front End</h1>
    <exportedform />

    <br><br>
    <form @submit.prevent="submitForm" class="container">
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" @input="validateName" class="form-control"/>
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
        </div>
        <div class="form-group">
            <label for="email">Correo:</label>
            <input type="email" id="email" v-model="form.email" @input="validateEmail" class="form-control"/>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
        </div>
        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="form.password" @input="validatePassword" class="form-control"/>
            <p v-if="errors.password" class="error-message">{{ errors.password }}</p>        
        </div>
        <div class="form-group">
            <label for="repeatPassword">Repetir contraseña:</label>
            <input type="password" id="repeatPassword" v-model="form.repeatPassword" @input="validateRepeatPassword" class="form-control"/>
            <p v-if="errors.repeatPassword" class="error-message">{{ errors.repeatPassword }}</p>
        </div>     
        
        
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>

    
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    repeatPasword: ''
                },
                errors: {
                    name: '',
                    email: '',
                    password: '',
                    repeatPasword: '',
                }
            };
        },
        methods: {
            validateName() {
                if (!this.form.name) {
                    this.errors.name = 'El campo nombre es requerido';                   
                } else {
                    this.errors.name = '';
                }
            },

            validateEmail() {
                if (!this.form.email) {
                    this.errors.email = 'El campo correo es requerido';
                } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
                    this.errors.email = 'El correo es inválido';
                } else {
                    this.errors.email = '';
                }
            },
            validatePassword() {
                if (!this.form.password) {
                    this.errors.password = 'El campo contraseña es requerido';
                } else if (this.form.password.length < 5) {
                    this.errors.password = 'La contraseña debe tener al menos 5 caracteres';
                } else {
                    this.errors.password = '';
                }
            },

            validateRepeatPassword() {
                if (!this.form.repeatPassword) {
                     this.errors.repeatPassword = 'El campo repetir contraseña es requerido';
                } else if (this.form.repeatPassword !== this.form.password) {
                    this.errors.repeatPassword = 'Las contraseñas no coinciden';
                } else {
                    this.errors.repeatPassword = '';
                }
            },
            
            submitForm() {
                this.validateName();
                this.validatePassword();
                this.validateEmail();
                this.validateRepeatPassword();

                if (!Object.values(this.errors).some(error => error !== '')) {
                    // Aquí realice la lógica para enviar el formulario
                    alert('El registro se ha realizado correctamente');
                }
            }
        }
    };
</script>

<style scoped>
    .container {
        width: 30%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .form-group {
        margin-bottom: 10px;
    }

    .label {
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .error-message {
        color: red;
        margin-top: 5px;
    }

    .btn-primary {
        background-color: #007bff;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    /* Estilos adicionales para mejorar la apariencia */
    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"]
    input[type="repetirpassword"] {
        margin-bottom: 10px;
    }

    button {
        margin-top: 20px;
    }

</style>