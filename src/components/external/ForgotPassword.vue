<template>
  <form
    class="d-flex flex-column justify-content-between align-items-center"
    id="form"
  >
    <input class="form-control shadow-none" type="email" placeholder="Email" />

    <div class="container-fluid d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-secondary btn-lg text-white"
        title="Voltar"
        @click="$router.push('/')"
      >
        Voltar
      </button>

      <button
        type="submit"
        class="btn btn-danger btn-lg text-white"
        title="Recuperar Senha"
      >
        Recuperar Senha
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupComponent"
});
</script>

<style scoped>
* {
  color: white;
}

#form {
  height: 20vh;
}

input {
  min-width: 250px;
  height: 6vh;
  min-height: 50px;
  opacity: 0.3;
}

button {
  width: 11vw;
  height: 7vh;
  min-width: 120px;
  margin: 0 auto;
}

input:focus {
  outline: none;
}

input,
input::placeholder {
  color: black;
  font-size: calc(12px + 0.5vw);
  font-style: bold;
  font-weight: 400;
}
</style>
