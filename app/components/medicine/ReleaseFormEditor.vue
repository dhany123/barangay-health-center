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

        <v-toolbar-title> Release Medicine Form</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-record" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label">Resident Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.resident_name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Age</label>
              <v-text-field outlined dense v-model="form.age"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Concern</label>
              <v-text-field
                outlined
                dense
                v-model="form.concern"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Quantity</label>
              <v-text-field
                outlined
                dense
                type="number"
                v-model="form.quantity"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Medicine Name</label>
              <v-select
                :items="medicines"
                v-model="form.medicine_name"
                item-text="name"
                item-value="id"
                outlined
                dense
                placeholder="Choose Medicine"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Medicine Stock</label>
              <v-text-field
                outlined
                dense
                readonly
                v-model="medicines.quantity"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label"> Date Released</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.date_released"
                :rules="[rules.required]"
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
        return "View Medicine";
      }
      return this.item && this.item.id ? "Update Form" : "Add ";
    },
  },

  data() {
    return {
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
      medicines: [],
    };
  },

  methods: {
    fetchMedicines: call("medicines/fetchItems"),
    createRecord: call("medicines/released/createItem"),
    updateRecord: call("medicines/released/updateItem"),

    add() {
      if (!this.$refs["form-record"].validate()) return;
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
            resident_name: "",
            age: "",
            concern: "",
            quantity: "",
            medicine_name: "",
            date_released: "",
          },
          ...val,
        };
      },
      immediate: true,
    },
  },

  async fetch() {
    this.fetchMedicines().then((response) => {
      this.medicines = response.data;
    });
  },
};
</script>