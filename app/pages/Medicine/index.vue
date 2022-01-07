<template>
  <div>
    <v-tabs
      v-model="tab"
      show-arrows
      color="white"
      active-class="active-tab"
      hide-slider
    >
      <v-tab href="#all-residents"> Medicine Record </v-tab>
      <v-tab href="#children"> Medicine Release Form </v-tab>
    </v-tabs>

    <v-tabs-items :value="tab" touchless style="background-color: transparent">
      <v-tab-item value="all-residents">
        <v-container>
          <MedicineRecord />
        </v-container>
      </v-tab-item>

      <v-tab-item value="children">
        <v-container> <Children /> </v-container>
      </v-tab-item>

      <v-tab-item value="bp-monitoring">
        <v-container> <BPMonitoring /> </v-container>
      </v-tab-item>

      <v-tab-item value="pregnancy-record">
        <v-container> <PregnancyRecord /> </v-container>
      </v-tab-item>

      <v-tab-item value="birth-registry">
        <v-container> <BirthRegistry /> </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<router lang="yaml">
    path: /medicine
    name: medicine
</router>

<script>
import MedicineRecord from "~/pages/Medicine/MedicineRecord";

export default {
  components: {
    MedicineRecord,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped>
.active-tab {
  background-color: #0555ac;
  border-radius: 24px;
}

.v-tabs {
  border-radius: 24px;
}
</style>