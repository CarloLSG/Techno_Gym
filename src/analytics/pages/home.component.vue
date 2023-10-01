<script>
import {TreadmillsApiService} from "@/analytics/services/treadmills-api.service";

export default {
  name: 'HomeComponent',
  data() {
      return {
        averageValues: { volts: 0, watts: 0, hp: 0 },
        treadmillService: null,
      }
  },
  created() {
    this.treadmillService = new TreadmillsApiService();
    this.treadmillService.getAllHealthChecks()
        .then(async (healthChecksResponse) => {
          const healthChecks = healthChecksResponse.data;
          const treadmillsResponse = await this.treadmillService.getAllTreadmills();
          const treadmills = treadmillsResponse.data;
          const validHealthChecks = await
              Promise.all(healthChecks.filter(async (hc) => {
                const treadmill = treadmills.find((t) => t.id === hc.treadmill)
                return treadmill && hc.hp !== 0;
              }));
          const voltsSum = validHealthChecks.reduce((acc, hc) => acc + hc.volts, 0);
          const wattsSum = validHealthChecks.reduce((acc, hc) => acc + hc.watts, 0);
          const hpSum = validHealthChecks.reduce((acc, hc) => acc + hc.hp, 0);
          const averageValues = {
            volts: Math.round((voltsSum / validHealthChecks.length) * 100) / 100,
            watts: Math.round((wattsSum / validHealthChecks.length) * 100) / 100,
            hp: Math.round((hpSum / validHealthChecks.length) * 100) / 100,
          };
          this.averageValues = averageValues;
        })
  }
}
</script>

<template>
  <div class="card-info">
    <pv-card v-if="averageValues.hp">
      <template #title>
        Average Performance
      </template>
      <template #content>
        <p>Volts: {{ averageValues.volts }}</p>
        <p>Watts: {{ averageValues.watts }}</p>
        <p>HP: {{ averageValues.hp }}</p>
      </template>
    </pv-card>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped>
.card-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5vw;
}
.card-info pv-card {
  width: auto;
  max-width: 100%;
  margin: 0 auto;
}
</style>