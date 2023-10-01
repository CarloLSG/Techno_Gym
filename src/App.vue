<script>

import ToolbarComponent from "@/shared/components/toolbar.component.vue";

export default {
  name: 'App',
  components: {ToolbarComponent}
}

</script>

<template>
  <toolbar-component></toolbar-component>
  <router-view />
</template>

<style scoped>
</style>
