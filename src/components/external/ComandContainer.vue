<template>
  <body class="bg-transparent d-flex flex-column align-content-center">
    <div class="container-fluid d-flex justify-content-center">
      <img src="@/assets/logo-with-text-small.svg" alt="Logo" />
    </div>
    <slot></slot>
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommandContainerComponent"
});
</script>

<style scoped>
img {
  width: 10vw;
  min-width: 120px;
  margin-bottom: 5vh;
}

body {
  width: 30vw;
  height: 100%;
  margin: 0 auto;
}
</style>
