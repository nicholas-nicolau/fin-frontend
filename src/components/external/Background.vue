<template>
  <div
    id="container"
    class="bg-primary overflow-hidden vh-100 vw-100 position-relative exclude-transition"
  >
    <div class="position-relative">
      <slot name="header"></slot>
      <slot name="command-container"></slot>
      <slot name="not-found"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackgrounComponent"
});
</script>

<style scoped>
#container {
  position: relative;
}

#container::before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/waves-background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.21;
}
</style>
