<template>
  <v-dialog
    v-model="showDialog"
    max-width="400"
    scrollable
    transition="slide-x-reverse-transition"
  >
    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title> Add Complaints/Diagnosis </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-8">
        <v-form ref="form-record">
          <v-row dense>
            <v-col cols="12">
              <label class="label">Date</label>
              <v-text-field
                outlined
                dense
                v-model="item.date"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <label class="label">Complaints/Diagnosis</label>
              <v-textarea
                outlined
                rows="2"
                v-model="item.complaints_diagnosis"
              ></v-textarea>
            </v-col>

            <v-col cols="12">
              <label class="label">Treatment</label>
              <v-textarea
                outlined
                rows="2"
                v-model="item.treatment"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="closeDialog"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="add"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";

export default {
  props: {
    item: Object,
    value: Boolean,
    readOnly: Boolean,
  },

  mixins: [DialogMixin],

  methods: {
    add() {
      this.$emit("add-record");
    },
  },
};
</script>