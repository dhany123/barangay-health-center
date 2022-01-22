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
        <v-form ref="form-resident" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label">Last Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.last_name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">First Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.first_name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Middle Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.middle_name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Gender</label>
              <v-select
                :items="genders"
                v-model="form.gender"
                item-text="name"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>
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
              <label class="label">Civil Status</label>
              <v-select
                :items="civilStatusItems"
                v-model="form.civil_status"
                item-text="name"
                outlined
                dense
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Educational Attainment</label>
              <v-text-field
                outlined
                dense
                v-model="form.educational_attainment"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Place of Birth</label>
              <v-text-field
                outlined
                dense
                v-model="form.place_of_birth"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Relationship with the Head</label>
              <v-text-field
                outlined
                dense
                v-model="form.relationship_with_the_head"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Occupation</label>
              <v-text-field
                outlined
                dense
                v-model="form.occupation"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Religion</label>
              <v-text-field
                outlined
                dense
                v-model="form.religion"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Citizenship</label>
              <v-text-field
                outlined
                dense
                v-model="form.citizenship"
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
              <label class="label">Household no.</label>
              <v-text-field
                outlined
                dense
                v-model="form.household_no"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Building no.</label>
              <v-text-field
                outlined
                dense
                v-model="form.building_no"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Zone/Purok</label>
              <v-text-field
                outlined
                dense
                v-model="form.zone_purok"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">4Ps Member</label>
              <v-select
                :items="yesOrNo"
                v-model="form.is_4ps"
                item-text="name"
                outlined
                dense
                :rules="[rules.required]"
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

export default {
  props: {
    item: Object,
    value: Boolean,
    readOnly: Boolean,
  },

  mixins: [DialogMixin],
  computed: {
    dialogTitle() {
      if (this.readOnly) {
        return "View Resident";
      }
      return this.item && this.item.id ? "Update Resident" : "Add Resident";
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
      civilStatusItems: [
        {
          id: 1,
          name: "Single",
        },
        {
          id: 2,
          name: "Married",
        },
        {
          id: 3,
          name: "Divorced",
        },
        {
          id: 4,
          name: "Widowed",
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

      services: [],
    };
  },

  methods: {
    createResident: call("residents/createItem"),
    updateResident: call("residents/updateItem"),

    add() {
      if (!this.$refs["form-resident"].validate()) return;

      this.createResident(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Resident successfully added.",
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

      this.updateResident(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Resident successfully updated.",
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
            gender: this.genders[0],
            dob: "",
            age: "",
            civil_status: this.civilStatusItems[0],
            educational_attainment: "",
            relationship_with_the_head: "",
            occupation: "",
            religion: "",
            citizenship: "",
            family_no: "",
            household_no: "",
            zone_purok: "",
            is_4ps: this.yesOrNo[0],
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>