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

        <v-toolbar-title> {{ dialogTitle }} </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-lead" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label"> Last Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.last_name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label"> First Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.first_name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label"> Middle Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.middle_name"
              ></v-text-field>
            </v-col>

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
              <label class="label">Gender</label>
              <v-select
                :items="genders"
                v-model="form.gender"
                item-text="name"
                item-value="id"
                outlined
                dense
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Birth Weight</label>
              <v-text-field
                outlined
                dense
                v-model="form.birth_weight"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Place of Birth</label>
              <v-text-field
                outlined
                dense
                v-model="form.birth_place"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Att. of Birth</label>
              <v-text-field
                outlined
                dense
                v-model="form.birth_attendant"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Registered</label>
              <v-select
                :items="yesOrNo"
                v-model="form.is_registered"
                item-text="name"
                item-value="id"
                outlined
                dense
              ></v-select>
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
        return "View Child";
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
      genders: [
        {
          id: 1,
          name: "Male",
        },
        {
          id: 2,
          name: "Female",
        },
      ],
      yesOrNo: [
        {
          id: 1,
          name: "No",
        },
        {
          id: 2,
          name: "Yes",
        },
      ],
    };
  },

  methods: {
    createRecord: call("residents/birthregistry/createItem"),
    updateRecord: call("residents/birthregistry/updateItem"),

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
            last_name: "",
            first_name: "",
            middle_name: "",
            parent_name: "",
            dob: "",
            household_no: "",
            family_no: "",
            zone_purok: "",
            gender: this.genders[0],
            birth_weight: "",
            birth_place: "",
            birth_attendant: "",
            is_registered: this.yesOrNo[0],
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>