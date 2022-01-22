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
        <v-form ref="form-child" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label"> Name of Child</label>
              <v-text-field
                outlined
                dense
                v-model="form.name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label"> Name of Parent</label>
              <v-text-field
                outlined
                dense
                v-model="form.parent_name"
                :rules="[rules.required]"
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
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Age(in months)</label>
              <v-text-field
                outlined
                dense
                type="number"
                v-model="form.age"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Weight</label>
              <v-text-field
                outlined
                dense
                v-model="form.weight"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Height</label>
              <v-text-field
                outlined
                dense
                v-model="form.height"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Family no.</label>
              <v-text-field
                outlined
                dense
                v-model="form.family_no"
                :rules="[rules.required]"
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
              <label class="label">Weight Status</label>
              <v-select
                :items="weightStatuses"
                v-model="form.weight_status"
                item-text="name"
                item-value="id"
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

      weightStatuses: [
        {
          id: 1,
          name: "Underweight",
        },
        {
          id: 2,
          name: "Normal Weight",
        },
        {
          id: 3,
          name: "Overweight",
        },

        {
          id: 4,
          name: "Obesity I",
        },

        {
          id: 5,
          name: "Obesity II",
        },

        {
          id: 6,
          name: "Obesity III",
        },
      ],
    };
  },

  methods: {
    createChild: call("residents/children/createItem"),
    updateChild: call("residents/children/updateItem"),

    add() {
      if (!this.$refs["form-child"].validate()) return;

      this.createChild(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Child successfully added.",
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

      this.updateChild(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Child successfully updated.",
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
            name: "",
            parent_name: "",
            gender: this.genders[0],
            dob: "",
            age: "",
            weight: "",
            height: "",
            family_no: "",
            zone_purok: "",
            weight_status: this.weightStatuses[0],
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>