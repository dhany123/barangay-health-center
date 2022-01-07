<template>
  <div>
    <v-tabs
      v-model="tab"
      show-arrows
      color="white"
      active-class="active-tab"
      grow
      hide-slider
    >
      <v-tab href="#all-residents"> All Residents </v-tab>
      <v-tab href="#children"> 0-71 months </v-tab>
      <v-tab href="#"> 4Ps</v-tab>
      <v-tab href="#bp-monitoring"> BP Monitoring </v-tab>
      <v-tab href="#pregnancy-record"> Pregnancy Record </v-tab>
      <v-tab href="#birth-registry"> Birth Registry </v-tab>
    </v-tabs>

    <v-tabs-items :value="tab" touchless style="background-color: transparent">
      <v-tab-item value="all-residents">
        <v-container>
          <ResidentsList />
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
    path: /residents
    name: residents
</router>

<script>
import ResidentsList from "~/pages/Residents/List";
import Children from "~/pages/Residents/Children";
import BPMonitoring from "~/pages/Residents/BPMonitoring";
import PregnancyRecord from "~/pages/Residents/PregnancyRecord";
import BirthRegistry from "~/pages/Residents/BirthRegistry";

export default {
  components: {
    ResidentsList,
    Children,
    BPMonitoring,
    PregnancyRecord,
    BirthRegistry,
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