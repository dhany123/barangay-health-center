<template>
  <v-dialog
    v-model="showDialog"
    max-width="600"
    persistent
    scrollable
    transition="slide-x-reverse-transition"
    content-class="add-deal-dialog"
  >
    <v-card tile>
      <v-toolbar flat dark color="primary" height="60px">
        <v-toolbar-title> {name} </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-img
            max-height="120"
            max-width="120"
            :src="require('@/assets/images/user.svg')"
            class="mx-auto rounded-circle my-2 mb-6"
            alt="Img"
            contain
          ></v-img>

          <v-row>
            <v-col cols="12" md="6">
              <div>
                <div>Name</div>
                <p class="font-weight-bold black--text text-uppercase">name</p>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div>
                <div>Relationship</div>
                <p class="font-weight-bold black--text text-uppercase">
                  relationship
                </p>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <div>
                <div>Date of Birth</div>
                <p class="font-weight-bold black--text text-uppercase">
                  01-12-1997
                </p>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div>
                <div>Mobile Number</div>
                <p class="font-weight-bold black--text text-uppercase">12345</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
export default {
  mixins: [DialogMixin],
  data() {
    return {
      name: "",
      relationship: "",
      dob: "",
      mobile_number: "",

      // Vaccine info
      manufacturer: "",
      dose1: "",
      dose2: "",
      lotNumber: "",
      expirationDate: "",
      location: "",
    };
  },

  methods: {},
};
</script>