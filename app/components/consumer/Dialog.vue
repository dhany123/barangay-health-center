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
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title> Update Details </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn light @click="closeDialog" color="#Fff"> Save </v-btn>
      </v-toolbar>
      <v-card-text>
        <ConsumerEditor />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
export default {
  mixins: [DialogMixin],

  data() {
    return {};
  },
};
</script>
