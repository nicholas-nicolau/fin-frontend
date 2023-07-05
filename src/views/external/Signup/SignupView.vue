<template>
  <ExternalBaseComponent>
    <template v-slot>
      <SignupComponent></SignupComponent>
    </template>
  </ExternalBaseComponent>
</template>

<script lang="ts">
import ExternalBaseComponent from "@/components/external/Base.vue";
import SignupComponent from "@/components/external/Signup.vue";

export default {
  name: "SignupView",
  components: {
    ExternalBaseComponent,
    SignupComponent
  }
};
</script>
