<template>
  <v-dialog
    v-model="showDialog"
    max-width="800"
    scrollable
    transition="slide-x-reverse-transition"
  >
    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title> Add Ante-Partum Visits </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="closeDialog"><v-icon>mdi-close</v-icon></v-btn>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-antepartum-visit">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label">Date</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="item.date"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <label class="label"> UT/WT</label>
              <v-text-field outlined dense v-model="item.ut_wt"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">BP</label>
              <v-text-field outlined dense v-model="item.bp"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">FUNDIC Ht</label>
              <v-text-field
                outlined
                dense
                v-model="item.fundic_ht"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Presenation FHB</label>
              <v-text-field
                outlined
                dense
                v-model="item.presentation_fhb"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Hb</label>
              <v-text-field outlined dense v-model="item.hb"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Urine</label>
              <v-text-field outlined dense v-model="item.urine"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Exam Sugar</label>
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.exam_sugar_1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    outlined
                    dense
                    v-model="item.exam_sugar_2"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
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
  },
  mixins: [DialogMixin],
  data() {
    return {
      form: {
        date: "",
        ut_wt: "",
        bp: "",
        fundic_ht: "",
        presentation_fhb: "",
        hb: "",
        urine: "",
        exam_sugar_1: "",
        exam_sugar_2: "",
      },
    };
  },
  methods: {
    add() {
      this.$emit("add-record");
    },
  },
};
</script>