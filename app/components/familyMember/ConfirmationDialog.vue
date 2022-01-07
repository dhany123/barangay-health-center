
<template>
  <v-dialog
    v-model="showDialog"
    width="500"
    scrollable
    transition="slide-x-reverse-transition"
    content-class="add-deal-dialog"
  >
    <v-card tile class="pa-4">
      <ConsumerView
        :isDialogOpen="detailsDialogOpen"
        @close="detailsDialogOpen = false"
      />

      <PricingDialog
        :isDialogOpen="isPricingDialogOpen"
        @close="isPricingDialogOpen = false"
      />

      <v-card-text>
        <label class="label">Would like add family members?</label>
        <v-radio-group column v-model="selectedItem">
          <v-radio label="No" value="no"></v-radio>
          <v-radio label="Yes" value="yes"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-btn class="mr-4">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark @click="proccedPaymentOption"
          >Proceed</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
export default {
  mixins: [DialogMixin],
  data() {
    return {
      detailsDialogOpen: false,
      isPricingDialogOpen: false,
      selectedItem: "",
    };
  },

  methods: {
    proccedPaymentOption() {
      if (this.selectedItem === "no") {
        this.detailsDialogOpen = true;
      } else if (this.selectedItem === "yes") {
        this.isPricingDialogOpen = true;
      }
    },
  },
};
</script>
