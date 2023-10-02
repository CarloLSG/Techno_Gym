<script>
export default {
    name: 'ToolbarComponent',
  data() {
      return {
        items: [
          { label: "Home", to: "/home" },
          { label: "Health Checks", to: "/analytics/health-checks" }
        ],
      };
  }
}

</script>

<template>
  <header>
    <pv-toolbar class="bg-primary">
      <template #start>
        <router-link to="/home" class="title bg-primary">
          <span><b>TechnoGym TechnoRun Analytics</b></span>
        </router-link>
      </template>
      <template #end>
        <div class="flex-column">
          <router-link v-for="item in items" :to="item.to" custom v-slot="{ navigate, href }" :key="item.label">
            <pv-button class="p-button-text text-white" :href="href" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>
.title {
  text-decoration: none;
  color: inherit;
}
</style>