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
        <v-toolbar-title> View User </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-12">
        <div>Name</div>
        <p class="font-weight-bold black--text">
          {{ item.name }}
        </p>

        <div>Location</div>
        <p class="font-weight-bold black--text">
          {{ item.location }}
        </p>

        <div>Website</div>
        <p class="font-weight-bold black--text">
          {{ item.website }}
        </p>

        <div>Company Name</div>
        <p class="font-weight-bold black--text">
          {{ item.company_name }}
        </p>

        <div>Email</div>
        <p class="font-weight-bold black--text">
          {{ item.email }}
        </p>

        <div>Phone</div>
        <p class="font-weight-bold black--text">
          {{ item.phone }}
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
import { call, get } from "vuex-pathify";
import Swal from "sweetalert2";
import { last } from "lodash";

export default {
  props: {
    item: Object,
    value: Boolean,
  },

  mixins: [DialogMixin],
};
</script>