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

        <v-toolbar-title> Add Stock </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-record">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label">Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.name"
                readonly
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Type</label>
              <v-text-field
                outlined
                dense
                v-model="form.type"
                readonly
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Description</label>
              <v-text-field
                outlined
                dense
                v-model="form.description"
                readonly
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Quantity</label>
              <v-text-field
                outlined
                dense
                type="number"
                v-model="form.stocks.quantity"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Date Recieved</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.stocks.date_received"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Supplier Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.stocks.supplier_name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Expiry Date</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.stocks.expiry_date"
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
    createMedicine: call("medicines/createItem"),
    updateMedicine: call("medicines/updateItem"),

    add() {
      if (!this.$refs["form-record"].validate()) return;
      this.createMedicine(this.form)
        .then((response) => {
          if (response.data.success) {
            this.$toast({
              icon: "success",
              title: "Lead successfully added.",
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

      this.updateMedicine(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Lead successfully updated.",
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
            stocks: [
              {
                id: "",
                quantity: "",
                date_received: "",
                supplier_name: "",
                expiry_date: "",
              },
            ],
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>