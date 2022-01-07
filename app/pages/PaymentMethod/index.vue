<template>
  <v-container
    fill-height
    fluid
    style="background-color: rgba(109, 38, 113, 0.13)"
    class="px-10 px-md-16"
  >
    <PricingSuccessPayment
      :isDialogOpen="isSuccessPaymentDialogOpen"
      @close="isSuccessPaymentDialogOpen = false"
    />

    <v-img
      max-height="150"
      max-width="150"
      :src="require('@/assets/images/logo.png')"
      class="mx-auto mx-md-0"
    ></v-img>

    <v-row align="center">
      <v-col cols="12" md="9" order="1" order-md="0">
        <h2 class="text-center text-md-left">Select Payment Method</h2>
        <v-tabs
          v-model="tab"
          background-color="#ECE3ED"
          class="mt-4"
          show-arrows
        >
          <v-tab dark>
            <v-icon left> mdi-credit-card-outline </v-icon> Credit Card
          </v-tab>
          <v-tab> <v-icon left> mdi-paypal </v-icon> Paypal</v-tab>
        </v-tabs>
        <v-tabs-items :value="tab" class="mt-4">
          <v-tab-item>
            <v-container style="background-color: #ece3ed">
              <v-row class="pr-md-16">
                <v-col cols="12" md="6"
                  ><label class="label">First Name</label>
                  <v-text-field outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">Last Name</label>
                  <v-text-field outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <label class="label">Card Number</label>
                  <v-text-field outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <label class="label">Postal/Zip</label>
                  <v-text-field outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <label class="label">CVV</label>
                  <v-text-field outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">Month</label>
                  <v-text-field outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">Year</label>
                  <v-text-field outlined dense></v-text-field>
                </v-col>
              </v-row>

              <div class="text-center text-md-left">
                <v-btn large color="primary" dark @click="paymentSuccessClick"
                  >Procced with Payment</v-btn
                >
              </div>
            </v-container>
          </v-tab-item>
          <v-tab-item> </v-tab-item>
        </v-tabs-items>
      </v-col>

      <v-col cols="12" sm="6" md="3" class="mx-auto mx-md-0">
        <v-card>
          <v-card-text>
            <v-container class="px-8 text-center">
              <v-img
                max-height="100"
                max-width="100"
                :src="require('@/assets/images/price-tag.svg')"
                class="mx-auto"
              ></v-img>
              <h2 class="mb-4">Upgrade</h2>
              <div class="d-inline-flex">
                <div class="text-h5">$</div>
                <h1 class="text-h2 text-md-h1">.99</h1>
              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<router lang="yaml">
    path: /payment-method
    name: payment-method
</router>

<script>
export default {
  data() {
    return {
      tab: null,
      isSuccessPaymentDialogOpen: false,
    };
  },

  methods: {
    paymentSuccessClick() {
      this.isSuccessPaymentDialogOpen = true;
    },
  },
};
</script>