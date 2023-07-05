<template>
  <BackGroundComponent>
    <template v-slot:not-found>
      <NotFoundComponent></NotFoundComponent>
    </template>
  </BackGroundComponent>
</template>

<script>
import BackGroundComponent from "@/components/external/Background.vue";
import NotFoundComponent from "@/components/external/NotFound.vue";

export default {
  name: "NotFound",
  components: {
    BackGroundComponent,
    NotFoundComponent
  }
};
</script>
