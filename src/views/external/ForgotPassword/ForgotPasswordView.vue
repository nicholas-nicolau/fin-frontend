<template>
  <ExternalBaseComponent>
    <template v-slot>
      <ForgotPasswordComponent></ForgotPasswordComponent>
    </template>
  </ExternalBaseComponent>
</template>

<script lang="ts">
import ExternalBaseComponent from "@/components/external/Base.vue";
import ForgotPasswordComponent from "@/components/external/ForgotPassword.vue";

export default {
  name: "ForgotPasswordView",
  components: {
    ExternalBaseComponent,
    ForgotPasswordComponent
  }
};
</script>
