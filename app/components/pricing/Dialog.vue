<template>
  <v-dialog
    persistent
    v-model="showDialog"
    max-width="400"
    scrollable
    transition="slide-x-reverse-transition"
    content-class="add-deal-dialog"
  >
    <v-card>
      <v-card-text>
        <v-container class="px-8 text-center">
          <v-img
            max-height="100"
            max-width="100"
            :src="require('@/assets/images/price-tag.svg')"
            class="mx-auto my-4"
          ></v-img>
          <h2 class="mb-4">Upgrade</h2>
          <div class="d-inline-flex">
            <div class="display-1">$</div>
            <h1 class="display-4">.99</h1>
          </div>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center mb-4">
        <v-btn class="mr-4" @click="onCancelClick">Cancel</v-btn>
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
  methods: {
    proccedPaymentOption() {
      this.$router.push({
        name: "payment-method",
      });
    },

    onCancelClick() {
      this.$router.push({
        name: "profile",
      });
    },
  },
};
</script>

