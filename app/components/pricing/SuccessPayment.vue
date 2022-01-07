<template>
  <v-dialog
    v-model="showDialog"
    max-width="400"
    persistent
    scrollable
    transition="slide-x-reverse-transition"
    content-class="add-deal-dialog"
  >
    <v-card>
      <v-card-text>
        <v-container class="text-center">
          <v-img
            max-height="200"
            max-width="200"
            :src="require('@/assets/images/success.jpg')"
            class="mx-auto"
          ></v-img>
          <h1 class="mb-4">Payment successful!</h1>
          <p>
            Your payment has been confirmed and successful. Please check your
            email.
          </p>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center mb-6">
        <v-btn color="primary" dark @click="backToHomePageClick"
          >Back to Home Page</v-btn
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
    backToHomePageClick() {
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

