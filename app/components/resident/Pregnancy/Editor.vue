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

        <v-toolbar-title> Pregnancy Record Form </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-lead" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label"> Name of Parent</label>
              <v-text-field
                outlined
                dense
                v-model="form.parent_name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Date of Birth</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.dob"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Age</label>
              <v-text-field outlined dense v-model="form.age"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Household no.</label>
              <v-text-field
                outlined
                dense
                v-model="form.household_no"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Family no.</label>
              <v-text-field
                outlined
                dense
                v-model="form.family_no"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Zone/Purok</label>
              <v-text-field
                outlined
                dense
                v-model="form.zone_purok"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Mobile No.</label>
              <v-text-field
                outlined
                dense
                v-model="form.mobile_no"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">PIH</label>
              <v-text-field outlined dense v-model="form.pih"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">LMP</label>
              <v-text-field outlined dense v-model="form.lmp"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">EDC</label>
              <v-text-field outlined dense v-model="form.edc"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">GP</label>
              <v-text-field outlined dense v-model="form.gp"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Last Check-up</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.last_check_up"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Date Delivered</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.date_delivered"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Name of Child</label>
              <v-text-field
                outlined
                dense
                v-model="form.child_name"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="closeDialog"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="item && item.id ? update() : add()">
          Save
        </v-btn>
      </v-card-actions>
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
    readOnly: Boolean,
  },

  mixins: [DialogMixin],
  computed: {
    leads: get("leads/items"),
    dialogTitle() {
      if (this.readOnly) {
        return "View Resident";
      }
      return this.item && this.item.id ? "Update Child" : "Add Child";
    },
  },

  data() {
    return {
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
    };
  },

  methods: {
    createRecord: call("residents/pregnancyrecord/createItem"),
    updateRecord: call("residents/pregnancyrecord/updateItem"),

    add() {
      this.createRecord(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Record successfully added.",
            });

            this.$emit("onSubmitClick", {
              tag: "save",
              item: response.data,
            });
          }
        })
        .finally(() => {
          this.showDialog = false;
        });
    },

    update() {
      console.info(this.form);

      this.updateRecord(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Record successfully updated.",
            });

            this.$emit("onSubmitClick", {
              tag: "update",
              item: response.data,
            });
          }
        })
        .finally(() => {
          this.showDialog = false;
        });
    },
  },

  watch: {
    item: {
      handler(val) {
        this.form = {
          ...{
            id: null,
            parent_name: "",
            dob: "",
            age: "",
            household_no: "",
            family_no: "",
            zone_purok: "",
            mobile_no: "",
            pih: "",
            lmp: "",
            edc: "",
            gp: "",
            last_check_up: "",
            date_delivered: "",
            child_name: "",
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>