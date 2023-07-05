<template>
  <ExternalBaseComponent>
    <template v-slot>
      <LoginComponent></LoginComponent>
    </template>
  </ExternalBaseComponent>
</template>

<script lang="ts">
import ExternalBaseComponent from "@/components/external/Base.vue";
import LoginComponent from "@/components/external/Login.vue";

export default {
  name: "LoginView",
  components: {
    ExternalBaseComponent,
    LoginComponent
  }
};
</script>
