<script>
import {TreadmillsApiService} from "@/analytics/services/treadmills-api.service";

export default {
  name: 'HomeComponent',
  data() {
    return {
      averageData: {volts: 0, watts: 0, hp: 0},
      treadmillService: null,
      healthChecks: []
    }
  },
  created() {
    this.treadmillService = new TreadmillsApiService();
    this.treadmillService.getAllHealthChecks().then(response => {
      this.healthChecks = response.data;
      this.calculateAverage();
    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    calculateAverage() {
      let totalVolts = 0.0;
      let totalWatts = 0.0;
      let totalHp = 0.0;

      // Not considering hp = 0
      let totalCount = 0;

      for (const healthCheck of this.healthChecks) {
        if (healthCheck.hp !== 0) {
          totalVolts += healthCheck.volts;
          totalWatts += healthCheck.watts;
          totalHp += healthCheck.hp;
          totalCount++;
        }
      }

      // Calculate average
      this.averageData.volts = totalCount !== 0 ? (totalVolts / totalCount).toFixed(2) : 0;
      this.averageData.watts = totalCount !== 0 ? (totalWatts / totalCount).toFixed(2) : 0;
      this.averageData.hp = totalCount !== 0 ? (totalHp / totalCount).toFixed(2) : 0;
    }
  }
}
</script>

<template>
  <div class="flex justify-content-center mt-6 card-info">
    <pv-card style="width: 25em" v-if="averageData.hp" class="bg-primary">
      <template #title>
        Average Performance
      </template>
      <template #content>
        <p>Volts: {{ averageData.volts }}</p>
        <p>Watts: {{ averageData.watts }}</p>
        <p>HP: {{ averageData.hp }}</p>
      </template>
    </pv-card>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped>

</style>