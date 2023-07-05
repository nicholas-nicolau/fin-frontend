<template>
  <BackgroundComponent>
    <template v-slot:header>
      <HeaderComponent></HeaderComponent>
    </template>

    <template v-slot:command-container>
      <CommandContainerComponent>
        <slot></slot>
      </CommandContainerComponent>
    </template>
  </BackgroundComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderComponent from "./Header.vue";
import CommandContainerComponent from "./ComandContainer.vue";
import BackgroundComponent from "./Background.vue";

export default defineComponent({
  name: "BaseComponent",
  components: {
    HeaderComponent,
    CommandContainerComponent,
    BackgroundComponent
  }
});
</script>
