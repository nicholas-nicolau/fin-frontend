<template>
  <header class="container-fluid d-flex justify-content-end p-3">
    <i
      class="fa-solid fa-earth-americas fa-2xl header-icons"
      title="Traduções"
    ></i>
    <i
      class="fa-solid fa-circle-half-stroke fa-2xl header-icons"
      title="Alterar modo escuro"
    ></i>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent"
});
</script>

<style scoped>
* {
  color: white;
}
.header-icons {
  color: white;
  margin-right: calc(5px + 0.3vw);
  font-size: calc(25px + 0.7vw);
}

.header-icons:hover {
  cursor: pointer;
}
</style>
