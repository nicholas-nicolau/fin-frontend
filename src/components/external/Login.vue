<template>
  <form
    class="d-flex flex-column justify-content-between align-items-center"
    id="form"
  >
    <input
      class="form-control shadow-none"
      type="email"
      placeholder="Usuário, Email ou CPF"
    />
    <input
      class="form-control shadow-none"
      type="password"
      placeholder="Senha"
    />

    <div class="links container-fluid d-flex justify-content-between text-div">
      <router-link to="/signup" class="text-link">Cadastrar-se</router-link>
      <router-link to="/forgot_password" class="text-link"
        >Redefinir Senha</router-link
      >
    </div>

    <button
      type="submit"
      class="btn btn-danger btn-lg text-white"
      title="Entrar"
    >
      Entrar
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent"
});
</script>

<style scoped>
* {
  color: white;
}

.text-link {
  font-size: calc(10px + 0.7vw);
}

.text-div {
  min-width: 250px;
  margin: 0;
}

#form {
  height: 30vh;
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
