<template>
  <div class="container-fluid d-flex justify-content-end p-3">
    <img src="@/assets/logo-with-text-small.svg" alt="Logo" />
  </div>

  <section class="position-relative">
    <div class="h-40 d-flex align-items-center justify-content-center">
      <h1 class="custom-font font-weight-extra-bold text-white">404</h1>
    </div>
    <p class="text-white sub-text">PÁGINA NÃO ENCONTRADA</p>

    <button
      type="button"
      class="btn btn-danger btn-lg text-white"
      @click="$router.push('/')"
      title="Voltar para tela de login"
    >
      Voltar
    </button>
  </section>
</template>

<script>
export default {
  name: "NotFoundComponent"
};
</script>

<style scoped>
h1 {
  font-weight: 900;
  font-size: calc(50px + 22vw);
  margin: 0;
}

button {
  width: 11vw;
  height: 7vh;
  margin: 2vw;
  min-width: 120px;
}

img {
  width: 5vw;
  min-width: 60px;
}

.sub-text {
  font-size: calc(6px + 1.5vw);
}
</style>
