<template>
  <div>
    <v-tabs
      v-model="tab"
      show-arrows
      color="white"
      active-class="active-tab"
      hide-slider
    >
      <v-tab href="#medicines"> Medicine Detail </v-tab>
      <v-tab href="#medicine-form"> Medicine Release Form </v-tab>
      <v-tab href="#removed-medicine"> Removed Medicine Record</v-tab>
    </v-tabs>

    <v-tabs-items :value="tab" touchless style="background-color: transparent">
      <v-tab-item value="medicines">
        <v-container>
          <MedicineDetail />
        </v-container>
      </v-tab-item>

      <v-tab-item value="medicine-form">
        <v-container> <ReleaseForm /> </v-container>
      </v-tab-item>

      <v-tab-item value="removed-medicine">
        <v-container> <MedicineRemoved /> </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<router lang="yaml">
    path: /medicine
    name: medicine
</router>

<script>
import MedicineDetail from "~/pages/Medicine/Detail";
import ReleaseForm from "~/pages/Medicine/ReleaseForm";
import MedicineRemoved from "~/pages/Medicine/Remove";

export default {
  components: {
    MedicineDetail,
    ReleaseForm,
    MedicineRemoved,
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