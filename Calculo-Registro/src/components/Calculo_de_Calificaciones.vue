<script setup>
import exportedform from '@/components/exportedform.vue';
</script>

<template>
  <h1>Programación Front End</h1>
  <exportedform />
  <br><br>
  <form @submit.prevent="calcularCalificacion" class="container">
  
      <div class="form-group">
          <label for="name">Nota 1:</label>
          <input type="number" v-model="nota1" min="10" max="70" required class="form-control"/>            
      </div>
      <div class="form-group">
          <label for="name">Nota 2:</label>
          <input type="number" v-model="nota2" min="10" max="70" required class="form-control"/>            
      </div>
      <div class="form-group">
          <label for="name">Nota 3:</label>
          <input type="number" v-model="nota3" min="10" max="70" required class="form-control"/>            
      </div>    
      <div class="form-group">
          <label for="name">Asistencia %:</label>
          <input type="number" v-model="asistencia" min="0" max="100" required class="form-control"/>            
      </div>
      
      <button type="submit" class="btn btn-primary">Calcular</button>
      <p v-if="mensaje">{{ mensaje }}</p>
  </form>
  
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      mensaje: ''
    }
  },
  methods: {
  calcularCalificacion() {
    if (this.validarNotas() && this.validarAsistencia()) {
      // Código para calcular la calificación
    } else {
      this.mensaje = 'Error: Verificar los campos';
    }
  

      const nota1Ponderada = this.nota1 * 0.35;
      const nota2Ponderada = this.nota2 * 0.35;
      const nota3Ponderada = this.nota3 * 0.30;
      const promedioPonderado = (nota1Ponderada + nota2Ponderada + nota3Ponderada);

      if (promedioPonderado >= 40 && this.asistencia >= 80) {
        this.mensaje = `Aprobado con un promedio de ${promedioPonderado.toFixed(2)}`;
      } else {
        this.mensaje = `Tu estado es: Reprobado con un promedio de ${promedioPonderado.toFixed(2)}`;
      }
    },
    validarNotas() {
      return this.nota1 >= 10 && this.nota1 <= 70 &&
             this.nota2 >= 10 && this.nota2 <= 70 &&
             this.nota3 >= 10 && this.nota3 <= 70;
    },
    validarAsistencia() {
      return this.asistencia >= 0 && this.asistencia <= 100;
    }
  }
}
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


input[type="number"] {
    margin-bottom: 10px;
}

button {
    margin-top: 10px;
}

</style>